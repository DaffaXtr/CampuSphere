import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticket = location.state?.ticket;
  const eventData = location.state?.eventData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If no ticket selected, redirect back to step 2
  useEffect(() => {
    if (!ticket) {
      navigate('/event/1/register/step2');
    }
  }, [ticket, navigate]);

  if (!ticket) return null;

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb & Header */}
      <header className="mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'Global Tech Conference 2026', path: `/event/${eventData?.id || 1}` },
          { label: 'Register' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-md">
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
        {/* Left Column: Confirmation */}
        <div className="lg:col-span-8">
          <div className="bento-card rounded-xl p-lg bg-white border border-border">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Personal Info', 'Ticket Selection', 'Payment', 'Confirmation']} 
              currentStep={4} 
              nodeBgColor="bg-white" 
            />

            {/* Step 4 Content */}
            <div className="flex flex-col items-center text-center py-xl border-b border-border mb-lg">
              <div className="w-20 h-20 aspect-square shrink-0 bg-success/20 text-success rounded-full flex items-center justify-center mb-md transform scale-110">
                <span className="material-symbols-outlined text-5xl font-bold">check</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary mb-2">Registration Confirmed!</h2>
              <p className="text-body-md text-text-secondary max-w-lg mx-auto">Thank you for registering. Your ticket and detailed event information have been sent to your university email.</p>
            </div>

            <div className="space-y-xl">
              {/* Review Details */}
              <div className="bg-surface p-lg rounded-xl border border-border">
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-md border-b border-border pb-sm">Registration Review</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-lg">
                  <div>
                    <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Attendee Name</p>
                    <p className="font-body-md text-body-md text-text-primary font-medium">Alex Johnson</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Ticket Type</p>
                    <p className="font-body-md text-body-md text-text-primary font-medium">{ticket.name}</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Registration ID</p>
                    <p className="font-body-md text-body-md text-primary font-medium">TCK-2026-X89B</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Payment Status</p>
                    {ticket.price === 0 ? (
                      <p className="font-label-md text-label-md text-text-secondary px-2 py-1 bg-surface-variant rounded-md w-fit">FREE</p>
                    ) : (
                      <p className="font-label-md text-label-md text-success px-2 py-1 bg-success/10 rounded-md w-fit">PAID</p>
                    )}
                  </div>
                </div>
              </div>

              {/* WhatsApp Group Link */}
              <div className="bg-[#E7F8F0] border border-[#25D366]/30 p-lg rounded-xl flex flex-col sm:flex-row items-center gap-lg">
                <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-[#25D366]/40">
                  {/* WhatsApp SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-headline-sm text-headline-sm text-[#0F172A] mb-1">Join the Event WhatsApp Group</h3>
                  <p className="text-body-sm text-[#475569]">Get the latest announcements, seminar materials, and network with other attendees before the event starts.</p>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-label-md text-label-md py-sm px-xl rounded-lg transition-all active:scale-95 text-center shrink-0 flex items-center justify-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">group_add</span>
                  Join Group
                </a>
              </div>
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
                  <span className="font-headline-md text-headline-md text-text-primary">Total Paid</span>
                  <span className="font-headline-md text-headline-md text-primary">{ticket.priceLabel}</span>
                </div>

                <Link 
                  to="/explore" 
                  className="w-full bg-surface-container-low text-primary border border-primary/20 font-label-md text-label-md py-md rounded-lg hover:bg-primary/10 active:scale-95 transition-all flex items-center justify-center gap-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined">explore</span>
                  Back to Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
