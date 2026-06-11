import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import MerchCard from '../../components/merchandise/MerchCard';
import bannerImg from '../../assets/banner-perkusi-fix.png';
import bannerVokasiImg from '../../assets/banner-vokasi.png';

const MerchandisePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Banner Carousel State
  const banners = [bannerImg, bannerVokasiImg];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 4000); // Auto scroll every 4 seconds
    return () => clearInterval(interval);
  }, [banners.length]);

  const [activeCategory, setActiveCategory] = useState('All Products');
  const [activePriceRange, setActivePriceRange] = useState('Any Price');
  const [activeSort, setActiveSort] = useState('Newest Arrivals');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All Products', 'Apparel', 'Accessories', 'Stationery'];
  const priceRanges = ['Any Price', 'Under Rp 50.000', 'Rp 50.000 - Rp 100.000', 'Over Rp 100.000'];
  const sortOptions = ['Newest Arrivals', 'Price (Low to High)', 'Price (High to Low)', 'Highest Rated'];

  // Dummy merch data
  const allMerch = [
    {
      id: 1,
      name: 'Official Campus Hoodie - Navy Blue',
      category: 'Apparel',
      price: 'Rp 150.000',
      numericPrice: 150000,
      imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
      rating: '4.8 (120 reviews)'
    },
    {
      id: 2,
      name: 'Minimalist Student T-Shirt',
      category: 'Apparel',
      price: 'Rp 65.000',
      numericPrice: 65000,
      imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
      rating: '4.5 (85 reviews)'
    },
    {
      id: 3,
      name: 'Premium Canvas Tote Bag',
      category: 'Accessories',
      price: 'Rp 45.000',
      numericPrice: 45000,
      imageSrc: 'https://i.pinimg.com/webp/1200x/cf/8c/3a/cf8c3a3ac4a496028fc61a4d92fd8d1c.webp',
      rating: '4.9 (200 reviews)'
    },
    {
      id: 4,
      name: 'Campus Exclusive Tumbler',
      category: 'Accessories',
      price: 'Rp 85.000',
      numericPrice: 85000,
      imageSrc: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
      rating: '4.7 (150 reviews)'
    },
    {
      id: 5,
      name: 'A5 Spiral Notebook - Edition 2026',
      category: 'Stationery',
      price: 'Rp 25.000',
      numericPrice: 25000,
      imageSrc: 'https://i.pinimg.com/webp/736x/f6/1f/0c/f61f0cb549b425e15036b5a04c101e5b.webp',
      rating: '4.6 (50 reviews)'
    },
    {
      id: 6,
      name: 'Classic Enamel Pin Set',
      category: 'Accessories',
      price: 'Rp 35.000',
      numericPrice: 35000,
      imageSrc: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=600&auto=format&fit=crop',
      rating: '4.9 (90 reviews)'
    },
    {
      id: 7,
      name: 'Varsity Jacket - Premium Quality',
      category: 'Apparel',
      price: 'Rp 250.000',
      numericPrice: 250000,
      imageSrc: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=600&auto=format&fit=crop',
      rating: '4.9 (45 reviews)'
    },
    {
      id: 8,
      name: 'Student Planner 2026-2027',
      category: 'Stationery',
      price: 'Rp 55.000',
      numericPrice: 55000,
      imageSrc: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format&fit=crop',
      rating: '4.8 (110 reviews)'
    }
  ];

  let filteredMerch = allMerch.filter(item => {
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
    filteredMerch.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }
  // If 'Newest Arrivals', we leave it as default (dummy data order)

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb & Hero */}
      <header className="mb-xl md:mb-2xl">
        <Breadcrumb items={[
          { label: 'Merchandise' }
        ]} />
        <div className="mt-md rounded-2xl w-full h-[200px] md:h-[300px] relative overflow-hidden group">
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentBanner * 100}%)` }}
          >
            {banners.map((img, idx) => (
              <div 
                key={idx}
                className="w-full h-full flex-shrink-0"
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            ))}
          </div>
          
          {/* Magnet / Snap Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentBanner(idx)}
                className={`w-10 h-2 md:w-12 rounded-full transition-all duration-300 ${currentBanner === idx ? 'bg-primary' : 'bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>
      </header>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-lg lg:gap-xl`}>
        
        {/* Mobile: Simplified Filters Top Bar */}
        {isMobile && (
          <div className="flex flex-wrap gap-sm md:gap-lg items-end bg-surface border border-border p-sm md:p-md rounded-xl">
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Category</label>
              <div className="relative">
                <select 
                  value={activeCategory} 
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Price Range</label>
              <div className="relative">
                <select 
                  value={activePriceRange} 
                  onChange={(e) => setActivePriceRange(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {priceRanges.map(range => <option key={range} value={range}>{range}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            
            {(activeCategory !== 'All Products' || activePriceRange !== 'Any Price') && (
              <button 
                onClick={() => {
                  setActiveCategory('All Products');
                  setActivePriceRange('Any Price');
                }}
                className="text-error font-label-sm hover:underline py-sm px-sm w-full sm:w-auto shrink-0 text-center"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Desktop: Filters Panel */}
        {!isMobile && (
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-border rounded-xl p-lg sticky top-24 shadow-sm">
              <div className="flex items-center gap-sm mb-lg border-b border-border pb-sm">
                <span className="material-symbols-outlined text-primary">filter_alt</span>
                <h2 className="font-headline-sm text-headline-sm text-text-primary">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Category</h3>
                <div className="flex flex-col gap-xs">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-sm cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border" 
                        checked={activeCategory === cat}
                        onChange={() => setActiveCategory(cat)}
                      />
                      <span className={`font-body-sm text-body-sm group-hover:text-primary transition-colors ${activeCategory === cat ? 'text-primary font-bold' : 'text-text-primary'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Price Range</h3>
                <div className="flex flex-col gap-xs">
                  {priceRanges.map(range => (
                    <label key={range} className="flex items-center gap-sm cursor-pointer group">
                      <input 
                        type="radio" 
                        name="price" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border" 
                        checked={activePriceRange === range}
                        onChange={() => setActivePriceRange(range)}
                      />
                      <span className={`font-body-sm text-body-sm group-hover:text-primary transition-colors ${activePriceRange === range ? 'text-primary font-bold' : 'text-text-primary'}`}>
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              {(activeCategory !== 'All Products' || activePriceRange !== 'Any Price') && (
                <div className="mt-xl pt-md border-t border-border">
                  <button 
                    onClick={() => {
                      setActiveCategory('All Products');
                      setActivePriceRange('Any Price');
                    }}
                    className="w-full py-sm bg-error-container text-on-error-container font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-md">
            <p className="font-body-sm text-body-sm text-text-secondary">Showing <span className="font-bold text-text-primary">{filteredMerch.length}</span> products</p>
            <div className="flex items-center gap-xs">
              <span className="font-label-sm text-label-sm text-text-secondary hidden sm:inline">Sort by:</span>
              <select 
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="bg-transparent font-label-sm text-label-sm text-text-primary outline-none cursor-pointer border-b border-dashed border-border pb-0.5 focus:border-primary"
              >
                {sortOptions.map(sort => (
                  <option key={sort} value={sort}>{sort}</option>
                ))}
              </select>
            </div>
          </div>

          {filteredMerch.length > 0 ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-xs md:gap-lg">
              {filteredMerch.map(item => (
                <MerchCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border border-dashed rounded-xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
              <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">inventory_2</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-xs">No products found</h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-sm">We couldn't find any products matching your current filters. Try adjusting them or clearing all filters.</p>
              <button 
                onClick={() => {
                  setActiveCategory('All Products');
                  setActivePriceRange('Any Price');
                }}
                className="mt-lg px-xl py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-hover transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
