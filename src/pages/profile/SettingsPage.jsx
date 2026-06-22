import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

const SettingsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: 'Daffa Eka',
    email: 'daffa.eka@student.unair.ac.id',
    phone: '+62 812-3456-7890',
    notifyEmail: true,
    notifyWhatsapp: false,
    notifyUpcoming: true
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-lg right-lg bg-text-primary text-white px-md py-sm rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-success">check_circle</span>
          <span className="font-body-sm text-xs font-semibold">Pengaturan profil berhasil disimpan!</span>
        </div>
      )}

      {/* Main Layout Container: 2 Columns */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch">
        
        {/* Left Side: Sidebar */}
        <ProfileSidebar activeTab="settings" />

        {/* Right Side: Content Area */}
        <main className="flex-1 py-lg md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
          
          {/* Breadcrumb & Header */}
          <div>
            <header className="mb-md hidden md:block">
              <Breadcrumb items={[
                { label: 'Profile', path: '/profile' },
                { label: 'Settings' }
              ]} />
            </header>

            <div className="border-b border-border/60 pb-md mb-lg">
              <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
                Settings
              </h1>
              <p className="font-body-md text-body-md text-text-secondary">
                Kelola informasi pribadi akademik Anda serta sesuaikan preferensi sistem notifikasi kegiatan.
              </p>
            </div>
          </div>

          {/* Settings Form Container */}
          <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-md md:p-xl shadow-sm flex flex-col gap-xl">
            
            {/* Section 1: Academic Info (Read-only) */}
            <div>
              <h2 className="font-bold text-base md:text-lg text-text-primary mb-md pb-xs border-b border-border/40 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-green">school</span>
                Informasi Akademik Resmi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">NIM (Nomor Induk Mahasiswa)</label>
                  <input 
                    type="text" 
                    value="123456789" 
                    disabled 
                    className="w-full px-md py-3 rounded-xl border border-border bg-surface-container-low text-text-secondary font-mono text-sm cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">Program Studi</label>
                  <input 
                    type="text" 
                    value="S1 Teknik Informatika" 
                    disabled 
                    className="w-full px-md py-3 rounded-xl border border-border bg-surface-container-low text-text-secondary text-sm cursor-not-allowed"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">Fakultas</label>
                  <input 
                    type="text" 
                    value="Fakultas Teknologi Maju dan Multidisiplin" 
                    disabled 
                    className="w-full px-md py-3 rounded-xl border border-border bg-surface-container-low text-text-secondary text-sm cursor-not-allowed"
                  />
                </div>
              </div>
              <p className="text-[11px] text-text-secondary/70 mt-sm italic flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">info</span>
                Data akademik resmi di atas disinkronisasi langsung dari sistem registrasi Cybercampus Universitas.
              </p>
            </div>

            {/* Section 2: Personal Profile Details */}
            <div>
              <h2 className="font-bold text-base md:text-lg text-text-primary mb-md pb-xs border-b border-border/40 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-green">person</span>
                Detail Profil & Kontak
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName} 
                    onChange={handleChange}
                    required
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">Email Kontak</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email} 
                    onChange={handleChange}
                    required
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-xs">Nomor Telepon / WA</label>
                  <input 
                    type="text" 
                    id="phone"
                    name="phone"
                    value={formData.phone} 
                    onChange={handleChange}
                    required
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Notification Preferences */}
            <div>
              <h2 className="font-bold text-base md:text-lg text-text-primary mb-md pb-xs border-b border-border/40 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-green">notifications</span>
                Preferensi Notifikasi
              </h2>
              <div className="flex flex-col gap-md">
                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyEmail"
                    checked={formData.notifyEmail} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-green focus:ring-primary-green border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-green transition-colors">Notifikasi Email</p>
                    <p className="text-xs text-text-secondary">Kirimkan salinan e-ticket, kwitansi, dan sertifikat resmi ke email saya.</p>
                  </div>
                </label>

                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyWhatsapp"
                    checked={formData.notifyWhatsapp} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-green focus:ring-primary-green border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-green transition-colors">Notifikasi WhatsApp</p>
                    <p className="text-xs text-text-secondary">Kirimkan pengingat absensi seminar dan update event penting langsung via chat WhatsApp.</p>
                  </div>
                </label>

                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyUpcoming"
                    checked={formData.notifyUpcoming} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-green focus:ring-primary-green border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-green transition-colors">Pengingat Jadwal Kegiatan</p>
                    <p className="text-xs text-text-secondary">Kirimkan pengingat 24 jam sebelum kegiatan yang saya ikuti dimulai.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Save Button */}
            <div className="pt-md border-t border-border/40 flex justify-end">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-primary-green hover:bg-secondary-green text-white px-xl py-3.5 rounded-xl font-label-md text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">save</span>
                Simpan Perubahan
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
