import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Daffa Pratama',
      role: 'Project Lead & Back-End Developer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
      bio: 'Bertanggung jawab atas manajemen proyek, arsitektur database, dan pengembangan sistem API server CampuSphere.'
    },
    {
      name: 'Amanda Kirana',
      role: 'Lead UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      bio: 'Fokus pada riset pengguna, perancangan kawat (wireframe), dan visualisasi antarmuka pengguna yang premium.'
    },
    {
      name: 'Reynald Wijaya',
      role: 'Front-End Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
      bio: 'Mengimplementasikan desain interaktif ke dalam kode komponen React yang responsif dan berkinerja tinggi.'
    }
  ];

  const values = [
    { icon: 'verified_user', label: 'Terpercaya' },
    { icon: 'diversity_3', label: 'Inklusif' },
    { icon: 'lightbulb', label: 'Inovatif' },
    { icon: 'hub', label: 'Kolaboratif' }
  ];

  const stats = [
    { icon: 'group', num: '10k+', label: 'Pengguna Aktif', color: 'text-primary-blue' },
    { icon: 'apartment', num: '50+', label: 'Organisasi Terdaftar', color: 'text-dark-yellow' },
    { icon: 'event_available', num: '200+', label: 'Event Terlaksana', color: 'text-primary-blue' },
    { icon: 'shopping_bag', num: '1k+', label: 'Merchandise Terjual', color: 'text-dark-yellow' }
  ];

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col text-left">
      {/* Breadcrumb */}
      <header className="mb-md hidden md:block">
        <Breadcrumb items={[
          { label: 'About Us' }
        ]} />
      </header>

      {/* ======= HERO SECTION ======= */}
      <section className="relative mb-2xl overflow-hidden">
        {/* Background Container */}
        <div 
          style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFF 40%, #FFFDF5 100%)' }}
          className="border border-border rounded-2xl p-lg md:p-2xl relative overflow-hidden shadow-sm"
        >
          {/* Decorative Elements */}
          <div className="absolute top-6 right-20 md:right-40 w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary-yellow opacity-80 pointer-events-none"></div>
          <div className="absolute top-0 right-10 md:right-28 w-14 h-14 md:w-20 md:h-20 rounded-full bg-soft-yellow pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(219,234,254,0.3), transparent)' }}></div>
          {/* Decorative dots */}
          <div className="absolute bottom-8 right-10 grid grid-cols-4 gap-1.5 pointer-events-none opacity-30">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-sm relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center flex-1 max-w-2xl">
              <span className="bg-primary-blue/10 text-primary-blue font-bold text-[10px] md:text-xs tracking-wider uppercase px-3 py-1 rounded-full inline-block w-fit mb-md border border-primary-blue/15">
                TENTANG KAMI
              </span>
              <h1 className="font-headline-xl text-3xl md:text-[44px] text-text-primary tracking-tight leading-[1.15] mb-md">
                Membangun Konektivitas & Kreativitas Kampus
              </h1>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-lg max-w-xl">
                CampuSphere hadir sebagai platform digital terintegrasi yang dirancang khusus untuk mempermudah mahasiswa dalam mengeksplorasi kegiatan organisasi, mendaftar event, melamar posisi recruitment kepengurusan, serta berbelanja merchandise resmi kampus secara aman dan terpercaya.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-md mb-md">
                <Link 
                  to="/explore" 
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-xs md:text-sm px-lg py-3 rounded-full font-bold transition-all active:scale-95 shadow-sm inline-flex items-center gap-2 w-fit"
                >
                  Explore Sekarang
                  <span className="material-symbols-outlined text-base rounded-full p-0.5">arrow_forward</span>
                </Link>
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center gap-sm">
                <div className="flex -space-x-2.5">
                  {['photo-1535713875002-d1d0cf377fde', 'photo-1494790108377-be9c29b29330', 'photo-1500648767791-00dcc994a43e', 'photo-1580489944761-15a19d654956'].map((id, i) => (
                    <img 
                      key={i}
                      src={`https://images.unsplash.com/${id}?q=80&w=60&auto=format&fit=crop`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Bergabung dengan</p>
                  <p className="text-xs font-bold text-primary-blue">10.000+ mahasiswa aktif</p>
                </div>
              </div>
            </div>

            {/* Right: Brand Card + Values */}
            <div className="flex flex-col items-center gap-md flex-shrink-0 mt-lg lg:mt-0 w-full lg:w-auto self-center lg:self-auto">
              {/* Brand Logo Card */}
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white border border-border shadow-md rounded-2xl flex items-center justify-center relative">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-5xl md:text-6xl text-primary-blue mb-1 select-none">groups</span>
                  <span className="font-bold text-base md:text-lg text-text-primary">CampuSphere</span>
                  <span className="text-[10px] text-text-secondary mt-0.5">Ecosystem 2026</span>
                </div>
              </div>

              {/* Values Row */}
              <div className="flex items-center justify-center gap-3 md:gap-4 w-full">
                {values.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-white border border-border rounded-xl flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary-blue text-[18px] md:text-[20px]">{item.icon}</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-text-secondary font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= VISI & MISI ======= */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Visi & Misi Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
          {/* Visi Card */}
          <div className="bg-ultra-light-blue border border-primary-blue/10 rounded-2xl p-lg md:p-xl group shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center gap-sm mb-md">
              <div className="w-10 h-10 bg-primary-blue/10 border border-primary-blue/15 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-blue text-xl">visibility</span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-primary-blue">Visi Kami</h3>
            </div>
            <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
              Menjadi ekosistem digital kemahasiswaan nomor satu di Indonesia yang menghubungkan talenta muda, memicu inovasi kolaboratif, dan menyederhanakan administrasi kegiatan kampus dalam satu pintu yang modern dan inklusif.
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-pale-yellow/40 border border-secondary-yellow/15 rounded-2xl p-lg md:p-xl group shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center gap-sm mb-md">
              <div className="w-10 h-10 bg-secondary-yellow/10 border border-secondary-yellow/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-dark-yellow text-xl">rocket_launch</span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-dark-yellow">Misi Kami</h3>
            </div>
            <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
              Menyediakan layanan pendaftaran event yang transparan, platform rekrutmen staff organisasi yang adil dan ATS-friendly, serta mendukung keberlangsungan finansial organisasi mahasiswa melalui penyediaan merchandise store resmi yang terintegrasi.
            </p>
          </div>
        </div>
      </section>

      {/* ======= STATISTIK ======= */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Statistik CampuSphere</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-sm md:gap-md">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-md md:p-lg shadow-sm text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className={`material-symbols-outlined text-[22px] ${stat.color} opacity-60`}>{stat.icon}</span>
                <h4 className={`font-headline-xl text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.num}</h4>
              </div>
              <p className="text-text-secondary text-[11px] md:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======= TIM PENGEMBANG ======= */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Tim Pengembang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-border hover:border-primary-blue/30 rounded-2xl p-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-primary-blue/15 group-hover:border-primary-blue/50 shadow-sm transition-colors mb-md"
              />
              <h4 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary-blue transition-colors">{member.name}</h4>
              <p className="text-xs text-primary-blue font-semibold mb-md">{member.role}</p>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-md">
                {member.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-auto pt-sm">
                <span className="material-symbols-outlined text-[18px] text-text-secondary hover:text-primary-blue cursor-pointer transition-colors">mail</span>
                <svg className="w-[18px] h-[18px] text-text-secondary hover:text-primary-blue cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <svg className="w-[18px] h-[18px] text-text-secondary hover:text-primary-blue cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= MARI BERKOLABORASI ======= */}
      <section 
        className="border border-secondary-yellow/15 rounded-2xl p-lg md:p-xl flex flex-col md:flex-row items-center gap-lg md:gap-xl mb-xl overflow-hidden relative"
        style={{ background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFF 40%, #FFFDF5 100%)' }}
      >
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-secondary-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {/* Left Illustration */}
        <div className="flex-shrink-0 w-[120px] h-[120px] md:w-[160px] md:h-[160px] relative">
          {/* Puzzle/Building Illustration using icons */}
          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden border border-border shadow-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-primary-blue text-4xl md:text-5xl">domain</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-secondary-yellow text-xl">extension</span>
                <span className="material-symbols-outlined text-primary-blue text-xl">extension</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold text-lg md:text-xl text-text-primary mb-sm">Mari Berkolaborasi!</h3>
          <p className="text-text-secondary text-xs md:text-sm leading-relaxed max-w-xl">
            Apakah organisasi Anda tertarik untuk bermitra dengan CampuSphere dalam menyelenggarakan event, membuka pendaftaran kepengurusan, atau mendistribusikan merchandise resmi? Hubungi tim pengembang kami untuk memulai kemitraan hari ini!
          </p>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:contact@campusphere.edu"
          className="bg-primary-blue hover:bg-secondary-blue text-white text-xs md:text-sm px-lg py-3 rounded-full font-bold transition-all active:scale-95 shadow-sm inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
        >
          Hubungi Kami
          <span className="material-symbols-outlined text-base rounded-full p-0.5">arrow_forward</span>
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
