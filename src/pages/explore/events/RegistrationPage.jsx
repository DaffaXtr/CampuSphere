import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const RegistrationPage = () => {
  const location = useLocation();
  const eventData = location.state?.eventData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* Left Column: Form */}
        <div className="lg:col-span-8">
          <div className="bento-card rounded-xl p-lg md:p-xl shadow-sm bg-white">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Informasi Pribadi', 'Pemilihan Tiket', 'Pembayaran', 'Konfirmasi']} 
              currentStep={1} 
              nodeBgColor="bg-white" 
            />
            
            {/* Step 1 Content */}
            <form className="space-y-xl mt-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-sm">
                  <label className="font-label-md text-label-md text-text-primary">Nama Lengkap</label>
                  <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="misal: Alex Johnson" type="text" />
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="font-label-md text-label-md text-text-primary">Nomor Induk Mahasiswa (NIM)</label>
                  <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="misal: 202610110" type="text" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-sm">
                  <label className="font-label-md text-label-md text-text-primary">Jurusan / Fakultas</label>
                  <select className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md bg-white" defaultValue="">
                    <option disabled value="">Pilih fakultas Anda</option>
                    <option>Fakultas Ilmu Komputer</option>
                    <option>Fakultas Teknik</option>
                    <option>Fakultas Bisnis</option>
                    <option>Fakultas Seni</option>
                  </select>
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="font-label-md text-label-md text-text-primary">Nomor Telepon</label>
                  <div className="relative">
                    <span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">+62</span>
                    <input className="w-full h-12 pl-16 pr-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="812 3456 7890" type="tel" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-sm">
                <label className="font-label-md text-label-md text-text-primary">Email Universitas</label>
                <input className="w-full h-12 px-md rounded-lg border border-border focus:border-primary outline-none input-glow transition-all font-body-md" placeholder="alex.j@university.ac.id" type="email" />
              </div>
              
              <div className="p-md rounded-lg bg-surface flex gap-md items-start">
                <input className="mt-1 rounded text-primary focus:ring-primary" id="terms" type="checkbox" />
                <label className="font-body-sm text-body-sm text-text-secondary" htmlFor="terms">
                  Saya menyatakan bahwa informasi yang diberikan adalah akurat dan saya menyetujui <a className="text-primary hover:underline" href="#">syarat dan ketentuan acara</a>, termasuk protokol kesehatan dan keselamatan di lokasi.
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bento-card rounded-xl overflow-hidden flex flex-col">
            <div className="relative h-48 w-full bg-surface-container">
              <img alt="Tech Seminar Hall" className="w-full h-full object-cover" data-alt="A wide-angle photograph of a futuristic seminar hall with massive LED screens displaying complex code and circuit diagrams. The lighting is dominated by professional blue and white studio lights, reflecting off polished modern surfaces. A large, diverse audience of students is seated in the foreground, creating a vibrant, high-energy atmosphere for a grand technology convention." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqgKHnDbGKA6IEOZhDMRrGrUzIVlz0XjOSGJYaS8jwJDFXidSzT5XZnkU9qYPDz81TDopqYHfrWA42teluQH-47I6h_WnYcJmsS620Mr8p6IkKQxHwhNeTvwKzNxudmUcOZo0fvnfVtwrELfv2-27L9pISkqP69yIMLM6jzpXiLNSzW-ryF9wtuWHFAk4bgApAaDTipSxmIuLIFgOr7rFiboWFuQyEYuduMMJGKAYKK-TmYn2Dp57rf1Q8yCOH077W0ugvggaSpoq" />
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
                  <span className="font-label-md text-label-md text-text-secondary">Tiket Terpilih</span>
                  <span className="font-label-md text-label-md text-primary">Gratis</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">Tiket Masuk Umum - Akses Mahasiswa</p>
                <div className="flex justify-between items-center py-md border-t border-dashed border-border mb-lg">
                  <span className="font-headline-md text-headline-md text-text-primary">Total</span>
                  <span className="font-headline-md text-headline-md text-primary">IDR 0</span>
                </div>
                <Link to="/event/1/register/step2" className="w-full bg-primary text-on-primary font-label-md text-label-md py-md rounded-lg hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-sm">
                  Lanjutkan ke Langkah Berikutnya
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
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

export default RegistrationPage;
