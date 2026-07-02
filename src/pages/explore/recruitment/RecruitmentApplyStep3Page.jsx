import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const RecruitmentApplyStep3Page = () => {
  const { id } = useParams();

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
          { label: 'Student Developer Club', path: `/recruitment/${id || 1}` },
          { label: 'Lamar' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-md">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">Formulir Lamaran</h1>
            <p className="font-body-md text-body-md text-text-secondary">Isi detail Anda di bawah ini untuk mengirimkan lamaran Anda ke Student Developer Club.</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-fixed text-primary px-md py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            <span className="font-label-sm text-[10px] md:text-label-sm">Ditutup dalam 10 hari</span>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-gutter">
        {/* Left Column: Confirmation */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-border rounded-xl p-md md:p-lg shadow-sm">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Informasi Pribadi', 'Akademik & Portofolio', 'Tinjau & Kirim']} 
              currentStep={3} 
              nodeBgColor="bg-white" 
            />
            
            {/* Step 3 Content */}
            <div className="flex flex-col items-center text-center py-xl border-b border-border mb-lg">
              <div className="w-16 h-16 md:w-20 md:h-20 aspect-square shrink-0 bg-success/20 text-success rounded-full flex items-center justify-center mb-md transform scale-110">
                <span className="material-symbols-outlined text-4xl md:text-5xl font-bold">check</span>
              </div>
              <h2 className="font-bold text-[20px] md:font-headline-lg md:text-headline-lg text-text-primary mb-2">Lamaran Dikonfirmasi!</h2>
              <p className="text-[12px] md:text-body-md text-text-secondary max-w-lg mx-auto leading-relaxed">
                Terima kasih telah melamar ke Student Developer Club. Detail lamaran Anda telah disimpan dan dikirim ke email universitas Anda.
              </p>
            </div>

            <div className="space-y-xl">
              {/* Review Details */}
              <div className="bg-surface p-md md:p-lg rounded-xl border border-border">
                <h3 className="font-bold text-[16px] md:font-headline-sm md:text-headline-sm text-text-primary mb-md border-b border-border pb-sm">Tinjauan Lamaran</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-lg">
                  <div>
                    <p className="font-label-sm text-[10px] md:text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Nama Pelamar</p>
                    <p className="text-[13px] md:font-body-md md:text-body-md text-text-primary font-medium">Alex Johnson</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-[10px] md:text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Peran yang Dilamar</p>
                    <p className="text-[13px] md:font-body-md md:text-body-md text-text-primary font-medium">Frontend Developer</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-[10px] md:text-label-sm text-text-secondary uppercase tracking-wider mb-xs">ID Lamaran</p>
                    <p className="text-[13px] md:font-body-md md:text-body-md text-primary font-mono font-medium">REC-2026-A12B</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-[10px] md:text-label-sm text-text-secondary uppercase tracking-wider mb-xs">Status</p>
                    <p className="font-bold text-[10px] md:font-label-md md:text-label-md text-success px-2 py-1 bg-success/10 rounded-md w-fit">SEDANG DITINJAU</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Group Link */}
              <div className="bg-[#E7F8F0] border border-[#25D366]/30 p-md md:p-lg rounded-xl flex flex-col sm:flex-row items-center gap-md md:gap-lg">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-[#25D366]/40">
                  {/* WhatsApp SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="md:w-[32px] md:h-[32px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-[14px] md:font-headline-sm md:text-headline-sm text-[#0F172A] mb-1">Gabung ke Grup Pelamar</h3>
                  <p className="text-[11px] md:text-body-sm text-[#475569]">Dapatkan pengumuman terbaru, jadwal wawancara, dan berinteraksi dengan pelamar lainnya.</p>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[13px] md:font-label-md md:text-label-md py-sm px-lg md:px-xl rounded-lg transition-all active:scale-95 text-center shrink-0 flex items-center justify-center gap-xs">
                  <span className="material-symbols-outlined text-[16px] md:text-[18px]">group_add</span>
                  Gabung Grup
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-4 mt-md lg:mt-0">
          <div className="bg-white border border-border rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="relative h-40 md:h-48 w-full bg-surface-container">
              <img alt="SDC Recruitment Poster" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXjKaOYj38rvdw5FTMz4hNI65pj-zmRRK5dkCRFK21NA-CNACfBl8_DiMDqRGyEjjQgZJV_gq44_AHMRkW7wRuEPv9IBvt0ay5nsRRdbBx2hn_rAkdrdD1pT7vjbwGpi7EZHWAeuGzMohGwkRqtCXZ7vDHLjO_l4Fz3TChzcHNG6G2hCaB-Pl61yhCgL1O8mf1GCI2LCZGY4GJIGEX4Tt1E54S462SQxrM7NnPaLKL0idK4-jGQs54VrW4uHV794xKxXiXJ_sDWNR" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <span className="bg-primary text-on-primary px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold text-[10px] md:font-label-sm md:text-label-sm">Rekrutmen</span>
              </div>
            </div>
            <div className="p-md md:p-lg flex flex-col gap-md md:gap-lg">
              <div>
                <h3 className="font-bold text-[16px] md:font-headline-md md:text-headline-md text-text-primary mb-xs md:mb-sm">Student Developer Club</h3>
                <div className="space-y-1 md:space-y-sm">
                  <div className="flex items-center gap-xs md:gap-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] md:text-sm">groups</span>
                    <span className="text-[11px] md:font-body-sm md:text-body-sm">Rekrutmen Staf 2026</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-md md:pt-lg">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-label-md text-text-secondary">Peran Terpilih</span>
                  <span className="font-label-md text-label-md text-primary">Frontend Developer</span>
                </div>
                <p className="text-[11px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-md md:mb-xl italic">Portofolio dan Persyaratan terlampir.</p>
                
                <Link 
                  to="/explore" 
                  className="w-full mt-md bg-surface-container-low text-primary border border-primary/20 font-bold text-[12px] md:font-label-md md:text-label-md py-sm md:py-md rounded-lg hover:bg-primary/10 active:scale-95 transition-all flex items-center justify-center gap-xs md:gap-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  Kembali ke Eksplorasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentApplyStep3Page;
