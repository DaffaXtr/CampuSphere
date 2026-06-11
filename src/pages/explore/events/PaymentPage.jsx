import { useState, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticket = location.state?.ticket;
  const eventData = location.state?.eventData;
  
  const [paymentMethod, setPaymentMethod] = useState('va');
  const [isPaid, setIsPaid] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  // If no ticket selected, redirect back to step 2
  useEffect(() => {
    if (!ticket) {
      navigate('/event/1/register/step2');
    }
  }, [ticket, navigate]);

  if (!ticket) return null;

  const isFree = ticket.price === 0;

  const handleSimulatePayment = () => {
    setIsSimulating(true);
    // Simulate API call for payment
    setTimeout(() => {
      setIsPaid(true);
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto">
      {/* Breadcrumb & Header */}
      <header className="mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'Global Tech Conference 2026', path: `/event/${eventData?.id || 1}` },
          { label: 'Register' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">Registration</h1>
            <p className="font-body-md text-body-md text-text-secondary">Secure your spot for the biggest tech event of the year.</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-fixed text-primary px-md py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            <span className="font-label-sm text-[10px] md:text-label-sm">Closing in 2 days</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Payment */}
        <div className="lg:col-span-8">
          <div className="bento-card rounded-xl p-lg bg-white border border-border">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Personal Info', 'Ticket Selection', 'Payment', 'Confirmation']} 
              currentStep={3} 
              nodeBgColor="bg-surface-container-lowest" 
            />

            {/* Step 3 Content */}
            <div className="space-y-xl mt-lg">
              {isFree ? (
                <div className="text-center py-3xl bg-surface rounded-xl border border-border flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-text-primary mb-2">No Payment Required</h2>
                  <p className="text-body-md text-text-secondary max-w-md">You have selected a free ticket. You can directly proceed to the next step to confirm your registration.</p>
                </div>
              ) : (
                <>
                  <div className="mb-lg">
                    <h2 className="font-headline-md text-headline-md text-text-primary mb-2">Payment Method</h2>
                    <p className="text-body-sm text-text-secondary">Choose your preferred payment method to complete the registration.</p>
                  </div>

                  {/* Payment Options */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                    <div 
                      onClick={() => !isPaid && setPaymentMethod('qris')}
                      className={`p-md rounded-xl border transition-all ${isPaid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${paymentMethod === 'qris' ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}
                    >
                      <span className={`material-symbols-outlined mb-sm ${paymentMethod === 'qris' ? 'text-primary' : 'text-on-surface-variant'}`}>qr_code_scanner</span>
                      <h3 className="font-label-sm text-label-sm text-text-primary">QRIS</h3>
                    </div>
                    <div 
                      onClick={() => !isPaid && setPaymentMethod('va')}
                      className={`p-md rounded-xl border transition-all ${isPaid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${paymentMethod === 'va' ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}
                    >
                      <span className={`material-symbols-outlined mb-sm ${paymentMethod === 'va' ? 'text-primary' : 'text-on-surface-variant'}`}>account_balance</span>
                      <h3 className="font-label-sm text-label-sm text-text-primary">Virtual Account</h3>
                    </div>
                    <div 
                      onClick={() => !isPaid && setPaymentMethod('ewallet')}
                      className={`p-md rounded-xl border transition-all ${isPaid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${paymentMethod === 'ewallet' ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}
                    >
                      <span className={`material-symbols-outlined mb-sm ${paymentMethod === 'ewallet' ? 'text-primary' : 'text-on-surface-variant'}`}>account_balance_wallet</span>
                      <h3 className="font-label-sm text-label-sm text-text-primary">E-Wallet</h3>
                    </div>
                    <div 
                      onClick={() => !isPaid && setPaymentMethod('cc')}
                      className={`p-md rounded-xl border transition-all ${isPaid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${paymentMethod === 'cc' ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}
                    >
                      <span className={`material-symbols-outlined mb-sm ${paymentMethod === 'cc' ? 'text-primary' : 'text-on-surface-variant'}`}>credit_card</span>
                      <h3 className="font-label-sm text-label-sm text-text-primary">Credit Card</h3>
                    </div>
                  </div>

                  {/* Payment Details Form */}
                  <div className="bg-surface p-lg rounded-xl border border-border relative">
                    {isPaid && (
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-xl">
                        <div className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center mb-md shadow-lg transform scale-110 transition-transform">
                          <span className="material-symbols-outlined text-4xl">check</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-success">Payment Successful!</h3>
                        <p className="text-body-sm text-text-secondary mt-2">You can now proceed to the next step.</p>
                      </div>
                    )}

                    {paymentMethod === 'qris' && (
                      <div className="space-y-md flex flex-col items-center">
                        <h4 className="font-label-md text-label-md text-text-primary w-full text-left">Scan QR Code</h4>
                        <div className="p-4 bg-white border border-border rounded-xl shadow-sm">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CampuSpherePaymentSimulator" alt="QRIS" className="w-48 h-48" />
                        </div>
                        <p className="text-body-sm text-text-secondary text-center max-w-sm">Open your preferred banking or e-wallet app and scan this QR code to complete the payment.</p>
                      </div>
                    )}
                    {paymentMethod === 'va' && (
                      <div className="space-y-md">
                        <h4 className="font-label-md text-label-md text-text-primary">Select Bank</h4>
                        <select className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md bg-white">
                          <option>BCA Virtual Account</option>
                          <option>Mandiri Virtual Account</option>
                          <option>BNI Virtual Account</option>
                          <option>BRI Virtual Account</option>
                        </select>
                        <div className="p-md bg-surface-container rounded-lg border border-border flex justify-between items-center mt-md">
                           <div>
                             <p className="text-body-sm text-text-secondary">Virtual Account Number</p>
                             <p className="font-numeric-tabular font-bold text-lg text-text-primary">8801 2345 6789 0001</p>
                           </div>
                           <button className="text-primary hover:bg-primary/10 p-2 rounded transition-colors">
                             <span className="material-symbols-outlined">content_copy</span>
                           </button>
                        </div>
                      </div>
                    )}
                    {paymentMethod === 'ewallet' && (
                      <div className="space-y-md">
                        <h4 className="font-label-md text-label-md text-text-primary">Select Provider</h4>
                        <div className="flex gap-md">
                          <label className="flex items-center gap-sm cursor-pointer p-sm border border-border rounded-lg bg-white flex-1 hover:border-primary/50">
                            <input type="radio" name="ewallet" defaultChecked className="text-primary focus:ring-primary" />
                            <span className="font-body-sm text-body-sm">GoPay</span>
                          </label>
                          <label className="flex items-center gap-sm cursor-pointer p-sm border border-border rounded-lg bg-white flex-1 hover:border-primary/50">
                            <input type="radio" name="ewallet" className="text-primary focus:ring-primary" />
                            <span className="font-body-sm text-body-sm">OVO</span>
                          </label>
                          <label className="flex items-center gap-sm cursor-pointer p-sm border border-border rounded-lg bg-white flex-1 hover:border-primary/50">
                            <input type="radio" name="ewallet" className="text-primary focus:ring-primary" />
                            <span className="font-body-sm text-body-sm">Dana</span>
                          </label>
                        </div>
                        <div className="flex flex-col gap-sm mt-md">
                          <label className="font-label-md text-label-md text-text-primary">Phone Number</label>
                          <div className="relative">
                            <span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">+62</span>
                            <input className="w-full h-12 pl-16 pr-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="812 3456 7890" type="tel" />
                          </div>
                        </div>
                      </div>
                    )}
                    {paymentMethod === 'cc' && (
                      <div className="space-y-md">
                        <div className="flex flex-col gap-sm">
                          <label className="font-label-md text-label-md text-text-primary">Card Number</label>
                          <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-md">
                          <div className="flex flex-col gap-sm">
                            <label className="font-label-md text-label-md text-text-primary">Expiry Date</label>
                            <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="MM/YY" type="text" />
                          </div>
                          <div className="flex flex-col gap-sm">
                            <label className="font-label-md text-label-md text-text-primary">CVV</label>
                            <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="123" type="password" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bento-card rounded-xl overflow-hidden flex flex-col">
            <div className="relative h-48 w-full bg-surface-container">
              <img alt="Tech Seminar Hall" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqgKHnDbGKA6IEOZhDMRrGrUzIVlz0XjOSGJYaS8jwJDFXidSzT5XZnkU9qYPDz81TDopqYHfrWA42teluQH-47I6h_WnYcJmsS620Mr8p6IkKQxHwhNeTvwKzNxudmUcOZo0fvnfVtwrELfv2-27L9pISkqP69yIMLM6jzpXiLNSzW-ryF9wtuWHFAk4bgApAaDTipSxmIuLIFgOr7rFiboWFuQyEYuduMMJGKAYKK-TmYn2Dp57rf1Q8yCOH077W0ugvggaSpoq" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Seminar</span>
              </div>
            </div>
            <div className="p-lg flex flex-col gap-lg">
              <div>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-md">Grand Annual Tech Seminar 2026</h3>
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span className="font-body-sm text-body-sm">October 24, 2026 • 09:00 AM</span>
                  </div>
                  <div className="flex items-center gap-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-body-sm text-body-sm">Main Auditorium, Campus Hub</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-lg">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-label-md text-text-secondary">Selected Ticket</span>
                  <span className="font-label-md text-label-md text-primary">{ticket.priceLabel}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">{ticket.name}</p>
                
                <div className="flex justify-between items-center py-md border-t border-dashed border-border mb-lg">
                  <span className="font-headline-md text-headline-md text-text-primary">Total</span>
                  <span className="font-headline-md text-headline-md text-primary">{ticket.priceLabel}</span>
                </div>
                
                {!isFree && !isPaid ? (
                  <button 
                    onClick={handleSimulatePayment}
                    disabled={isSimulating}
                    className={`w-full font-label-md text-label-md py-md rounded-lg transition-all flex items-center justify-center gap-sm mb-sm ${isSimulating ? 'bg-surface-container-low text-text-secondary opacity-70 cursor-wait' : 'bg-warning text-on-primary hover:brightness-110 active:scale-95 cursor-pointer'}`}
                  >
                    {isSimulating ? (
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                    ) : (
                      <span className="material-symbols-outlined">payments</span>
                    )}
                    {isSimulating ? 'Processing...' : 'Simulate Payment'}
                  </button>
                ) : null}

                {isFree || isPaid ? (
                  <Link 
                    to="/event/1/register/step4" 
                    state={{ ticket }}
                    className="w-full bg-primary text-on-primary font-label-md text-label-md py-md rounded-lg hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-sm cursor-pointer"
                  >
                    Proceed to Next Step
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="w-full bg-surface-container-low text-text-secondary font-label-md text-label-md py-md rounded-lg opacity-50 cursor-not-allowed flex items-center justify-center gap-sm"
                  >
                    Proceed to Next Step
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-lg p-md rounded-xl border border-warning bg-warning/5 flex gap-md items-center">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
              <span className="material-symbols-outlined">security</span>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary">Your information is securely encrypted and will only be used for event-related communications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
