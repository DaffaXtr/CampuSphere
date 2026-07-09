import { useState, useEffect } from 'react';

import RecruitmentCard from '../../../components/explore/RecruitmentCard';
import Breadcrumb from '../../../components/common/Breadcrumb';
import heroImage from '../../../assets/Bingkai ID Card Foto.png';

const AllRecruitmentsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeDepartment, setActiveDepartment] = useState('Semua Posisi');
  const [activeRoleType, setActiveRoleType] = useState('Semua Tipe');
  const [activeStatus, setActiveStatus] = useState('Semua Status');
  const [sortBy, setSortBy] = useState('Terbaru Dahulu');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allRecruitments = [
    {
      id: 1,
      title: 'Vocational IT Olympiad 2026',
      subtitle: 'HIMA D4 Teknik Informatika',
      imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600',
      icon: 'code',
      iconColor: 'text-primary',
      tags: ['Teknik', 'Staff Divisi'],
      timeRemaining: 'Tutup dalam 2 hari',
      department: 'Teknik',
      roleType: 'Staff Divisi',
      status: 'Buka'
    },
    {
      id: 2,
      title: 'Tax & Accounting Fair 2026',
      subtitle: 'HIMA D4 Akuntansi Perpajakan',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600',
      icon: 'account_balance_wallet',
      iconColor: 'text-tertiary',
      tags: ['Bisnis', 'BPH'],
      timeRemaining: 'Tutup dalam 5 hari',
      department: 'Bisnis',
      roleType: 'BPH',
      status: 'Segera Tutup'
    },
    {
      id: 3,
      title: 'K3 National Seminar & Safety Expo',
      subtitle: 'HIMA D4 Keselamatan & Kesehatan Kerja',
      imageSrc: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600',
      icon: 'health_and_safety',
      iconColor: 'text-warning',
      tags: ['Kesehatan', 'Staff Divisi'],
      timeRemaining: 'Tutup dalam 1 minggu',
      department: 'Kesehatan',
      roleType: 'Staff Divisi',
      status: 'Mendesak'
    },
    {
      id: 4,
      title: 'Vocational Robotics Competition',
      subtitle: 'HIMA D4 Teknologi Rekayasa Instrumentasi',
      imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600',
      icon: 'precision_manufacturing',
      iconColor: 'text-secondary',
      tags: ['Teknik', 'Volunteer'],
      timeRemaining: 'Tutup dalam 3 minggu',
      department: 'Teknik',
      roleType: 'Volunteer',
      status: 'Buka'
    },
    {
      id: 5,
      title: 'Vocational Tourism Festival',
      subtitle: 'HIMA D4 Destinasi Pariwisata',
      imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600',
      icon: 'travel_explore',
      iconColor: 'text-success',
      tags: ['Bisnis', 'Staff Divisi'],
      timeRemaining: 'Tutup dalam 1 bulan',
      department: 'Bisnis',
      roleType: 'Staff Divisi',
      status: 'Buka'
    },
    {
      id: 6,
      title: 'Animal Health Care & Rabies Camp',
      subtitle: 'HIMA D3 Paramedik Veteriner',
      imageSrc: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600',
      icon: 'pets',
      iconColor: 'text-primary',
      tags: ['Kesehatan', 'Volunteer'],
      timeRemaining: 'Tutup dalam 2 hari',
      department: 'Kesehatan',
      roleType: 'Volunteer',
      status: 'Segera Tutup'
    }
  ];

  const departments = ['Semua Posisi', 'Teknik', 'Bisnis', 'Kesehatan'];
  const roleTypes = ['Semua Tipe', 'BPH', 'Staff Divisi', 'Volunteer', 'Magang'];
  const statuses = ['Semua Status', 'Buka', 'Mendesak', 'Segera Tutup'];
  const sortOptions = ['Terbaru Dahulu', 'Tenggat Waktu', 'Terpopuler'];

  const filteredRecruitments = allRecruitments.filter(item => {
    if (activeDepartment !== 'Semua Posisi' && item.department !== activeDepartment) return false;
    if (activeRoleType !== 'Semua Tipe' && item.roleType !== activeRoleType) return false;
    if (activeStatus !== 'Semua Status' && item.status !== activeStatus) return false;
    return true;
  });

  const sortedRecruitments = [...filteredRecruitments].sort((a, b) => {
    if (sortBy === 'Tenggat Waktu') {
      const getDays = (str) => {
        if (str.includes('hari')) return parseInt(str.match(/\d+/)[0]);
        if (str.includes('minggu')) return parseInt(str.match(/\d+/)[0]) * 7;
        if (str.includes('bulan')) return parseInt(str.match(/\d+/)[0]) * 30;
        return 999;
      };
      return getDays(a.timeRemaining) - getDays(b.timeRemaining);
    }
    if (sortBy === 'Terpopuler') {
      return b.id - a.id;
    }
    return a.id - b.id; // Terbaru Dahulu (default)
  });

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <header className="mb-xl md:mb-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
          {/* Left Content */}
          <div className="z-10 w-full md:w-3/5">
            <Breadcrumb items={[
              { label: 'Eksplorasi', path: '/explore' },
              { label: 'Semua Posisi' }
            ]} />
            
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-md mb-xs">Posisi Terbuka</h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-lg mb-lg">
              Jelajahi dan lamar peluang rekrutmen terbaru<br className="hidden md:inline" /> dari organisasi mahasiswa teratas.
            </p>

            {/* Stat Cards - compact single row */}
            <div className="flex flex-nowrap gap-sm overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">24+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Organisasi</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-warning text-[20px]">work</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">56+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Posisi Terbuka</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">320+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Lamaran</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">98%</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Tingkat Respon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex w-2/5 relative min-h-[240px] z-10 items-center justify-center">
            <img src={heroImage} alt="ID Card illustration" className="w-full max-w-[280px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.12)] rotate-6" />
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Dot grid pattern on the right side */}
          <div className="absolute top-4 right-[30%] w-[120px] h-[100px] bg-[radial-gradient(circle,#3563E9_1px,transparent_1px)] bg-[size:12px_12px] opacity-[0.15]"></div>
          <div className="absolute bottom-8 right-[15%] w-[80px] h-[60px] bg-[radial-gradient(circle,#3563E9_1px,transparent_1px)] bg-[size:12px_12px] opacity-[0.1]"></div>
          
          {/* Yellow accent blob */}
          <div className="absolute top-6 right-[22%] w-14 h-14 bg-warning/80 rounded-full"></div>
          
          {/* Thin geometric circles */}
          <div className="absolute top-1/2 right-[35%] -translate-y-1/2 w-48 h-48 border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/2 right-[33%] -translate-y-1/2 w-56 h-56 border border-dashed border-primary/8 rounded-full"></div>
          
          {/* Small accent squares */}
          <div className="absolute bottom-6 right-[38%] w-3 h-3 bg-primary/20 rounded-sm rotate-45"></div>
          <div className="absolute top-10 right-[42%] w-2 h-2 bg-warning/30 rounded-sm rotate-12"></div>
        </div>
      </header>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-lg lg:gap-xl`}>
        
        {/* Mobile: Simplified Filters Top Bar */}
        {isMobile && (
          <div className="flex flex-wrap gap-sm md:gap-lg items-end bg-surface border border-border p-sm md:p-md rounded-xl">
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Departemen</label>
              <div className="relative">
                <select 
                  value={activeDepartment} 
                  onChange={(e) => setActiveDepartment(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Tipe Peran</label>
              <div className="relative">
                <select 
                  value={activeRoleType} 
                  onChange={(e) => setActiveRoleType(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {roleTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Status</label>
              <div className="relative">
                <select 
                  value={activeStatus} 
                  onChange={(e) => setActiveStatus(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {statuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            
            {(activeDepartment !== 'Semua Posisi' || activeRoleType !== 'Semua Tipe' || activeStatus !== 'Semua Status') && (
              <button 
                onClick={() => {
                  setActiveDepartment('Semua Posisi');
                  setActiveRoleType('Semua Tipe');
                  setActiveStatus('Semua Status');
                }}
                className="text-error font-label-sm hover:underline py-sm px-sm w-full sm:w-auto shrink-0 text-center"
              >
                Hapus Filter
              </button>
            )}
          </div>
        )}

        {/* Desktop: Filters Panel */}
        {!isMobile && (
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-border rounded-xl p-lg sticky top-24 shadow-sm">
              <div className="flex items-center justify-between mb-lg border-b border-border pb-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  <h2 className="font-headline-sm text-headline-sm text-text-primary">Filter</h2>
                </div>
                {(activeDepartment !== 'Semua Posisi' || activeRoleType !== 'Semua Tipe' || activeStatus !== 'Semua Status') && (
                  <button 
                    onClick={() => {
                      setActiveDepartment('Semua Posisi');
                      setActiveRoleType('Semua Tipe');
                      setActiveStatus('Semua Status');
                    }}
                    className="text-primary font-label-sm hover:underline"
                  >
                    Atur Ulang Semua
                  </button>
                )}
              </div>

              {/* Department Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Departemen</h3>
                <div className="flex flex-col gap-xs">
                  {departments.map(dept => (
                    <label key={dept} className="flex items-center gap-sm cursor-pointer group">
                      <input 
                        type="radio" 
                        name="department" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border" 
                        checked={activeDepartment === dept}
                        onChange={() => setActiveDepartment(dept)}
                      />
                      <span className={`font-body-sm text-body-sm group-hover:text-primary transition-colors ${activeDepartment === dept ? 'text-primary font-bold' : 'text-text-primary'}`}>
                        {dept === 'Semua Posisi' ? 'Semua Departemen' : dept}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Role Type Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Tipe Peran</h3>
                <div className="flex flex-wrap gap-xs">
                  {roleTypes.map(type => (
                    <button 
                      key={type}
                      onClick={() => setActiveRoleType(type)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activeRoleType === type ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {type === 'Semua Tipe' ? 'Semua' : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Status</h3>
                <div className="flex flex-wrap gap-xs">
                  {statuses.map(status => (
                    <button 
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activeStatus === status ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {status === 'Semua Status' ? 'Semua' : status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Saved Positions Button */}
              <div className="mt-xl pt-md border-t border-border">
                <button className="w-full py-sm md:py-md bg-white border border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary/5 transition-colors flex items-center justify-center gap-xs shadow-sm">
                  <span className="material-symbols-outlined text-primary">bookmark</span>
                  Posisi Tersimpan
                </button>
              </div>
            </div>
          </aside>
        )}

        {/* Recruitment Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-md relative">
            <p className="font-body-sm text-body-sm text-text-secondary">Menampilkan <span className="font-bold text-text-primary">{filteredRecruitments.length}</span> posisi</p>
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-xs font-label-sm text-label-sm text-text-primary bg-surface border border-border/80 px-md py-1.5 rounded-lg hover:border-primary hover:bg-surface-container-low transition-all cursor-pointer shadow-sm"
              >
                <span className="text-text-secondary">Urutkan:</span>
                <span className="font-bold">{sortBy}</span>
                <span className="material-symbols-outlined text-[16px] text-text-secondary transition-transform duration-200" style={{ transform: isSortOpen ? 'rotate(180deg)' : 'rotate(0)' }}>expand_more</span>
              </button>
              
              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setIsSortOpen(false)} />
                  <div className="absolute right-0 mt-xs w-44 bg-white border border-border rounded-xl shadow-lg py-xs z-30 animate-in fade-in slide-in-from-top-1 duration-200">
                    {sortOptions.map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-md py-sm font-body-sm text-body-sm transition-colors cursor-pointer block ${sortBy === option ? 'bg-primary/8 text-primary font-bold' : 'text-text-primary hover:bg-surface'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {sortedRecruitments.length > 0 ? (
            <>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-xs md:gap-lg">
                {sortedRecruitments.map(item => (
                  <RecruitmentCard key={item.id} {...item} />
                ))}
              </div>
              
              {/* Notification Banner */}
              <div className="mt-2xl bg-gradient-to-r from-primary/5 to-surface-container-low rounded-2xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg border border-primary/10">
                <div className="flex items-center gap-lg text-center md:text-left flex-col md:flex-row">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">send</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary mb-1">Jangan lewatkan kesempatan impian Anda!</h3>
                    <p className="font-body-md text-body-md text-text-secondary">Aktifkan notifikasi dan jadilah yang pertama tahu saat ada posisi baru dibuka.</p>
                  </div>
                </div>
                <button className="px-xl py-md bg-primary text-on-primary font-label-lg text-label-lg rounded-xl hover:bg-primary-hover transition-colors shrink-0 flex items-center gap-sm">
                  <span className="material-symbols-outlined">notifications_active</span>
                  Aktifkan Notifikasi
                </button>
              </div>
            </>
          ) : (
            <div className="bg-surface border border-border border-dashed rounded-xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
              <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">work_off</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-xs">Tidak ada posisi ditemukan</h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-sm">Kami tidak dapat menemukan posisi yang sesuai dengan filter Anda saat ini. Coba sesuaikan atau hapus semua filter.</p>
              <button 
                onClick={() => {
                  setActiveDepartment('Semua Posisi');
                  setActiveRoleType('Semua Tipe');
                  setActiveStatus('Semua Status');
                }}
                className="mt-lg px-xl py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-hover transition-colors"
              >
                Hapus Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRecruitmentsPage;
