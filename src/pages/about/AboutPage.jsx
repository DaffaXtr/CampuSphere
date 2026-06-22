import React, { useEffect } from 'react';
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

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col text-left">
      {/* Breadcrumb */}
      <header className="mb-md hidden md:block">
        <Breadcrumb items={[
          { label: 'About Us' }
        ]} />
      </header>

      {/* Hero Section */}
      <section 
        style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F4FAF4 60%, #FCE4EC 100%)' }}
        className="border border-border rounded-2xl p-lg md:p-2xl flex flex-col lg:flex-row justify-between items-center overflow-hidden relative min-h-[340px] group shadow-sm mb-2xl"
      >
        <div className="absolute top-8 right-16 w-12 h-12 rounded-full bg-soft-magenta/60 pointer-events-none"></div>
        <div className="absolute bottom-[-50px] right-[-30px] w-80 h-64 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col justify-center flex-1 relative z-10 max-w-2xl">
          <span className="text-primary-green font-bold text-xs md:text-sm tracking-wider uppercase mb-sm">TENTANG KAMI</span>
          <h1 className="font-headline-xl text-3xl md:text-5xl text-text-primary tracking-tight leading-tight mb-md">
            Membangun Konektivitas & Kreativitas Kampus
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-lg">
            CampuSphere hadir sebagai platform digital terintegrasi yang dirancang khusus untuk mempermudah mahasiswa dalam mengeksplorasi kegiatan organisasi, mendaftar event, melamar posisi recruitment kepengurusan, serta berbelanja merchandise resmi kampus secara aman dan terpercaya.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Link 
              to="/explore" 
              className="bg-primary-green hover:bg-secondary-green text-white text-xs md:text-sm px-xl py-3 rounded-xl font-label-md transition-all active:scale-95 shadow-sm text-center"
            >
              Explore Sekarang
            </Link>
          </div>
        </div>

        {/* Brand Logo Illustration */}
        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-white border border-border shadow-md rounded-2xl flex items-center justify-center relative mt-lg lg:mt-0 flex-shrink-0">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-primary-green mb-sm select-none animate-pulse">groups</span>
            <span className="font-bold text-lg md:text-xl text-text-primary">CampuSphere</span>
            <span className="text-xs text-text-secondary mt-0.5">Ecosystem 2026</span>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Visi & Misi Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
          {/* Visi Card */}
          <div className="bg-soft-green border border-border rounded-2xl p-lg flex flex-col justify-between group shadow-sm hover:shadow transition-shadow">
            <div>
              <div className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center mb-md shadow-sm">
                <span className="material-symbols-outlined text-primary-green">visibility</span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-text-primary mb-sm group-hover:text-primary-green transition-colors">Visi Kami</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                Menjadi ekosistem digital kemahasiswaan nomor satu di Indonesia yang menghubungkan talenta muda, memicu inovasi kolaboratif, dan menyederhanakan administrasi kegiatan kampus dalam satu pintu yang modern dan inklusif.
              </p>
            </div>
          </div>

          {/* Misi Card */}
          <div className="bg-soft-magenta border border-border rounded-2xl p-lg flex flex-col justify-between group shadow-sm hover:shadow transition-shadow">
            <div>
              <div className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center mb-md shadow-sm">
                <span className="material-symbols-outlined text-primary-magenta">rocket_launch</span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-text-primary mb-sm group-hover:text-primary-magenta transition-colors">Misi Kami</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                Menyediakan layanan pendaftaran event yang transparan, platform rekrutmen staff organisasi yang adil dan ATS-friendly, serta mendukung keberlangsungan finansial organisasi mahasiswa melalui penyediaan merchandise store resmi yang terintegrasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bento Grid */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Statistik CampuSphere</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-sm md:gap-md">
          {/* Stat 1 */}
          <div className="bg-white border border-border rounded-2xl p-md md:p-lg text-center shadow-sm">
            <h4 className="font-headline-xl text-2xl md:text-3xl font-bold text-primary-green mb-1">10k+</h4>
            <p className="text-text-secondary text-xs md:text-sm">Pengguna Aktif</p>
          </div>
          {/* Stat 2 */}
          <div className="bg-white border border-border rounded-2xl p-md md:p-lg text-center shadow-sm">
            <h4 className="font-headline-xl text-2xl md:text-3xl font-bold text-primary-magenta mb-1">50+</h4>
            <p className="text-text-secondary text-xs md:text-sm">Organisasi Terdaftar</p>
          </div>
          {/* Stat 3 */}
          <div className="bg-white border border-border rounded-2xl p-md md:p-lg text-center shadow-sm">
            <h4 className="font-headline-xl text-2xl md:text-3xl font-bold text-primary-green mb-1">200+</h4>
            <p className="text-text-secondary text-xs md:text-sm">Event Terlaksana</p>
          </div>
          {/* Stat 4 */}
          <div className="bg-white border border-border rounded-2xl p-md md:p-lg text-center shadow-sm">
            <h4 className="font-headline-xl text-2xl md:text-3xl font-bold text-primary-magenta mb-1">1k+</h4>
            <p className="text-text-secondary text-xs md:text-sm">Merchandise Terjual</p>
          </div>
        </div>
      </section>

      {/* Team Profile Section */}
      <section className="mb-2xl">
        <h2 className="font-bold text-xl md:text-2xl text-text-primary mb-lg">Tim Pengembang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-border hover:border-primary-green/30 rounded-2xl p-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-primary-green/20 group-hover:border-primary-green/60 shadow-sm transition-colors mb-md"
              />
              <h4 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary-green transition-colors">{member.name}</h4>
              <p className="text-xs text-text-secondary font-semibold font-label-md mb-md">{member.role}</p>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-md">
                {member.bio}
              </p>
              
              {/* Dummy Social Links */}
              <div className="flex gap-sm mt-auto pt-sm">
                <span className="material-symbols-outlined text-[18px] text-text-secondary hover:text-primary-green cursor-pointer">mail</span>
                <span className="material-symbols-outlined text-[18px] text-text-secondary hover:text-primary-green cursor-pointer">share</span>
                <span className="material-symbols-outlined text-[18px] text-text-secondary hover:text-primary-green cursor-pointer">link</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Call to Action */}
      <section className="bg-white border border-border border-dashed rounded-2xl p-lg md:p-xl text-center flex flex-col items-center max-w-3xl mx-auto shadow-sm">
        <span className="material-symbols-outlined text-4xl text-primary-green mb-md">handshake</span>
        <h3 className="font-bold text-lg md:text-xl text-text-primary mb-sm">Mari Berkolaborasi!</h3>
        <p className="text-text-secondary text-xs md:text-sm leading-relaxed max-w-xl mb-lg">
          Apakah organisasi Anda tertarik untuk bermitra dengan CampuSphere dalam menyelenggarakan event, membuka pendaftaran kepengurusan, atau mendistribusikan merchandise resmi? Hubungi tim pengembang kami untuk memulai kemitraan hari ini!
        </p>
        <a 
          href="mailto:contact@campusphere.edu"
          className="bg-primary-green hover:bg-secondary-green text-white text-xs md:text-sm px-xl py-3 rounded-xl font-label-md transition-all active:scale-95 shadow-sm inline-block"
        >
          Hubungi Kami
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
