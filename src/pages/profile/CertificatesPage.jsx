import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showToast, setShowToast] = useState(false);
  const [downloadedCert, setDownloadedCert] = useState('');

  const certificates = [
    {
      id: 'CERT-TEDX-2026-0981',
      eventName: 'TEDxCampus 2026: Infinite Horizons',
      issuer: 'TEDxCampus Committee',
      date: 'June 16, 2026',
      points: '2 SKP',
      category: 'International Seminar'
    },
    {
      id: 'CERT-NCSS-2026-4421',
      eventName: 'National Cyber Security Seminar',
      issuer: 'Himpunan Mahasiswa Informatika',
      date: 'June 21, 2026',
      points: '3 SKP',
      category: 'National Seminar'
    },
    {
      id: 'CERT-UIUX-2026-1049',
      eventName: 'Workshop: Intro to UI/UX Design',
      issuer: 'CampuSphere Academy & HIMATIKA',
      date: 'May 11, 2026',
      points: '1 SKP',
      category: 'Skill Workshop'
    }
  ];

  const handleDownload = (certName) => {
    setDownloadedCert(certName);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-lg right-lg bg-text-primary text-white px-md py-sm rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-success">check_circle</span>
          <span className="font-body-sm text-xs font-semibold">
            Sertifikat "{downloadedCert}" (PDF) berhasil diunduh!
          </span>
        </div>
      )}

      {/* Main Layout Container: 2 Columns */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch">
        
        {/* Left Side: Sidebar */}
        <ProfileSidebar activeTab="certificates" />

        {/* Right Side: Content Area */}
        <main className="flex-1 py-lg md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
          
          {/* Breadcrumb & Header */}
          <div>
            <header className="mb-md hidden md:block">
              <Breadcrumb items={[
                { label: 'Profile', path: '/profile' },
                { label: 'E-Certificates' }
              ]} />
            </header>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-border/60 pb-md mb-lg">
              <div>
                <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
                  E-Certificates
                </h1>
                <p className="font-body-md text-body-md text-text-secondary">
                  Unduh sertifikat digital dan kumpulkan poin Satuan Kredit Partisipasi (SKP) akademik Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Grid List */}
          <div className="grid grid-cols-1 gap-md">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white border border-border hover:border-primary-blue/30 rounded-2xl p-md md:p-lg flex flex-col md:flex-row gap-lg md:items-center justify-between shadow-sm relative overflow-hidden group transition-all duration-300"
              >
                {/* Decorative Accent Ring/Pills */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-blue opacity-30 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex-1 space-y-2 pl-2">
                  <div className="flex items-center gap-sm flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 text-[10px] font-bold uppercase tracking-wider">
                      {cert.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-yellow/10 text-dark-yellow border border-primary-yellow/20 text-[10px] font-bold">
                      {cert.points}
                    </span>
                    <span className="inline-flex items-center text-xs text-primary-blue font-semibold gap-1 ml-auto md:ml-0">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      Verified
                    </span>
                  </div>

                  <h3 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary-blue transition-colors leading-snug">
                    {cert.eventName}
                  </h3>

                  <div className="flex flex-wrap gap-x-lg gap-y-2 pt-1 text-xs text-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-text-secondary/60">domain</span>
                      <span>Penerbit: <strong className="text-text-primary font-medium">{cert.issuer}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-text-secondary/60">calendar_today</span>
                      <span>Tanggal Rilis: <span className="font-medium text-text-primary">{cert.date}</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] md:border-l md:border-border/60 md:pl-md">
                      <span className="material-symbols-outlined text-sm text-text-secondary/40">verified</span>
                      <span>ID: {cert.id}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-md md:mt-0 pt-md md:pt-0 border-t border-border/40 md:border-t-0 flex justify-end w-full md:w-auto shrink-0 pl-2">
                  <button 
                    onClick={() => handleDownload(cert.eventName)}
                    className="w-full md:w-auto bg-primary-blue hover:bg-secondary-blue text-white text-xs md:text-sm px-md md:px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Unduh Sertifikat (PDF)
                  </button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default CertificatesPage;
