import { useState, useEffect } from 'react';
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
        <main className="flex-1 py-md md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-sm">
          
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

          {/* Mobile Identity Card (Hidden on Desktop) */}
          <div className="md:hidden bg-white rounded-2xl border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 text-left relative z-20 mb-md">
            <div className="flex items-start justify-between mb-sm">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-border bg-surface-container-high shrink-0">
                <img 
                  alt="Daffa Eka Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXdMNHYXEridbxzZjCuV8_6AIF4dz-2maZTcytehk3UX-6hevUDytjNVlxuTHuLfDybfLtQkYhHo8qDSiXdK8Z3KHl0tvu3C-zILvkFAil0N4Ru_66xwrmNfaTO9AHGKOVxRIPvnq4REp7jUqL4OORRNo-T-l71qwd92bS0Khgl2sRKBLAgR0lEPZHo4cOnqqpZEc3OcPHca1zbrKo5Nt8skOv1gtzZGdOwQ2rNl4RQHbwh6L17z3U7-AUS9dc0nhoKmDfw-BFVvJu" 
                />
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue font-label-sm text-[10px] border border-primary-blue/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-1"></span>
                Active Student
              </span>
            </div>
            <h2 className="font-bold text-base text-text-primary">Daffa Eka</h2>
            <p className="text-xs text-text-primary font-mono mt-0.5">NIM: 123456789</p>
            <p className="text-xs text-text-secondary mt-1">S1 Teknik Informatika</p>
          </div>

          {/* Settings Form Container */}
          <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-md md:p-xl shadow-sm flex flex-col gap-xl">
            
            {/* Section 1: Academic Info (Read-only) */}
            <div>
              <h2 className="font-bold text-base md:text-lg text-text-primary mb-md pb-xs border-b border-border/40 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-blue">school</span>
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
                <span className="material-symbols-outlined text-primary-blue">person</span>
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
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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
                    className="w-full px-md py-3 rounded-xl border border-border text-text-primary text-sm focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Notification Preferences */}
            <div>
              <h2 className="font-bold text-base md:text-lg text-text-primary mb-md pb-xs border-b border-border/40 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-blue">notifications</span>
                Preferensi Notifikasi
              </h2>
              <div className="flex flex-col gap-md">
                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyEmail"
                    checked={formData.notifyEmail} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-blue focus:ring-primary-blue border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-blue transition-colors">Notifikasi Email</p>
                    <p className="text-xs text-text-secondary">Kirimkan salinan e-ticket, kwitansi, dan sertifikat resmi ke email saya.</p>
                  </div>
                </label>

                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyWhatsapp"
                    checked={formData.notifyWhatsapp} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-blue focus:ring-primary-blue border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-blue transition-colors">Notifikasi WhatsApp</p>
                    <p className="text-xs text-text-secondary">Kirimkan pengingat absensi seminar dan update event penting langsung via chat WhatsApp.</p>
                  </div>
                </label>

                <label className="flex items-start gap-md cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="notifyUpcoming"
                    checked={formData.notifyUpcoming} 
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary-blue focus:ring-primary-blue border-border cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary-blue transition-colors">Pengingat Jadwal Kegiatan</p>
                    <p className="text-xs text-text-secondary">Kirimkan pengingat 24 jam sebelum kegiatan yang saya ikuti dimulai.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Save Button */}
            <div className="pt-md border-t border-border/40 flex justify-end">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-primary-blue hover:bg-secondary-blue text-white px-xl py-3.5 rounded-xl font-label-md text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
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
