import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import heroImage from '../../assets/hero-profil.png';

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
        <main className="flex-1 py-md md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-2xl">
          
          {/* Hero Section */}
          <div className="relative mb-lg md:mb-xl flex flex-col md:flex-row items-start justify-between md:min-h-[350px]">
            {/* Background Asset */}
            <div className="absolute bottom-0 right-0 w-full md:w-[50%] lg:w-[55%] h-full pointer-events-none z-0 overflow-visible hidden md:flex items-end justify-end">
               <img src={heroImage} alt="" className="w-full h-[350px] object-contain object-right-bottom" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex-1 max-w-xl text-left flex flex-col justify-start md:justify-center">
              <header className="mb-md hidden md:block">
                <Breadcrumb items={[
                  { label: 'Profile', path: '/profile' },
                  { label: 'Activity Hub' }
                ]} />
              </header>



              <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-[56px] text-text-primary tracking-tight font-black mb-4 leading-tight">
                Student Activity Hub
              </h1>              
              <p className="font-body-md text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[420px]">
                Pantau aktivitas kampus, sertifikat, dan reward akademik Anda di satu tempat.
              </p>
              {/* Horizontal Stats Card */}
              <div className="relative z-20 flex flex-col gap-4 w-full max-w-[500px]">
                <div className="bg-white/90 backdrop-blur-sm border border-border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-md sm:gap-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">groups</span>
                    </div>
                    <div className="text-left">
                      <span className="font-label-sm text-[9px] text-text-secondary uppercase tracking-[0.15em] font-bold block mb-0.5">
                        AKTIVITAS YANG DIIKUTI
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-primary-blue leading-none tracking-tight">12</span>
                        <span className="text-[11px] text-text-secondary font-medium">Workshops / Events</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/tickets" className="w-full sm:w-auto bg-primary-blue/5 hover:bg-primary-blue/10 text-primary-blue px-5 py-2.5 rounded-xl text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 flex-shrink-0">
                    Lihat Riwayat
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            
          </div>

          {/* E-Tickets Section */}
          <section className="flex flex-col gap-lg text-left">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg md:text-xl text-text-primary">
                My E-Tickets / Upcoming Events
              </h2>
              <Link to="/tickets" className="text-primary-blue font-label-md text-xs hover:underline flex items-center gap-0.5">
                Lihat Semua Riwayat
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            {/* Ticket Cards List */}
            <div className="flex flex-col gap-md">
              {tickets.map((ticket, index) => (
                <div 
                  key={index}
                  className="bg-white border border-border hover:border-primary-blue/30 rounded-2xl p-md md:p-lg flex flex-col md:flex-row gap-lg md:items-center justify-between shadow-sm relative overflow-hidden group transition-all duration-300"
                >
                  {/* Side decorative badge color bar */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-blue opacity-30 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex-1 space-y-2 pl-2">
                    <div className="flex flex-wrap items-center gap-sm">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 text-[10px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">check_circle</span>
                        Upcoming Event
                      </span>
                      <span className="text-[11px] text-text-secondary font-mono">{ticket.id}</span>
                    </div>

                    <h3 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary-blue transition-colors leading-snug">
                      {ticket.title}
                    </h3>

                    <div className="flex flex-wrap gap-x-lg gap-y-1 pt-1">
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="material-symbols-outlined text-sm text-primary-blue">calendar_today</span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-text-secondary/60">Date & Time</p>
                          <p className="text-xs md:text-sm font-semibold text-text-primary">{ticket.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="material-symbols-outlined text-sm text-primary-blue">location_on</span>
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
                      className="flex-1 md:flex-none bg-primary-blue hover:bg-secondary-blue text-white text-xs md:text-sm px-md md:px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm"
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

            <span className="bg-primary-blue/10 text-primary-blue border border-primary-blue/20 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-md">
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
                <rect x="40" y="40" width="20" height="20" fill="#2563EB" />
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
              className="w-full bg-primary-blue hover:bg-secondary-blue text-white py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all"
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
