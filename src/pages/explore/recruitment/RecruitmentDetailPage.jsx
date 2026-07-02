import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../../components/common/Breadcrumb';

const RecruitmentDetailPage = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-3xl">
      <div className="mb-lg">
        <Breadcrumb items={[
          { label: 'Eksplorasi', path: '/explore' },
          { label: 'Student Developer Club Recruitment 2026' }
        ]} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-3xl">
        
        {/* Left Column: Poster */}
        <div className="lg:col-span-5">
          <div className="sticky top-2xl bg-white rounded-xl border border-border overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md">
            <img 
              alt="SDC Recruitment Poster" 
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXjKaOYj38rvdw5FTMz4hNI65pj-zmRRK5dkCRFK21NA-CNACfBl8_DiMDqRGyEjjQgZJV_gq44_AHMRkW7wRuEPv9IBvt0ay5nsRRdbBx2hn_rAkdrdD1pT7vjbwGpi7EZHWAeuGzMohGwkRqtCXZ7vDHLjO_l4Fz3TChzcHNG6G2hCaB-Pl61yhCgL1O8mf1GCI2LCZGY4GJIGEX4Tt1E54S462SQxrM7NnPaLKL0idK4-jGQs54VrW4uHV794xKxXiXJ_sDWNR"
            />
            <div className="p-md md:p-lg bg-surface border-t border-border flex justify-between items-center">
              <div className="flex items-center gap-sm md:gap-md">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                </div>
                <div>
                  <p className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">SDC Portal</p>
                  <p className="font-body-sm text-[10px] md:text-body-sm text-text-secondary">Hub Resmi</p>
                </div>
              </div>
              <div className="bg-primary-fixed text-primary px-2 py-0.5 md:px-sm md:py-xs rounded-full text-[9px] md:text-label-sm font-label-sm">AKTIF</div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Details */}
        <div className="lg:col-span-7 flex flex-col gap-xl md:gap-2xl mt-md lg:mt-0">
          
          {/* Header Info */}
          <div className="flex flex-col gap-sm md:gap-md">
            <div className="flex items-center gap-xs md:gap-sm flex-wrap">
              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 md:px-sm md:py-xs rounded-full text-[9px] md:text-label-sm font-label-sm">Recruitment 2026</span>
              <span className="text-text-secondary text-[9px] md:text-label-sm">•</span>
              <span className="text-text-secondary text-[9px] md:text-label-sm">ID: {id || "0294-SDC"}</span>
            </div>
            <h1 className="font-bold text-headline-md md:font-headline-xl md:text-headline-xl text-text-primary leading-tight">Student Developer Club Recruitment 2026</h1>
            <div className="flex items-center gap-sm md:gap-md">
              <div className="font-bold text-[14px] md:text-headline-md text-primary tracking-tighter">SDC</div>
              <div className="h-5 md:h-6 w-[1px] bg-border"></div>
              <p className="text-text-secondary text-[11px] md:text-body-md">Student Developer Club</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="bg-white p-md md:p-lg rounded-xl border border-border">
            <p className="text-text-primary text-[13px] md:text-body-lg leading-relaxed">
              Bergabunglah dengan komunitas inovator dan pengembang mahasiswa kami. Kami mencari individu yang bersemangat untuk membantu kami membangun masa depan teknologi kampus. Di SDC, kami tidak hanya menulis kode; kami memecahkan masalah dunia nyata untuk mahasiswa, oleh mahasiswa.
            </p>
          </div>
          
          {/* Bento Grid Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
            
            {/* Available Roles */}
            <div className="bg-white p-md md:p-lg rounded-xl border border-border flex flex-col gap-sm md:gap-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-[18px] md:text-[24px] text-primary">work</span>
                <h3 className="font-bold text-[16px] md:font-headline-md md:text-headline-md">Peran yang Tersedia</h3>
              </div>
              <ul className="flex flex-col gap-xs md:gap-sm">
                <li className="flex items-center gap-sm md:gap-md p-1 md:p-sm hover:bg-surface rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-[16px] md:text-[24px] text-text-secondary group-hover:text-primary transition-colors">code</span>
                  <span className="text-[12px] md:text-body-md text-text-primary">Frontend Developer</span>
                </li>
                <li className="flex items-center gap-sm md:gap-md p-1 md:p-sm hover:bg-surface rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-[16px] md:text-[24px] text-text-secondary group-hover:text-primary transition-colors">palette</span>
                  <span className="text-[12px] md:text-body-md text-text-primary">UI/UX Designer</span>
                </li>
                <li className="flex items-center gap-sm md:gap-md p-1 md:p-sm hover:bg-surface rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-[16px] md:text-[24px] text-text-secondary group-hover:text-primary transition-colors">assignment</span>
                  <span className="text-[12px] md:text-body-md text-text-primary">Project Manager</span>
                </li>
                <li className="flex items-center gap-sm md:gap-md p-1 md:p-sm hover:bg-surface rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-[16px] md:text-[24px] text-text-secondary group-hover:text-primary transition-colors">database</span>
                  <span className="text-[12px] md:text-body-md text-text-primary">Backend Developer</span>
                </li>
              </ul>
            </div>
            
            {/* Stats & Metadata */}
            <div className="flex flex-col gap-md md:gap-lg">
              <div className="bg-primary p-md md:p-lg rounded-xl border border-primary text-on-primary flex flex-col gap-0 md:gap-xs">
                <p className="text-[10px] md:text-label-sm font-label-sm opacity-80 uppercase tracking-wider mb-1">Tenggat Waktu Pendaftaran</p>
                <p className="text-[18px] md:text-headline-md font-bold md:font-headline-md mb-1">Ditutup dalam 10 hari</p>
                <p className="text-[11px] md:text-body-sm opacity-70">25 Maret 2026</p>
              </div>
              <div className="bg-surface p-md md:p-lg rounded-xl border border-border flex justify-between items-center h-full">
                <div>
                  <p className="text-[10px] md:text-label-sm font-label-sm text-text-secondary mb-1">Pelamar Saat Ini</p>
                  <p className="text-[18px] md:text-headline-md font-bold md:font-headline-md text-text-primary">142</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN8HjGKu6mwUyiwh2MvcOx8-oNND3hcZx6VUE24ZSv2QBQdqBHjilxMpnZGO-sD7lTZpaiXHyykYaDJQS9xxIrIruV7Ue0bixXNK0Fj8ti5YZ5SciEgAjApzk6JMH_Cjo0jwUfbRXhLGYdj2p4F4TL_80qZUz-UwJtvPHWX1gOrXjsIycIBRMbvLJAs0N97yDum6vOzs_eT_NHmpwHu48SXzKBaSqK00oSwbktWIzWbrztYk427V_j01uw03nsKDFhnD23mPCUDD0z" alt="Applicant" />
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Q7UWgKkczbW3kFiXvXKjdaBYF4ezRNGzryONQXnpqx6C0u7FuunmRp9aC822aVnJxRO64TzbbR4DZ5lPt8sTyfafx-RL9SJk8lEXMM6ZrOm6kYOFGyH80hRpHBouBrVjyl8hZMP2hCGnbquXhnx8uRFlXnm_bCSKfjbywh-skGcettXcXdWOEm8I_JyACFl7Bn9aKujBVyTm76cwjlpB5aeul1fZsnIim2lJz96FRBknNReCMZTrDnikS677sGrpwhyVAPnyR73f" alt="Applicant" />
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-primary-fixed flex items-center justify-center text-[8px] md:text-[10px] font-bold text-primary">+140</div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Requirements */}
          <div className="bg-white p-md md:p-lg rounded-xl border border-border flex flex-col gap-sm md:gap-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-[18px] md:text-[24px] text-primary">checklist</span>
              <h3 className="font-bold text-[16px] md:font-headline-md md:text-headline-md">Persyaratan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm md:gap-md">
              <div className="flex items-start gap-sm md:gap-md">
                <span className="material-symbols-outlined text-[16px] md:text-[24px] text-success mt-0.5 md:mt-1">check_circle</span>
                <p className="text-[12px] md:text-body-md text-text-primary">Terdaftar di setidaknya satu mata kuliah terkait STEM semester ini.</p>
              </div>
              <div className="flex items-start gap-sm md:gap-md">
                <span className="material-symbols-outlined text-[16px] md:text-[24px] text-success mt-0.5 md:mt-1">check_circle</span>
                <p className="text-[12px] md:text-body-md text-text-primary">Kemahiran dasar dalam Git/GitHub dan alur kerja kolaboratif.</p>
              </div>
              <div className="flex items-start gap-sm md:gap-md">
                <span className="material-symbols-outlined text-[16px] md:text-[24px] text-success mt-0.5 md:mt-1">check_circle</span>
                <p className="text-[12px] md:text-body-md text-text-primary">Kesediaan untuk meluangkan waktu 5-10 jam per minggu untuk proyek klub.</p>
              </div>
              <div className="flex items-start gap-sm md:gap-md">
                <span className="material-symbols-outlined text-[16px] md:text-[24px] text-success mt-0.5 md:mt-1">check_circle</span>
                <p className="text-[12px] md:text-body-md text-text-primary">Portofolio atau repositori yang menampilkan setidaknya satu proyek pribadi.</p>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-sm md:gap-md items-center mt-sm md:mt-md">
            <Link to={`/recruitment/${id || 1}/apply`} className="w-full sm:w-auto bg-primary text-on-primary px-md md:px-xl py-sm md:py-md rounded-lg font-bold text-body-sm md:text-body-md hover:bg-primary-hover shadow-lg shadow-primary/10 transition-all text-center cursor-pointer">
              Lamar Sekarang
            </Link>
            <button className="w-full sm:w-auto bg-white text-text-primary border border-border px-md md:px-xl py-sm md:py-md rounded-lg font-bold text-body-sm md:text-body-md hover:bg-surface transition-all flex items-center justify-center gap-xs md:gap-sm group">
              Pelajari Lebih Lanjut tentang SDC
              <span className="material-symbols-outlined text-[16px] md:text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          
          {/* Sharing/Saved */}
          <div className="flex items-center justify-between py-sm md:py-md border-t border-border mt-sm md:mt-md">
            <div className="flex gap-sm md:gap-md">
              <button className="flex items-center gap-1 md:gap-xs text-text-secondary hover:text-primary transition-colors text-[10px] md:text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] md:text-md">share</span> <span className="hidden sm:inline">Bagikan Posisi</span>
              </button>
              <button className="flex items-center gap-1 md:gap-xs text-text-secondary hover:text-primary transition-colors text-[10px] md:text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] md:text-md">bookmark_border</span> <span className="hidden sm:inline">Simpan untuk Nanti</span>
              </button>
            </div>
            <p className="text-[10px] md:text-label-sm font-label-sm text-text-secondary italic">Terakhir diperbarui: 2 hari yang lalu</p>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default RecruitmentDetailPage;
