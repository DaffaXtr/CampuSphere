import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import { articles, categories } from './articleData';

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('Semua Artikel');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtered articles logic
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'Semua Artikel' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured article is the first one
  const featuredArticle = articles[0];

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <header className="mb-md hidden md:block">
        <Breadcrumb items={[
          { label: 'Article' }
        ]} />
      </header>

      {/* Page Title & Subtitle */}
      <div className="mb-lg md:mb-xl text-left">
        <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
          Kabar & Wawasan Kampus
        </h1>
        <p className="font-body-md text-body-md text-text-secondary max-w-2xl">
          Temukan berita terbaru, tips mahasiswa, prestasi membanggakan, dan wawasan akademik terpopuler di lingkungan CampuSphere.
        </p>
      </div>

      {/* Featured Article Section */}
      {featuredArticle && searchQuery === '' && activeCategory === 'Semua Artikel' && (
        <div className="mb-2xl">
          <h2 className="font-bold text-lg md:text-xl text-text-primary mb-md text-left">Artikel Pilihan</h2>
          <div 
            style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F4FAF4 60%, #FCE4EC 100%)' }}
            className="border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row group"
          >
            {/* Image side */}
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[300px] overflow-hidden relative">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
              <span className="absolute top-md left-md bg-primary text-white text-xs font-bold px-sm py-1 rounded-full shadow-sm">
                {featuredArticle.category}
              </span>
            </div>

            {/* Content side */}
            <div className="w-full lg:w-1/2 p-lg md:p-xl flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-xs text-text-secondary font-label-sm text-xs mb-sm">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h3 className="font-headline-xl text-2xl md:text-3xl text-text-primary mb-md leading-tight group-hover:text-primary transition-colors">
                  <Link to={`/article/${featuredArticle.id}`}>{featuredArticle.title}</Link>
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-lg line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-md border-t border-border/60">
                <div className="flex items-center gap-sm">
                  <img 
                    src={featuredArticle.author.avatar} 
                    alt={featuredArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-border"
                  />
                  <div>
                    <h5 className="font-bold text-sm text-text-primary">{featuredArticle.author.name}</h5>
                    <p className="text-xs text-text-secondary">{featuredArticle.author.role}</p>
                  </div>
                </div>
                
                <Link 
                  to={`/article/${featuredArticle.id}`}
                  className="bg-primary hover:bg-primary-hover text-white text-xs md:text-sm px-lg py-2.5 rounded-lg font-label-md transition-all active:scale-95 flex items-center gap-1.5"
                >
                  Baca Selengkapnya
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar Section */}
      <div className="flex flex-col gap-md lg:flex-row lg:items-center justify-between border-b border-border pb-md mb-xl">
        {/* Categories (Pills) for Desktop */}
        {!isMobile ? (
          <div className="flex items-center gap-xs overflow-x-auto whitespace-nowrap hide-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-md py-2 rounded-full font-label-md text-label-sm md:text-label-md transition-all border ${
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-sm font-bold' 
                    : 'bg-white text-text-secondary border-border hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        ) : (
          /* Mobile Dropdown Category */
          <div className="relative w-full flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-text-secondary text-[18px] pointer-events-none">tune</span>
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-border rounded-xl pl-9 pr-8 py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 text-text-secondary text-[18px] pointer-events-none">expand_more</span>
          </div>
        )}

        {/* Search Input */}
        <div className="relative w-full lg:w-80 flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-secondary text-[18px] pointer-events-none">search</span>
          <input 
            type="text"
            placeholder="Cari judul atau topik artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-border rounded-xl pl-9 pr-8 py-2 md:py-2.5 font-label-md text-label-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="material-symbols-outlined absolute right-3 text-text-secondary text-[18px] hover:text-text-primary"
            >
              close
            </button>
          )}
        </div>
      </div>

      {/* Article Grid List */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-bold text-lg md:text-xl text-text-primary text-left">
            {activeCategory === 'Semua Artikel' ? 'Semua Artikel' : activeCategory}
          </h2>
          <p className="font-body-sm text-body-sm text-text-secondary">
            Menampilkan <span className="font-bold text-text-primary">{filteredArticles.length}</span> artikel
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
            {filteredArticles.map(article => (
              <article 
                key={article.id} 
                className="bg-white border border-border hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group"
              >
                {/* Cover image wrapper */}
                <div className="aspect-video w-full overflow-hidden relative border-b border-border/40">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <span className="absolute top-sm left-sm bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-primary/20 shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-md md:p-lg flex flex-col flex-1">
                  <div className="flex items-center gap-xs text-[11px] text-text-secondary font-label-sm mb-xs">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base md:text-lg text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-sm">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h3>

                  <p className="text-text-secondary text-xs md:text-sm line-clamp-3 mb-md leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Author footer */}
                  <div className="flex items-center gap-sm mt-auto pt-sm border-t border-border/50">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-border"
                    />
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
          <div className="bg-surface border border-border border-dashed rounded-xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
            <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">article_off</span>
            <h3 className="font-headline-md text-headline-md text-text-primary mb-xs">Artikel tidak ditemukan</h3>
            <p className="font-body-md text-body-md text-text-secondary max-w-sm">Kami tidak menemukan artikel yang cocok dengan filter atau kata kunci pencarian Anda. Coba kata kunci lain atau bersihkan filter.</p>
            <button 
              onClick={() => {
                setActiveCategory('Semua Artikel');
                setSearchQuery('');
              }}
              className="mt-lg px-xl py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-hover transition-colors"
            >
              Bersihkan Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
