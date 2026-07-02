import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/common/Breadcrumb';
import StepIndicator from '../../../components/common/StepIndicator';

const TicketSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventData = location.state?.eventData;
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tickets = [
    {
      id: 'early-bird',
      name: 'Student Early Bird',
      description: 'Sangat cocok untuk perencana awal yang ingin mengamankan slot tanpa biaya.',
      price: 0,
      priceLabel: 'GRATIS',
      tag: 'Early Bird',
      features: [
        { icon: 'card_membership', text: 'Sertifikat Digital' },
        { icon: 'inventory_2', text: 'Seminar Kit' }
      ]
    },
    {
      id: 'regular',
      name: 'Tiket Masuk Mahasiswa Reguler',
      description: 'Akses umum ke semua sesi teknologi dan presentasi utama.',
      price: 0,
      priceLabel: 'GRATIS',
      features: [
        { icon: 'meeting_room', text: 'Akses Semua Sesi' },
        { icon: 'card_membership', text: 'Sertifikat Digital' }
      ]
    },
    {
      id: 'vip',
      name: 'Akses Mahasiswa VIP',
      description: 'Pengalaman premium terbaik untuk calon pemimpin teknologi.',
      price: 50000,
      priceLabel: 'Rp 50.000',
      isLimited: true,
      features: [
        { icon: 'event_seat', text: 'Tempat Duduk Baris Depan', warning: true },
        { icon: 'restaurant', text: 'Makan Siang Networking', warning: true },
        { icon: 'redeem', text: 'Merchandise Eksklusif', warning: true }
      ]
    }
  ];

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb & Header */}
      <header className="mb-2xl">
        <Breadcrumb items={[
          { label: 'Eksplorasi', path: '/explore' },
          { label: 'Global Tech Conference 2026', path: `/event/${eventData?.id || 1}` },
          { label: 'Daftar' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-md">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">Pendaftaran</h1>
            <p className="font-body-md text-body-md text-text-secondary">Amankan slot Anda untuk acara teknologi terbesar tahun ini.</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-fixed text-primary px-md py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            <span className="font-label-sm text-[10px] md:text-label-sm">Ditutup dalam 2 hari</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Ticket Selection */}
        <div className="lg:col-span-8">
          <div className="bento-card rounded-xl p-lg md:p-xl shadow-sm bg-white">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Informasi Pribadi', 'Pemilihan Tiket', 'Pembayaran', 'Konfirmasi']} 
              currentStep={2} 
              nodeBgColor="bg-white" 
            />

            {/* Step 2 Content */}
            <div className="space-y-lg">
              {tickets.map(ticket => (
                <div 
                  key={ticket.id} 
                  className={`border p-lg rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-lg relative overflow-hidden transition-all duration-300 ${selectedTicket?.id === ticket.id ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary' : 'border-border hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 bg-white'}`}
                >
                  {ticket.isLimited && (
                    <div className="absolute top-4 -right-8 bg-warning text-on-primary text-[10px] font-bold px-8 py-1 rotate-45 uppercase">Terbatas</div>
                  )}
                  <div className="flex-1">
                    {ticket.tag && (
                      <div className="flex items-center gap-sm mb-xs">
                        <span className="px-sm py-1 bg-success/10 text-success text-[10px] uppercase font-bold rounded-full">{ticket.tag}</span>
                        <h3 className="text-headline-md font-headline-md text-text-primary">{ticket.name}</h3>
                      </div>
                    )}
                    {!ticket.tag && (
                      <h3 className="text-headline-md font-headline-md text-text-primary mb-xs">{ticket.name}</h3>
                    )}
                    
                    <p className="text-body-sm text-text-secondary mb-md">{ticket.description}</p>
                    
                    <div className="flex flex-wrap gap-md">
                      {ticket.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-xs text-body-sm text-text-primary">
                          <span className={`material-symbols-outlined text-[18px] ${feature.warning ? 'text-warning' : 'text-primary'}`}>{feature.icon}</span>
                          {feature.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-sm w-full md:w-auto">
                    <span className={`text-headline-md font-headline-md ${ticket.price === 0 ? 'text-success' : 'text-text-primary'}`}>{ticket.priceLabel}</span>
                    <button 
                      onClick={() => setSelectedTicket(ticket)}
                      className={`w-full md:w-auto font-label-md text-label-md py-md px-xl rounded-lg transition-all active:scale-95 ${selectedTicket?.id === ticket.id ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-primary/10 text-primary border border-primary/20'}`}
                    >
                      {selectedTicket?.id === ticket.id ? 'Terpilih' : 'Pilih'}
                    </button>
                  </div>
                </div>
              ))}
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
                {!selectedTicket ? (
                  <div className="text-center py-md mb-xl">
                    <p className="text-body-sm text-text-secondary italic">Belum ada tiket yang dipilih.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-sm">
                      <span className="font-label-md text-label-md text-text-secondary">Tiket Terpilih</span>
                      <span className="font-label-md text-label-md text-primary">{selectedTicket.priceLabel}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">{selectedTicket.name}</p>
                  </>
                )}
                
                <div className="flex justify-between items-center py-md border-t border-dashed border-border mb-lg">
                  <span className="font-headline-md text-headline-md text-text-primary">Total</span>
                  <span className="font-headline-md text-headline-md text-primary">{selectedTicket ? selectedTicket.priceLabel : 'IDR 0'}</span>
                </div>
                {selectedTicket ? (
                  <Link 
                    to="/event/1/register/step3" 
                    state={{ ticket: selectedTicket }}
                    className="w-full bg-primary text-on-primary font-label-md text-label-md py-md rounded-lg hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-sm cursor-pointer"
                  >
                    Lanjutkan ke Langkah Berikutnya
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                ) : (
                  <button disabled className="w-full bg-surface-container-low text-text-secondary font-label-md text-label-md py-md rounded-lg opacity-50 cursor-not-allowed flex items-center justify-center gap-sm">
                    Lanjutkan ke Langkah Berikutnya
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
            <p className="font-body-sm text-body-sm text-text-secondary">Informasi Anda dienkripsi secara aman dan hanya akan digunakan untuk komunikasi terkait acara.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelectionPage;
