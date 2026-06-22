import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

const ProfilePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Modal State for Digital Ticket
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const tickets = [
    {
      id: '#TC-2026-X84',
      title: 'TEDxCampus 2026: Infinite Horizons',
      date: 'June 15, 2026 • 09:00 AM',
      location: 'Main Auditorium, East Wing',
      status: 'Upcoming Event'
    },
    {
      id: '#SEM-2026-N22',
      title: 'National Cyber Security Seminar',
      date: 'June 20, 2026 • 01:00 PM',
      location: 'GKB 402, 4th Floor',
      status: 'Upcoming Event'
    }
  ];

  const handleOpenTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const handleDownloadSKP = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-lg right-lg bg-text-primary text-white px-md py-sm rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-success">check_circle</span>
          <span className="font-body-sm text-xs font-semibold">Draf SKP (PDF) berhasil diunduh!</span>
        </div>
      )}

      {/* Main Layout Container: 2 Columns */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch">
        
        {/* Left Side: Sidebar */}
        <ProfileSidebar activeTab="hub" />

        {/* Right Side: Content Area */}
        <main className="flex-1 py-lg md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-2xl">
          
          {/* Breadcrumb & Header */}
          <div>
            <header className="mb-md hidden md:block">
              <Breadcrumb items={[
                { label: 'Profile', path: '/profile' },
                { label: 'Activity Hub' }
              ]} />
            </header>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md pb-md border-b border-border/60">
              <div>
                <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
                  Student Activity Hub
                </h1>
                <p className="font-body-md text-body-md text-text-secondary">
                  Pantau aktivitas kampus, sertifikat, dan reward akademik Anda di satu tempat.
                </p>
              </div>

              {/* Action Stats Block */}
              <div className="flex flex-col sm:flex-row items-center gap-md">
                <div className="bg-white border border-border rounded-xl px-md py-sm flex flex-col min-w-[200px] shadow-sm text-left">
                  <span className="font-label-sm text-[10px] text-text-secondary uppercase tracking-wider mb-xs">
                    Activities Participated
                  </span>
                  <div className="flex items-baseline gap-xs">
                    <span className="text-3xl font-bold text-primary-green">12</span>
                    <span className="text-xs text-text-secondary">Workshops / Events</span>
                  </div>
                </div>

                <button 
                  onClick={handleDownloadSKP}
                  className="w-full sm:w-auto bg-primary-green hover:bg-secondary-green text-white px-lg py-3.5 rounded-xl font-label-md text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">description</span>
                  Unduh Draft SKP (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* E-Tickets Section */}
          <section className="flex flex-col gap-lg text-left">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg md:text-xl text-text-primary">
                My E-Tickets / Upcoming Events
              </h2>
              <Link to="/tickets" className="text-primary-green font-label-md text-xs hover:underline flex items-center gap-0.5">
                Lihat Semua Riwayat
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            {/* Ticket Cards List */}
            <div className="flex flex-col gap-md">
              {tickets.map((ticket, index) => (
                <div 
                  key={index}
                  className="bg-white border border-border hover:border-primary-green/30 rounded-2xl p-md md:p-lg flex flex-col md:flex-row gap-lg md:items-center justify-between shadow-sm relative overflow-hidden group transition-all duration-300"
                >
                  {/* Side decorative badge color bar */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-green opacity-30 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex-1 space-y-2 pl-2">
                    <div className="flex flex-wrap items-center gap-sm">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-green/10 text-primary-green border border-primary-green/20 text-[10px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">check_circle</span>
                        Upcoming Event
                      </span>
                      <span className="text-[11px] text-text-secondary font-mono">{ticket.id}</span>
                    </div>

                    <h3 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary-green transition-colors leading-snug">
                      {ticket.title}
                    </h3>

                    <div className="flex flex-wrap gap-x-lg gap-y-1 pt-1">
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="material-symbols-outlined text-sm text-primary-green">calendar_today</span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-text-secondary/60">Date & Time</p>
                          <p className="text-xs md:text-sm font-semibold text-text-primary">{ticket.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="material-symbols-outlined text-sm text-primary-green">location_on</span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-text-secondary/60">Location</p>
                          <p className="text-xs md:text-sm font-semibold text-text-primary">{ticket.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-row md:flex-col gap-sm justify-end w-full md:w-auto mt-md md:mt-0 pt-md md:pt-0 border-t border-border/40 md:border-t-0 pl-2">
                    <button 
                      onClick={() => handleOpenTicket(ticket)}
                      className="flex-1 md:flex-none bg-primary-green hover:bg-secondary-green text-white text-xs md:text-sm px-md md:px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                      View Digital Ticket
                    </button>
                    <Link 
                      to="/events"
                      className="flex-1 md:flex-none bg-surface hover:bg-surface-container-high border border-border text-text-primary text-xs md:text-sm px-md md:px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[18px]">info</span>
                      Event Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* QR Code Digital Ticket Modal */}
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-md">
          <div className="bg-white border border-border rounded-2xl w-full max-w-sm p-lg shadow-xl relative animate-fade-in text-center flex flex-col items-center">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-md right-md material-symbols-outlined text-text-secondary hover:text-text-primary cursor-pointer text-[22px]"
            >
              close
            </button>

            <span className="bg-primary-green/10 text-primary-green border border-primary-green/20 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-md">
              E-Ticket Aktif
            </span>

            <h3 className="font-bold text-base md:text-lg text-text-primary leading-snug mb-xs px-sm">
              {selectedTicket.title}
            </h3>
            <p className="text-xs text-text-secondary font-mono mb-lg">{selectedTicket.id}</p>

            {/* QR Code Mock Illustration */}
            <div className="w-[180px] h-[180px] bg-white border border-border rounded-xl flex items-center justify-center relative p-md mb-lg shadow-inner">
              {/* Dummy QR Layout with SVG */}
              <svg className="w-full h-full text-text-primary" viewBox="0 0 100 100" fill="currentColor">
                {/* QR corners */}
                <path d="M5,5 h20 v20 h-20 z M9,9 h12 v12 h-12 z" />
                <path d="M75,5 h20 v20 h-20 z M79,9 h12 v12 h-12 z" />
                <path d="M5,75 h20 v20 h-20 z M9,79 h12 v12 h-12 z" />
                {/* QR center patterns */}
                <rect x="15" y="40" width="10" height="10" />
                <rect x="40" y="15" width="10" height="15" />
                <rect x="40" y="40" width="20" height="20" fill="#2E7D32" />
                <rect x="65" y="40" width="15" height="10" />
                <rect x="40" y="70" width="10" height="15" />
                <rect x="70" y="70" width="15" height="15" />
                <rect x="15" y="60" width="5" height="5" />
                <rect x="60" y="15" width="8" height="8" />
              </svg>
            </div>

            <p className="text-xs text-text-secondary max-w-[240px] leading-relaxed mb-md">
              Tunjukkan QR Code ini kepada petugas panitia di lokasi pintu masuk seminar untuk verifikasi absensi.
            </p>

            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-primary-green hover:bg-secondary-green text-white py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all"
            >
              Selesai
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfilePage;
