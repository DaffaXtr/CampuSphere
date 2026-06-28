import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import MerchCard from '../../components/merchandise/MerchCard';
import toteBagHero from '../../assets/tote-bag-hero.png';
import ticketHero from '../../assets/ticket-hero.png';
import bookHero from '../../assets/book-hero.png';
import { allMerch as allMerchData, merchCategories, merchPriceRanges, merchStores } from '../../data/merchandiseData';

const MerchandisePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carousel State for Mobile
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef(null);

  // Store Scroll Ref
  const storeScrollRef = React.useRef(null);
  const handleScrollRight = () => {
    if (storeScrollRef.current) {
      storeScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const handleScrollLeft = () => {
    if (storeScrollRef.current) {
      storeScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    if (width > 0) {
      const newSlide = Math.round(scrollLeft / width);
      setActiveSlide(newSlide);
    }
  };

  const [activeCategory, setActiveCategory] = useState('All Products');
  const [activePriceRange, setActivePriceRange] = useState('Any Price');
  const [activeSort, setActiveSort] = useState('Newest Arrivals');
  const [activeStore, setActiveStore] = useState('Semua Store');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 10 items per page for 2 rows on desktop
  
  useEffect(() => {
    Promise.resolve().then(() => setCurrentPage(1));
  }, [activeCategory, activePriceRange, activeSort, activeStore]);

  const categories = merchCategories;
  const priceRanges = merchPriceRanges;
  const stores = merchStores;
  const allMerch = allMerchData;



  let filteredMerch = allMerch.filter(item => {
    // Store filter
    if (activeStore !== 'Semua Store') {
      if (!item.storeName.includes(activeStore)) return false;
    }

    // Category filter
    if (activeCategory !== 'All Products' && item.category !== activeCategory) return false;
    
    // Price Filter
    if (activePriceRange === 'Under Rp 50.000' && item.numericPrice >= 50000) return false;
    if (activePriceRange === 'Rp 50.000 - Rp 100.000' && (item.numericPrice < 50000 || item.numericPrice > 100000)) return false;
    if (activePriceRange === 'Over Rp 100.000' && item.numericPrice <= 100000) return false;

    return true;
  });

  // Sorting
  if (activeSort === 'Price (Low to High)') {
    filteredMerch.sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (activeSort === 'Price (High to Low)') {
    filteredMerch.sort((a, b) => b.numericPrice - a.numericPrice);
  } else if (activeSort === 'Highest Rated') {
    filteredMerch.sort((a, b) => b.ratingValue - a.ratingValue);
  }

  const totalPages = Math.ceil(filteredMerch.length / itemsPerPage);
  const currentMerch = filteredMerch.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <header className="mb-md hidden md:block text-left">
        <Breadcrumb items={[
          { label: 'Merchandise' }
        ]} />
      </header>

      {/* Desktop: Hero Grid Section */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-md md:gap-lg mb-2xl">
        {/* Left Large Card: Tote Bag */}
        <div 
          style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #FEF3C7 100%)' }}
          className="md:col-span-2 border border-border rounded-3xl p-lg flex flex-col md:flex-row justify-between items-center md:items-stretch overflow-hidden relative min-h-[380px] group shadow-sm text-left"
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-4 left-[55%] w-[100px] h-[80px] bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:10px_10px] opacity-[0.12]"></div>
            <div className="absolute bottom-[-60px] right-[-40px] w-72 h-52 bg-primary-blue/8 rounded-full blur-2xl"></div>
            <div className="absolute top-6 right-[45%] w-5 h-5 rounded-full bg-primary-yellow/60"></div>
            <div className="absolute top-1/2 left-[52%] -translate-y-1/2 w-40 h-40 border border-primary-blue/10 rounded-full"></div>
          </div>
          
          <div className="flex flex-col justify-between flex-1 relative z-10 w-full h-full gap-md">
            <div>
              {/* Best Seller Badge with Yellow accent */}
              <div className="flex items-center gap-2 mb-sm">
                <span className="bg-primary-yellow text-text-primary px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] fill-current">star</span>
                  Best Seller
                </span>
                <span className="text-primary-blue font-bold text-[10px] md:text-xs tracking-wider uppercase">NEW MERCHANDISE</span>
              </div>
              
              <h2 className="font-headline-xl text-3xl md:text-[38px] font-extrabold text-text-primary mt-xs mb-sm leading-tight max-w-[340px]">
                Tote Bag CampuSphere
              </h2>
              <p className="text-text-secondary text-sm max-w-[280px] mb-md leading-relaxed">
                Bawa gaya, tunjukkan identitas kampusmu di setiap langkah.
              </p>

              {/* USP Campus Badges */}
              <div className="flex flex-wrap items-center gap-x-md gap-y-sm text-xs text-text-primary font-medium mt-md mb-lg">
                <div className="flex items-center gap-1 bg-white/70 px-2 py-1 rounded-lg border border-border/40">
                  <span className="material-symbols-outlined text-orange-500 text-[16px] fill-orange-500">local_fire_department</span>
                  <span><strong>230+</strong> Terjual</span>
                </div>
                <div className="flex items-center gap-1 bg-white/70 px-2 py-1 rounded-lg border border-border/40">
                  <span className="material-symbols-outlined text-primary-blue text-[16px]">local_shipping</span>
                  <span>Gratis Ongkir Kampus</span>
                </div>
                <div className="flex items-center gap-1 bg-white/70 px-2 py-1 rounded-lg border border-border/40">
                  <span className="material-symbols-outlined text-primary-blue text-[16px]">school</span>
                  <span>Official Merchandise</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-sm flex flex-col gap-md">
              <div className="flex items-baseline gap-2">
                <span className="text-text-secondary text-xs line-through">Rp 60.000</span>
                <span className="text-primary-blue font-extrabold text-2xl md:text-3xl">Rp 45.000</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-md">
                <Link 
                  to="/merchandise/3" 
                  className="bg-primary-blue hover:bg-secondary-blue text-white px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 inline-flex items-center gap-2 shadow-sm whitespace-nowrap flex-shrink-0"
                >
                  Lihat Produk
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>

                {/* Avatar Stack for Social Proof */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Student 1" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Student 2" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Student 3" />
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-primary-yellow text-text-primary text-[9px] font-extrabold">+120</div>
                  </div>
                  <span className="text-xs text-text-secondary font-medium">
                    Bergabung dengan <strong>1.200+</strong> mahasiswa
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[260px] lg:w-[320px] h-[280px] md:h-auto flex items-center justify-center relative mt-md md:mt-0 flex-shrink-0">
            <img 
              src={toteBagHero} 
              alt="Tote Bag CampuSphere" 
              className="max-w-full max-h-[105%] object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right Stack: Ticket & Module */}
        <div className="flex flex-col gap-md md:gap-lg">
          {/* Top Right Card: Ticket */}
          <div className="flex-1 bg-pale-yellow/50 border border-border rounded-2xl p-md flex flex-row justify-between items-center overflow-hidden relative min-h-[135px] group shadow-sm text-left">
            {/* Decorative shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-secondary-yellow/15 rounded-full"></div>
              <div className="absolute bottom-3 left-3 w-[50px] h-[40px] bg-[radial-gradient(circle,#F59E0B_0.8px,transparent_0.8px)] bg-[size:8px_8px] opacity-[0.12]"></div>
              <div className="absolute top-3 right-[45%] w-2 h-2 bg-secondary-yellow/20 rounded-sm rotate-45"></div>
            </div>

            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-secondary-yellow font-bold text-[9px] md:text-[10px] tracking-wider uppercase">TIKET EVENT</span>
                <h3 className="font-bold text-sm md:text-base text-text-primary mt-xs leading-snug">
                  Seminar Digital Marketing 2024
                </h3>
                <p className="text-text-secondary text-[11px] mt-0.5 line-clamp-1">
                  Dapatkan insight terbaru dari para ahli!
                </p>
              </div>
              <div className="mt-3 lg:mt-4">
                <span className="text-secondary-yellow font-extrabold text-sm md:text-base block mb-2">Rp 35.000</span>
                <Link 
                  to="/event/1" 
                  className="bg-primary-yellow hover:bg-secondary-yellow text-text-primary text-[11px] px-4 py-1.5 rounded-lg font-bold inline-block transition-colors"
                >
                  Beli Tiket
                </Link>
              </div>
            </div>
            <div className="w-[110px] md:w-[130px] lg:w-[145px] h-full flex items-center justify-center flex-shrink-0">
              <img 
                src={ticketHero} 
                alt="Ticket Seminar" 
                className="max-w-full max-h-full object-contain drop-shadow-md relative z-10"
              />
            </div>
          </div>

          {/* Bottom Right Card: Book */}
          <div className="flex-1 bg-ultra-light-blue border border-border rounded-2xl p-md flex flex-row justify-between items-center overflow-hidden relative min-h-[135px] group shadow-sm text-left">
            {/* Decorative shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute -bottom-8 -left-8 w-28 h-28 border border-primary-blue/10 rounded-full"></div>
              <div className="absolute top-4 right-[40%] w-[45px] h-[35px] bg-[radial-gradient(circle,#2563EB_0.8px,transparent_0.8px)] bg-[size:8px_8px] opacity-[0.1]"></div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-primary-blue/15 rounded-sm rotate-45"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-16 h-16 border border-dashed border-primary-blue/8 rounded-full"></div>
            </div>

            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-blue font-bold text-[9px] md:text-[10px] tracking-wider uppercase">MODUL PRAKTIKUM</span>
                <h3 className="font-bold text-sm md:text-base text-text-primary mt-xs leading-snug">
                  Manajemen Keuangan
                </h3>
              </div>
              <div className="mt-3 lg:mt-4">
                <span className="text-primary-blue font-extrabold text-sm md:text-base block mb-2">Rp 75.000</span>
                <Link 
                  to="/merchandise/8" 
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block transition-colors"
                >
                  Lihat Modul
                </Link>
              </div>
            </div>
            <div className="w-[90px] md:w-[100px] lg:w-[125px] h-full flex items-center justify-center flex-shrink-0">
              <img 
                src={bookHero} 
                alt="Book Modul" 
                className="max-w-full max-h-full object-contain drop-shadow-md relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Hero Carousel */}
      <div className="md:hidden mb-lg relative">
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar w-full rounded-3xl border border-border shadow-sm"
        >
          {/* Slide 1: Tote Bag */}
          <div 
            style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #FEF3C7 100%)' }}
            className="snap-always snap-center min-w-full w-full flex-shrink-0 p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left"
          >
            <div className="absolute top-4 right-12 w-4 h-4 rounded-full bg-soft-yellow/80 pointer-events-none"></div>
            
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-blue font-bold text-[9px] tracking-wider uppercase">NEW MERCHANDISE</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[150px]">
                  Tote Bag Campusphere
                </h2>
                <p className="text-text-secondary text-[11px] leading-snug mt-1 max-w-[150px]">
                  Bawa gaya, tunjukkan identitas kampusmu.
                </p>
              </div>
              <div className="mt-4">
                <span className="text-primary-blue font-bold text-sm block mb-1">Rp 45.000</span>
                <Link 
                  to="/merchandise/3" 
                  className="bg-primary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block"
                >
                  Lihat Produk
                </Link>
              </div>
            </div>
            
            <div className="w-[120px] h-[150px] flex items-center justify-center flex-shrink-0 relative">
              <img 
                src={toteBagHero} 
                alt="Tote Bag CampuSphere" 
                className="max-w-full max-h-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Slide 2: Ticket */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-pale-yellow/50 p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-yellow font-bold text-[9px] tracking-wider uppercase">TIKET EVENT</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[150px]">
                  Seminar Digital Marketing 2024
                </h2>
                <p className="text-text-secondary text-[11px] leading-snug mt-1 max-w-[150px]">
                  Dapatkan insight terbaru dari para ahli!
                </p>
              </div>
              <div className="mt-4">
                <span className="text-primary-yellow font-bold text-sm block mb-1">Rp 35.000</span>
                <Link 
                  to="/event/1" 
                  className="bg-primary-yellow hover:bg-secondary-yellow text-text-primary text-[11px] px-4 py-1.5 rounded-lg font-bold inline-block transition-colors"
                >
                  Beli Tiket
                </Link>
              </div>
            </div>
            
            <div className="w-[125px] h-[150px] flex items-center justify-center flex-shrink-0 relative">
              <img 
                src={ticketHero} 
                alt="Ticket Seminar" 
                className="max-w-full max-h-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Slide 3: Book Modul */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-ultra-light-blue p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-blue font-bold text-[9px] tracking-wider uppercase">MODUL PRAKTIKUM</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[150px]">
                  Manajemen Keuangan
                </h2>
                <p className="text-text-secondary text-[11px] leading-snug mt-1 max-w-[150px]">
                  Bahan ajar perkuliahan resmi fakultas.
                </p>
              </div>
              <div className="mt-4">
                <span className="text-primary-blue font-bold text-sm block mb-1">Rp 75.000</span>
                <Link 
                  to="/merchandise/8" 
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block transition-colors"
                >
                  Lihat Modul
                </Link>
              </div>
            </div>
            
            <div className="w-[100px] h-[150px] flex items-center justify-center flex-shrink-0 relative">
              <img 
                src={bookHero} 
                alt="Book Modul" 
                className="max-w-full max-h-full object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                if (carouselRef.current) {
                  const width = carouselRef.current.clientWidth;
                  carouselRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
                }
                setActiveSlide(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-primary-blue w-6' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>

      {/* Official Store Section */}
      <section className="mb-2xl text-left">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-bold text-lg md:text-xl text-text-primary flex items-center gap-2">
            Official Store
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue text-[10px] font-bold border border-primary-blue/20">
              Verified Sellers
            </span>
          </h2>
          <button 
            onClick={() => setActiveStore('Semua Store')}
            className="text-primary-blue font-label-md text-xs hover:underline flex items-center gap-0.5"
          >
            Lihat Semua Store
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {/* Store Cards Horizontal Scroll */}
        <div className="relative group">
          <div ref={storeScrollRef} className="flex gap-md overflow-x-auto pb-sm pt-sm pl-sm pr-sm hide-scrollbar scroll-smooth">
            {stores.map(store => {
            const isActive = activeStore === store.name;
            return (
              <button
                key={store.name}
                onClick={() => setActiveStore(store.name)}
                className={`flex items-center gap-md p-md rounded-2xl border transition-all duration-300 min-w-[200px] shrink-0 text-left bg-white shadow-sm ${
                  isActive 
                    ? 'border-primary-blue ring-1 ring-primary-blue bg-surface-container-low shadow' 
                    : 'border-border hover:border-primary-blue/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border transition-all duration-300 ${
                  isActive ? 'bg-primary-blue text-white border-primary-blue shadow-inner' : 'bg-surface-container-high text-primary-blue border-border/40'
                }`}>
                  {store.logoText}
                </div>
                <div className="truncate">
                  <p className="font-bold text-sm text-text-primary truncate flex items-center gap-1">
                    {store.name === 'Semua Store' ? store.name : `${store.name}`}
                    {store.name !== 'Semua Store' && (
                      <span className="material-symbols-outlined text-[14px] text-primary-blue fill-primary-blue">verified</span>
                    )}
                  </p>
                  <p className="text-[11px] text-text-secondary">{store.prodCount}</p>
                </div>
              </button>
            );
          })}
          </div>
          {/* Scroll Left Button */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white border border-border/50 rounded-full hidden items-center justify-center shadow-md text-primary-blue hover:bg-surface-container-low hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10 md:flex"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {/* Scroll Right Button */}
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white border border-border/50 rounded-full hidden items-center justify-center shadow-md text-primary-blue hover:bg-surface-container-low hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10 md:flex"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Mobile: Filter Select boxes */}
      <div className="grid grid-cols-2 gap-sm mb-lg md:hidden">
        {/* Organization Filter */}
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-secondary text-[18px] pointer-events-none">tune</span>
          <select 
            value={activeStore}
            onChange={(e) => setActiveStore(e.target.value)}
            className="w-full appearance-none bg-white border border-border rounded-xl pl-9 pr-8 py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none cursor-pointer shadow-sm"
          >
            <option value="Semua Store">Semua Organisasi</option>
            <option value="HIMTI">HIMTI</option>
            <option value="BEM FV">BEM FV</option>
            <option value="HIMA Akuntansi">HIMA Akuntansi</option>
            <option value="UKM Creative">UKM Creative</option>
            <option value="HIMA Manajemen">HIMA Manajemen</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 text-text-secondary text-[18px] pointer-events-none">expand_more</span>
        </div>

        {/* Sort Filter */}
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-secondary text-[18px] pointer-events-none">swap_vert</span>
          <select 
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="w-full appearance-none bg-white border border-border rounded-xl pl-9 pr-8 py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none cursor-pointer shadow-sm"
          >
            <option value="Newest Arrivals">Terbaru</option>
            <option value="Highest Rated">Terlaris</option>
            <option value="Price (Low to High)">Harga Terendah</option>
            <option value="Price (High to Low)">Harga Tertinggi</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 text-text-secondary text-[18px] pointer-events-none">expand_more</span>
        </div>
      </div>

      {/* Desktop: Horizontal Filter Bar */}
      <div className="hidden md:flex flex-col gap-md lg:flex-row lg:items-center justify-between border-b border-border pb-md mb-xl text-left">
        {/* Categories Pills */}
        <div className="flex items-center gap-xs overflow-x-auto whitespace-nowrap hide-scrollbar py-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-md py-2 rounded-full font-label-md text-label-sm md:text-label-md transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary-blue text-white border-primary-blue shadow-sm font-bold' 
                  : 'bg-white text-text-secondary border-border hover:border-primary-blue/50'
              }`}
            >
              {cat === 'All Products' ? 'Semua Produk' : cat}
            </button>
          ))}
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-sm">
          {/* Organization Dropdown */}
          <div className="relative">
            <select 
              value={activeStore}
              onChange={(e) => setActiveStore(e.target.value)}
              className="appearance-none bg-white border border-border rounded-xl pl-md pr-lg py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none cursor-pointer"
            >
              <option value="Semua Store">Semua Organisasi</option>
              <option value="HIMTI">HIMTI</option>
              <option value="BEM FV">BEM FV</option>
              <option value="HIMA Akuntansi">HIMA Akuntansi</option>
              <option value="UKM Creative">UKM Creative</option>
              <option value="HIMA Manajemen">HIMA Manajemen</option>
            </select>
            <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
          </div>

          {/* Price dropdown */}
          <div className="relative">
            <select 
              value={activePriceRange}
              onChange={(e) => setActivePriceRange(e.target.value)}
              className="appearance-none bg-white border border-border rounded-xl pl-md pr-lg py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none cursor-pointer"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>
                  Harga: {range === 'Any Price' ? 'Semua' : range}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
          </div>

          {/* Sorting Dropdown */}
          <div className="relative">
            <select 
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="appearance-none bg-white border border-border rounded-xl pl-md pr-lg py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none cursor-pointer"
            >
              <option value="Newest Arrivals">Terbaru</option>
              <option value="Highest Rated">Terlaris</option>
              <option value="Price (Low to High)">Harga Terendah</option>
              <option value="Price (High to Low)">Harga Tertinggi</option>
            </select>
            <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="w-full text-left">
        <h2 className="font-bold text-lg md:text-xl text-text-primary mb-sm flex items-center gap-1.5">
          Produk Pilihan 
          <span className="material-symbols-outlined text-primary-blue text-[20px]">local_activity</span>
        </h2>
        <p className="text-text-secondary text-xs mb-lg">Produk berkualitas dari organisasi mahasiswa</p>

        {currentMerch.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-sm md:gap-lg">
            {currentMerch.map(item => (
              <MerchCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-border border-dashed rounded-3xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
            <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">inventory_2</span>
            <h3 className="font-bold text-lg text-text-primary mb-xs">Tidak ada produk ditemukan</h3>
            <p className="font-body-md text-body-md text-text-secondary max-w-sm">
              Kami tidak dapat menemukan produk yang sesuai dengan filter saat ini. Coba ubah opsi pencarian Anda.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('All Products');
                setActivePriceRange('Any Price');
                setActiveStore('Semua Store');
              }}
              className="mt-lg px-xl py-2.5 bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm rounded-xl transition-all shadow-sm"
            >
              Reset Filter
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-xl">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${currentPage === 1 ? 'border-border/50 text-border bg-surface-container-low cursor-not-allowed' : 'border-border hover:border-primary-blue hover:text-primary-blue bg-white text-text-primary shadow-sm'}`}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border transition-all ${currentPage === page ? 'bg-primary-blue border-primary-blue text-white shadow-sm' : 'bg-white border-border hover:border-primary-blue text-text-secondary hover:text-primary-blue'}`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${currentPage === totalPages ? 'border-border/50 text-border bg-surface-container-low cursor-not-allowed' : 'border-border hover:border-primary-blue hover:text-primary-blue bg-white text-text-primary shadow-sm'}`}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
      </div>

      {/* Jaminan Belanja Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-md md:gap-lg border-t border-border/40 pt-2xl mt-3xl mb-xl text-left">
        <div className="flex items-start gap-md">
          <span className="material-symbols-outlined text-primary-blue text-[32px] shrink-0 bg-primary-blue/10 p-sm rounded-xl">shield</span>
          <div>
            <h4 className="font-bold text-sm text-text-primary">Aman & Terpercaya</h4>
            <p className="text-xs text-text-secondary mt-1">Semua transaksi dijamin aman dan terlindungi.</p>
          </div>
        </div>
        <div className="flex items-start gap-md">
          <span className="material-symbols-outlined text-primary-blue text-[32px] shrink-0 bg-primary-blue/10 p-sm rounded-xl">local_shipping</span>
          <div>
            <h4 className="font-bold text-sm text-text-primary">Gratis Ongkir</h4>
            <p className="text-xs text-text-secondary mt-1">Gratis ongkir khusus area kampus.</p>
          </div>
        </div>
        <div className="flex items-start gap-md">
          <span className="material-symbols-outlined text-primary-blue text-[32px] shrink-0 bg-primary-blue/10 p-sm rounded-xl">volunteer_activism</span>
          <div>
            <h4 className="font-bold text-sm text-text-primary">Dukung Organisasi</h4>
            <p className="text-xs text-text-secondary mt-1">Setiap pembelian membantu kegiatan mahasiswa.</p>
          </div>
        </div>
        <div className="flex items-start gap-md">
          <span className="material-symbols-outlined text-primary-blue text-[32px] shrink-0 bg-primary-blue/10 p-sm rounded-xl">workspace_premium</span>
          <div>
            <h4 className="font-bold text-sm text-text-primary">Produk Berkualitas</h4>
            <p className="text-xs text-text-secondary mt-1">Produk original dengan kualitas terbaik.</p>
          </div>
        </div>
      </section>

      {/* Statistik Branding Banner */}
      <section className="bg-primary-blue text-white rounded-3xl p-lg md:p-xl grid grid-cols-2 md:grid-cols-4 gap-lg mb-2xl text-center shadow-sm">
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[32px] mb-xs opacity-90">groups</span>
          <span className="text-2xl md:text-3xl font-extrabold">15+</span>
          <span className="text-[11px] md:text-xs text-white/80 font-medium mt-1 uppercase tracking-wider">Organisasi Bergabung</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[32px] mb-xs opacity-90">inventory_2</span>
          <span className="text-2xl md:text-3xl font-extrabold">200+</span>
          <span className="text-[11px] md:text-xs text-white/80 font-medium mt-1 uppercase tracking-wider">Produk Tersedia</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[32px] mb-xs opacity-90">school</span>
          <span className="text-2xl md:text-3xl font-extrabold">3.000+</span>
          <span className="text-[11px] md:text-xs text-white/80 font-medium mt-1 uppercase tracking-wider">Mahasiswa Aktif</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[32px] mb-xs opacity-90">trending_up</span>
          <span className="text-2xl md:text-3xl font-extrabold">500+</span>
          <span className="text-[11px] md:text-xs text-white/80 font-medium mt-1 uppercase tracking-wider">Transaksi Bulan Ini</span>
        </div>
      </section>
    </div>
  );
};

export default MerchandisePage;
