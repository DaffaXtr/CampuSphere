import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import { articles, categories, trendingTopics, articleOrganizations } from '../../data/articlesData';

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('Semua Artikel');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [heroSlide, setHeroSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef(null);
  const orgScrollRef = useRef(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const width = heroRef.current.clientWidth;
      heroRef.current.scrollTo({ left: heroSlide * width, behavior: 'smooth' });
    }
  }, [heroSlide]);

  // Filtered articles logic
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'Semua Artikel' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured articles (top 3 by views)
  const featuredArticles = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 3);

  // Trending articles (top 4)
  const trendingArticles = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 4);

  // Popular articles (top 3 by likes)
  const popularArticles = [...articles].sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    return num.toString();
  };

  // Category icons mapping
  const categoryIcons = {
    'Semua Artikel': 'article',
    'Akademik': 'school',
    'Prestasi': 'emoji_events',
    'Karir & Magang': 'work',
    'Beasiswa': 'redeem',
    'Teknologi': 'code',
    'UKM & Organisasi': 'groups',
    'Kreatif & Seni': 'palette',
    'Tips Kampus': 'lightbulb'
  };

  return (
    <div className="py-sm md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <header className="mb-md hidden md:block">
        <Breadcrumb items={[
          { label: 'Article' }
        ]} />
      </header>

      {/* ======= HERO SECTION ======= */}
      <section className="mb-2xl">
        <div className="flex flex-col lg:flex-row gap-lg lg:gap-xl">
          {/* Left: Title & Stats */}
          <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 text-left">
            <h1 className="font-headline-xl text-3xl lg:text-[40px] text-text-primary tracking-tight mt-2 mb-md leading-[1.15]">
              Kabar & Wawasan Kampus
            </h1>
            <p className="text-text-secondary text-sm leading-relaxed mb-lg max-w-sm">
              Temukan berita terbaru, tips mahasiswa, prestasi membanggakan, dan wawasan akademik terpopuler di lingkungan CampuSphere.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-lg mb-lg">
              {[
                { num: '120+', label: 'Artikel' },
                { num: '40+', label: 'Penulis' },
                { num: '15+', label: 'Organisasi Aktif' },
                { num: '12K+', label: 'Mahasiswa Membaca' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-extrabold text-lg md:text-xl text-primary-blue">{stat.num}</p>
                  <p className="text-[9px] md:text-[10px] text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trending Topics */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold text-text-primary flex items-center gap-1">
                Trending Topic
              </span>
              {trendingTopics.map(topic => (
                <span key={topic} className="bg-ultra-light-blue text-primary-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-primary-blue/15">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Featured Article Carousel */}
          <div className="flex-1 relative">
            {/* Desktop: Show as a card with image left + content right */}
            <div className="hidden lg:block">
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm flex flex-row min-h-[320px]">
                {/* Image */}
                <div className="w-1/2 relative overflow-hidden">
                  <img 
                    src={featuredArticles[heroSlide].image} 
                    alt={featuredArticles[heroSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-md left-md bg-primary-blue text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    FEATURED
                  </span>
                </div>
                {/* Content */}
                <div className="w-1/2 p-lg xl:p-xl flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center gap-xs text-text-secondary text-[11px] font-medium mb-sm">
                      <span>{featuredArticles[heroSlide].date}</span>
                      <span>•</span>
                      <span>{featuredArticles[heroSlide].readTime}</span>
                    </div>
                    <h2 className="font-bold text-xl xl:text-2xl text-text-primary leading-tight mb-md line-clamp-2">
                      <Link to={`/article/${featuredArticles[heroSlide].id}`}>
                        {featuredArticles[heroSlide].title}
                      </Link>
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-md">
                      {featuredArticles[heroSlide].excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-md border-t border-border/50">
                    <div className="flex items-center gap-sm">
                      <img 
                        src={featuredArticles[heroSlide].author.avatar} 
                        alt={featuredArticles[heroSlide].author.name}
                        className="w-9 h-9 rounded-full object-cover border border-border"
                      />
                      <div>
                        <h5 className="font-bold text-xs text-text-primary">{featuredArticles[heroSlide].author.name}</h5>
                        <p className="text-[10px] text-text-secondary">{featuredArticles[heroSlide].author.role}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/article/${featuredArticles[heroSlide].id}`}
                      className="bg-primary-blue hover:bg-secondary-blue text-white text-[11px] px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                    >
                      Baca Selengkapnya
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {[0, 1, 2].map(idx => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${heroSlide === idx ? 'bg-primary-blue w-6' : 'bg-border w-2.5'}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="lg:hidden">
              <div 
                ref={heroRef}
                onScroll={(e) => {
                  const width = e.target.clientWidth;
                  if (width > 0) setHeroSlide(Math.round(e.target.scrollLeft / width));
                }}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-2xl"
              >
                {featuredArticles.map((article, idx) => (
                  <div key={idx} className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                      <span className="absolute top-sm left-sm bg-primary-blue text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full">FEATURED</span>
                    </div>
                    <div className="p-md text-left">
                      <div className="flex items-center gap-xs text-text-secondary text-[10px] mb-xs">
                        <span>{article.date}</span><span>•</span><span>{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-base text-text-primary leading-snug line-clamp-2 mb-sm">
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                      </h3>
                      <div className="flex items-center justify-between mt-sm">
                        <div className="flex items-center gap-sm">
                          <img src={article.author.avatar} alt="" className="w-7 h-7 rounded-full object-cover border border-border" />
                          <span className="text-[10px] font-semibold text-text-primary">{article.author.name}</span>
                        </div>
                        <Link to={`/article/${article.id}`} className="bg-primary-blue text-white text-[10px] px-3 py-1.5 rounded-lg font-semibold inline-flex items-center gap-1">
                          Baca <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {[0, 1, 2].map(idx => (
                  <button key={idx} onClick={() => setHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${heroSlide === idx ? 'bg-primary-blue w-5' : 'bg-border w-2'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SEARCH & CATEGORY FILTER ======= */}
      <div className="mb-xl">
        {/* Search Bar */}
        <div className="relative w-full mb-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-[20px] pointer-events-none">search</span>
          <input 
            type="text"
            placeholder="Cari artikel, topik, organisasi, atau penulis..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full bg-white border border-border rounded-xl pl-12 pr-10 py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none shadow-sm"
          />
          {searchQuery && (
            <button onClick={() => { setSearchQuery(''); setCurrentPage(1); }} className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] hover:text-text-primary">close</button>
          )}
        </div>

        {/* Category Pills */}
        {!isMobile ? (
          <div className="flex items-center gap-xs overflow-x-auto whitespace-nowrap hide-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={`px-md py-2 rounded-full font-label-md text-label-sm md:text-label-md transition-all border flex items-center gap-1.5 ${
                  activeCategory === cat 
                    ? 'bg-primary-blue text-white border-primary-blue shadow-sm font-bold' 
                    : 'bg-white text-text-secondary border-border hover:border-primary-blue/50'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{categoryIcons[cat] || 'article'}</span>
                {cat}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex overflow-x-auto gap-xs hide-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={`px-3 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap flex items-center gap-1 ${
                  activeCategory === cat 
                    ? 'bg-primary-blue text-white border-primary-blue' 
                    : 'bg-white text-text-secondary border-border'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">{categoryIcons[cat] || 'article'}</span>
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ======= TRENDING MINGGU INI ======= */}
      {searchQuery === '' && activeCategory === 'Semua Artikel' && (
        <section className="mb-2xl text-left">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-bold text-lg md:text-xl text-text-primary flex items-center gap-1.5">

              Trending Minggu Ini
            </h2>
            <button className="text-primary-blue font-label-md text-xs hover:underline flex items-center gap-0.5">
              Lihat Semua
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-sm md:gap-md">
            {trendingArticles.map((article, idx) => (
              <Link 
                key={article.id}
                to={`/article/${article.id}`}
                className="bg-white border border-border rounded-2xl p-md flex items-center gap-md hover:border-primary-blue/40 transition-all shadow-sm text-left group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${
                  idx === 0 ? 'bg-primary-blue text-white' : 'bg-ultra-light-blue text-primary-blue'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs md:text-sm text-text-primary line-clamp-2 leading-snug">{article.title}</h4>
                  <div className="flex items-center gap-2 mt-1.5 text-text-secondary text-[10px]">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">visibility</span>
                      {formatNumber(article.views)} views
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-border/30">
                  <img src={article.image} alt="" className="w-full h-full object-cover" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ======= ARTIKEL TERPOPULER ======= */}
      {searchQuery === '' && activeCategory === 'Semua Artikel' && (
        <section className="mb-2xl text-left">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-bold text-lg md:text-xl text-text-primary">Artikel Terpopuler</h2>
            <button className="text-primary-blue font-label-md text-xs hover:underline flex items-center gap-0.5">
              Lihat Semua
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
            {popularArticles.map(article => (
              <article 
                key={article.id} 
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group"
              >
                {/* Cover Image */}
                <div className="aspect-video w-full overflow-hidden relative border-b border-border/40">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  <span className="absolute top-sm left-sm bg-white/90 backdrop-blur-sm text-primary-blue text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-primary-blue/20 shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-md md:p-lg flex flex-col flex-1">
                  <div className="flex items-center gap-xs text-[11px] text-text-secondary font-medium mb-xs">
                    <span>{article.date}</span><span>•</span><span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-text-primary leading-snug line-clamp-2 mb-sm">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h3>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-text-secondary text-[11px] mb-md">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">visibility</span>
                      {formatNumber(article.views)}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs text-error">favorite</span>
                      {formatNumber(article.likes)}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">chat_bubble</span>
                      {article.comments || 0}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-sm mt-auto pt-sm border-t border-border/50">
                    <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover border border-border" />
                    <div className="overflow-hidden">
                      <h5 className="font-bold text-xs text-text-primary truncate">{article.author.name}</h5>
                      <p className="text-[10px] text-text-secondary truncate">{article.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ======= SEMUA ARTIKEL (Filtered + Paginated) ======= */}
      <section className="w-full text-left mb-2xl">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-bold text-lg md:text-xl text-text-primary">
            {activeCategory === 'Semua Artikel' ? 'Semua Artikel' : activeCategory}
          </h2>
          <p className="text-text-secondary text-xs">
            Menampilkan <span className="font-bold text-text-primary">{filteredArticles.length}</span> artikel
          </p>
        </div>

        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
            {paginatedArticles.map(article => (
              <article 
                key={article.id} 
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group"
              >
                <div className="aspect-video w-full overflow-hidden relative border-b border-border/40">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  <span className="absolute top-sm left-sm bg-white/90 backdrop-blur-sm text-primary-blue text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-primary-blue/20 shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-md md:p-lg flex flex-col flex-1">
                  <div className="flex items-center gap-xs text-[11px] text-text-secondary font-medium mb-xs">
                    <span>{article.date}</span><span>•</span><span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-text-primary leading-snug line-clamp-2 mb-sm">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm line-clamp-2 mb-md leading-relaxed">{article.excerpt}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-text-secondary text-[11px] mb-md">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">visibility</span>
                      {formatNumber(article.views)}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs text-error">favorite</span>
                      {formatNumber(article.likes)}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">chat_bubble</span>
                      {article.comments || 0}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-sm mt-auto pt-sm border-t border-border/50">
                    <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover border border-border" />
                    <div className="overflow-hidden">
                      <h5 className="font-bold text-xs text-text-primary truncate">{article.author.name}</h5>
                      <p className="text-[10px] text-text-secondary truncate">{article.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-border border-dashed rounded-2xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
            <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">article</span>
            <h3 className="font-bold text-lg text-text-primary mb-xs">Artikel tidak ditemukan</h3>
            <p className="text-text-secondary text-sm max-w-sm">Kami tidak menemukan artikel yang cocok dengan filter atau kata kunci pencarian Anda.</p>
            <button 
              onClick={() => { setActiveCategory('Semua Artikel'); setSearchQuery(''); setCurrentPage(1); }}
              className="mt-lg px-xl py-2.5 bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm rounded-xl transition-all shadow-sm"
            >
              Bersihkan Filter
            </button>
          </div>
        )}

        {/* Pagination */}
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

        {/* Load More Button - Mobile */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-lg md:hidden">
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-white border border-border hover:border-primary-blue text-text-primary px-lg py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
            >
              Muat Lebih Banyak Artikel
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>
        )}
      </section>

      {/* ======= ARTIKEL DARI ORGANISASI ======= */}
      {searchQuery === '' && activeCategory === 'Semua Artikel' && (
        <section className="mb-2xl text-left">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-bold text-lg md:text-xl text-text-primary">Artikel dari Organisasi</h2>
            <button className="text-primary-blue font-label-md text-xs hover:underline flex items-center gap-0.5">
              Lihat Semua Organisasi
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="relative group">
            <div ref={orgScrollRef} className="flex gap-md overflow-x-auto pb-sm pt-sm pl-sm pr-sm hide-scrollbar scroll-smooth">
              {articleOrganizations.map(org => (
                <button
                  key={org.name}
                  className="flex items-center gap-md p-md rounded-2xl border border-border hover:border-primary-blue/40 transition-all min-w-[200px] shrink-0 text-left bg-white shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border bg-ultra-light-blue text-primary-blue border-border/40">
                    {org.logoText}
                  </div>
                  <div className="truncate">
                    <p className="font-bold text-sm text-text-primary truncate flex items-center gap-1">
                      {org.name}
                      <span className="material-symbols-outlined text-[14px] text-primary-blue">verified</span>
                    </p>
                    <p className="text-[11px] text-text-secondary">{org.articleCount}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Scroll buttons */}
            <button 
              onClick={() => orgScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white border border-border/50 rounded-full hidden items-center justify-center shadow-md text-primary-blue hover:bg-surface-container-low hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10 md:flex"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={() => orgScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white border border-border/50 rounded-full hidden items-center justify-center shadow-md text-primary-blue hover:bg-surface-container-low hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10 md:flex"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      )}

      {/* ======= NEWSLETTER CTA ======= */}
      {searchQuery === '' && activeCategory === 'Semua Artikel' && (
        <section className="bg-ultra-light-blue border border-primary-blue/15 rounded-2xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg mb-2xl">
          <div className="flex items-center gap-md text-left">
            <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary-blue text-2xl">mail</span>
            </div>
            <div>
              <p className="text-[10px] text-primary-blue font-bold uppercase tracking-wider mb-0.5">Tetap Terhubung</p>
              <h3 className="font-bold text-base md:text-lg text-text-primary">Dapatkan Artikel Terbaru</h3>
              <p className="text-text-secondary text-xs mt-0.5 max-w-md">Jangan lewatkan informasi penting dan inspirasi terbaru dari kampus.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
            <input 
              type="email"
              placeholder="Masukkan email kamu"
              className="flex-1 min-w-0 md:w-[260px] bg-white border border-border rounded-xl px-3 md:px-md py-2.5 text-xs md:text-sm focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            />
            <button className="bg-primary-blue hover:bg-secondary-blue text-white px-4 md:px-lg py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap flex-shrink-0">
              Subscribe
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
