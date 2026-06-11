import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../../components/explore/EventCard';
import Breadcrumb from '../../../components/common/Breadcrumb';

const AllEventsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activePrice, setActivePrice] = useState('All');
  const [activeFormat, setActiveFormat] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dummy events data
  const allEvents = [
    {
      id: 1,
      title: 'Global Tech Conference 2026',
      subtitle: 'The biggest tech event of the year featuring industry leaders.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'campaign',
      iconColor: 'text-primary',
      tags: ['Technology', 'Conference', 'Networking'],
      timeRemaining: 'Starts in 5 days',
      category: 'Technology',
      price: 'Paid',
      format: 'Offline'
    },
    {
      id: 2,
      title: 'UI/UX Masterclass: Designing for Gen Z',
      subtitle: 'Learn the latest trends in UI/UX design with hands-on projects.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'palette',
      iconColor: 'text-secondary',
      tags: ['Design', 'Workshop'],
      timeRemaining: 'Starts in 2 weeks',
      category: 'Design',
      price: 'Free',
      format: 'Online'
    },
    {
      id: 3,
      title: 'Startup Pitch Battle 2026',
      subtitle: 'Watch aspiring entrepreneurs pitch their ideas to investors.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'rocket_launch',
      iconColor: 'text-tertiary',
      tags: ['Business', 'Competition'],
      timeRemaining: 'Starts tomorrow',
      category: 'Business',
      price: 'Free',
      format: 'Offline'
    },
    {
      id: 4,
      title: 'Introduction to Cloud Computing',
      subtitle: 'A beginner-friendly session on AWS, Google Cloud, and Azure.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'cloud',
      iconColor: 'text-primary',
      tags: ['Technology', 'Seminar'],
      timeRemaining: 'Starts in 3 days',
      category: 'Technology',
      price: 'Free',
      format: 'Hybrid'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategies for 2026',
      subtitle: 'Maximize your reach with the latest social media algorithms.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'trending_up',
      iconColor: 'text-success',
      tags: ['Business', 'Marketing'],
      timeRemaining: 'Starts in 1 month',
      category: 'Business',
      price: 'Paid',
      format: 'Online'
    },
    {
      id: 6,
      title: 'Campus E-Sports Tournament',
      subtitle: 'Compete with the best teams on campus for the grand prize.',
      imageSrc: 'https://cdn.dribbble.com/userupload/37598126/file/original-3438643257cc8efed09a4f5e328100a1.jpg?resize=752x&vertical=center',
      icon: 'sports_esports',
      iconColor: 'text-warning',
      tags: ['Sports', 'Gaming'],
      timeRemaining: 'Starts in 2 weeks',
      category: 'Sports',
      price: 'Free',
      format: 'Offline'
    }
  ];

  const categories = ['All', 'Technology', 'Business', 'Design', 'Sports'];
  const prices = ['All', 'Free', 'Paid'];
  const formats = ['All', 'Online', 'Offline', 'Hybrid'];

  const filteredEvents = allEvents.filter(event => {
    if (activeCategory !== 'All' && event.category !== activeCategory) return false;
    if (activePrice !== 'All' && event.price !== activePrice) return false;
    if (activeFormat !== 'All' && event.format !== activeFormat) return false;
    return true;
  });

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <header className="mb-xl md:mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'All Events' }
        ]} />
        <div className="mt-md">
          <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">Upcoming Events</h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-2xl">Discover and register for the latest seminars, workshops, and conferences happening across the campus network.</p>
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
                  {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Format</label>
              <div className="relative">
                <select 
                  value={activeFormat} 
                  onChange={(e) => setActiveFormat(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {formats.map(format => <option key={format} value={format}>{format === 'All' ? 'All Formats' : format}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Price</label>
              <div className="relative">
                <select 
                  value={activePrice} 
                  onChange={(e) => setActivePrice(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {prices.map(price => <option key={price} value={price}>{price === 'All' ? 'Any Price' : price}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            
            {(activeCategory !== 'All' || activePrice !== 'All' || activeFormat !== 'All') && (
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setActivePrice('All');
                  setActiveFormat('All');
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
                <span className="material-symbols-outlined text-primary">tune</span>
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
                      <span className={`font-body-sm text-body-sm group-hover:text-primary transition-colors ${activeCategory === cat ? 'text-primary font-bold' : 'text-text-primary'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Price</h3>
                <div className="flex flex-wrap gap-xs">
                  {prices.map(price => (
                    <button 
                      key={price}
                      onClick={() => setActivePrice(price)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activePrice === price ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Filter */}
              <div>
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Format</h3>
                <div className="flex flex-wrap gap-xs">
                  {formats.map(format => (
                    <button 
                      key={format}
                      onClick={() => setActiveFormat(format)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activeFormat === format ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              {(activeCategory !== 'All' || activePrice !== 'All' || activeFormat !== 'All') && (
                <div className="mt-xl pt-md border-t border-border">
                  <button 
                    onClick={() => {
                      setActiveCategory('All');
                      setActivePrice('All');
                      setActiveFormat('All');
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

        {/* Event Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-md">
            <p className="font-body-sm text-body-sm text-text-secondary">Showing <span className="font-bold text-text-primary">{filteredEvents.length}</span> events</p>
            <div className="flex items-center gap-xs">
              <span className="font-label-sm text-label-sm text-text-secondary">Sort by:</span>
              <select className="bg-transparent font-label-sm text-label-sm text-text-primary outline-none cursor-pointer border-b border-dashed border-border pb-0.5">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-xs md:gap-lg">
              {filteredEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border border-dashed rounded-xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
              <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">event_busy</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-xs">No events found</h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-sm">We couldn't find any events matching your current filters. Try adjusting them or clearing all filters.</p>
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setActivePrice('All');
                  setActiveFormat('All');
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

export default AllEventsPage;
