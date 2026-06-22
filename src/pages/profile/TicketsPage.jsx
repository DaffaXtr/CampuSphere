import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

const TicketsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSubTab, setActiveSubTab] = useState('All'); // All, Active, Past
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const allTickets = [
    {
      id: '#TC-2026-X84',
      title: 'TEDxCampus 2026: Infinite Horizons',
      date: 'June 15, 2026 • 09:00 AM',
      location: 'Main Auditorium, East Wing',
      status: 'active', // active, past
      refCode: '#TC-2026-X84'
    },
    {
      id: '#SEM-2026-N22',
      title: 'National Cyber Security Seminar',
      date: 'June 20, 2026 • 01:00 PM',
      location: 'GKB 402, 4th Floor',
      status: 'active',
      refCode: '#SEM-2026-N22'
    },
    {
      id: '#WKS-2026-B10',
      title: 'Workshop: Intro to UI/UX Design',
      date: 'May 10, 2026 • 10:00 AM',
      location: 'Lab Komputer 3, Gedung C',
      status: 'past',
      refCode: '#WKS-2026-B10'
    }
  ];

  const filteredTickets = allTickets.filter(ticket => {
    if (activeSubTab === 'Active') return ticket.status === 'active';
    if (activeSubTab === 'Past') return ticket.status === 'past';
    return true;
  });

  const handleOpenTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const handleDownloadTicket = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-lg right-lg bg-text-primary text-white px-md py-sm rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-success">check_circle</span>
          <span className="font-body-sm text-xs font-semibold">Berkas E-Ticket PDF berhasil diunduh!</span>
        </div>
      )}

      {/* Main Layout Container: 2 Columns */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch">
        
        {/* Left Side: Sidebar */}
        <ProfileSidebar activeTab="tickets" />

        {/* Right Side: Content Area */}
        <main className="flex-1 py-lg md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
          
          {/* Breadcrumb & Header */}
          <div>
            <header className="mb-md hidden md:block">
              <Breadcrumb items={[
                { label: 'Profile', path: '/profile' },
                { label: 'My E-Tickets' }
              ]} />
            </header>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-border/60 pb-md mb-lg">
              <div>
                <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
                  My E-Tickets
                </h1>
                <p className="font-body-md text-body-md text-text-secondary">
                  Daftar tiket elektronik aktif dan riwayat partisipasi event Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Sub Tabs */}
          <div className="flex gap-md border-b border-border pb-1 overflow-x-auto no-scrollbar">
            {['All', 'Active', 'Past'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`pb-2 font-label-md transition-colors border-b-2 whitespace-nowrap px-md text-sm ${
                  activeSubTab === tab 
                    ? 'text-primary-green border-primary-green font-bold' 
                    : 'text-text-secondary border-transparent hover:text-text-primary'
                }`}
              >
                {tab === 'All' ? 'Semua Tiket' : tab === 'Active' ? 'Aktif' : 'Riwayat Lampau'}
              </button>
            ))}
          </div>

          {/* Tickets List */}
          <div className="flex flex-col gap-md">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-border hover:border-primary-green/30 rounded-2xl p-md md:p-lg flex flex-col md:flex-row gap-lg md:items-center justify-between shadow-sm relative overflow-hidden group transition-all duration-300 ${
                    ticket.status === 'past' ? 'opacity-70 hover:opacity-100' : ''
                  }`}
                >
                  {/* Side decorative badge color bar */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full transition-opacity ${
                    ticket.status === 'past' ? 'bg-text-secondary/30' : 'bg-primary-green opacity-30 group-hover:opacity-100'
                  }`}></div>
                  
                  <div className="flex-1 space-y-2 pl-2">
                    <div className="flex flex-wrap items-center gap-sm">
                      {ticket.status === 'active' ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-green/10 text-primary-green border border-primary-green/20 text-[10px] font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">check_circle</span>
                          Upcoming Event
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-text-secondary border border-border text-[10px] font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">history</span>
                          Past Event
                        </span>
                      )}
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
                    <button 
                      onClick={handleDownloadTicket}
                      className="flex-1 md:flex-none bg-surface hover:bg-surface-container-high border border-border text-text-primary text-xs md:text-sm px-md md:px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Unduh Tiket (PDF)
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-3xl bg-white border border-border border-dashed rounded-2xl flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-[48px] text-text-secondary mb-md">local_activity</span>
                <h3 className="font-headline-md text-text-primary mb-xs">Tidak ada tiket</h3>
                <p className="text-text-secondary text-sm max-w-xs">Anda tidak memiliki e-ticket di kategori tab ini.</p>
              </div>
            )}
          </div>
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

            <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-md border ${
              selectedTicket.status === 'active' 
                ? 'bg-primary-green/10 text-primary-green border-primary-green/20' 
                : 'bg-surface-container-high text-text-secondary border-border'
            }`}>
              {selectedTicket.status === 'active' ? 'E-Ticket Aktif' : 'E-Ticket Lampau'}
            </span>

            <h3 className="font-bold text-base md:text-lg text-text-primary leading-snug mb-xs px-sm">
              {selectedTicket.title}
            </h3>
            <p className="text-xs text-text-secondary font-mono mb-lg">{selectedTicket.id}</p>

            {/* QR Code Mock Illustration */}
            <div className="w-[180px] h-[180px] bg-white border border-border rounded-xl flex items-center justify-center relative p-md mb-lg shadow-inner">
              <svg className={`w-full h-full ${selectedTicket.status === 'past' ? 'text-text-secondary/40' : 'text-text-primary'}`} viewBox="0 0 100 100" fill="currentColor">
                {/* QR corners */}
                <path d="M5,5 h20 v20 h-20 z M9,9 h12 v12 h-12 z" />
                <path d="M75,5 h20 v20 h-20 z M79,9 h12 v12 h-12 z" />
                <path d="M5,75 h20 v20 h-20 z M9,79 h12 v12 h-12 z" />
                {/* QR center patterns */}
                <rect x="15" y="40" width="10" height="10" />
                <rect x="40" y="15" width="10" height="15" />
                <rect x="40" y="40" width="20" height="20" fill={selectedTicket.status === 'past' ? '#6B7280' : '#2E7D32'} />
                <rect x="65" y="40" width="15" height="10" />
                <rect x="40" y="70" width="10" height="15" />
                <rect x="70" y="70" width="15" height="15" />
                <rect x="15" y="60" width="5" height="5" />
                <rect x="60" y="15" width="8" height="8" />
              </svg>
            </div>

            <p className="text-xs text-text-secondary max-w-[240px] leading-relaxed mb-md">
              {selectedTicket.status === 'active' 
                ? 'Tunjukkan QR Code ini kepada petugas panitia di lokasi pintu masuk seminar untuk verifikasi absensi.' 
                : 'Tiket ini sudah digunakan pada event yang telah selesai.'}
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

export default TicketsPage;
