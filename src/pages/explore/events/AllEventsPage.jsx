import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../../components/explore/EventCard';
import Breadcrumb from '../../../components/common/Breadcrumb';
import heroImage from '../../../assets/Tiket.png';
import { allEvents, eventCategories, eventPrices, eventFormats } from '../../../data/eventsData';

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

  const categories = eventCategories;
  const prices = eventPrices;
  const formats = eventFormats;

  const filteredEvents = allEvents.filter(event => {
    if (activeCategory !== 'All' && event.category !== activeCategory) return false;
    if (activePrice !== 'All' && event.price !== activePrice) return false;
    if (activeFormat !== 'All' && event.format !== activeFormat) return false;
    return true;
  });

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <header className="mb-xl md:mb-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
          {/* Left Content */}
          <div className="z-10 w-full md:w-3/5">
            <Breadcrumb items={[
              { label: 'Explore', path: '/explore' },
              { label: 'All Events' }
            ]} />
            
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-md mb-xs">Upcoming Events</h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-lg mb-lg">
              Discover and register for the latest seminars, workshops, and<br className="hidden md:inline" /> conferences happening across the campus network.
            </p>

            {/* Stat Cards - compact single row */}
            <div className="flex flex-nowrap gap-sm overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">event</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">120+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Upcoming Events</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-warning text-[20px]">groups</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">50+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Organizations</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">confirmation_number</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">15k+</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Tickets Sold</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl py-sm px-md flex items-center gap-sm border border-border/60 shadow-sm shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">star</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary leading-none">4.8/5</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary leading-tight">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex w-2/5 relative min-h-[240px] z-10 items-center justify-center">
            <img src={heroImage} alt="Event illustration" className="w-full max-w-[280px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.12)] rotate-6" />
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
              <div className="flex items-center justify-between mb-lg border-b border-border pb-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  <h2 className="font-headline-sm text-headline-sm text-text-primary">Filters</h2>
                </div>
                {(activeCategory !== 'All' || activePrice !== 'All' || activeFormat !== 'All') && (
                  <button 
                    onClick={() => {
                      setActiveCategory('All');
                      setActivePrice('All');
                      setActiveFormat('All');
                    }}
                    className="text-primary font-label-sm hover:underline"
                  >
                    Reset All
                  </button>
                )}
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

              {/* Saved Events Button */}
              <div className="mt-xl pt-md border-t border-border">
                <button className="w-full py-sm md:py-md bg-white border border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary/5 transition-colors flex items-center justify-center gap-xs shadow-sm">
                  <span className="material-symbols-outlined text-primary">bookmark</span>
                  Saved Events
                </button>
              </div>
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
            <>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-xs md:gap-lg">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
              
              {/* Notification Banner */}
              <div className="mt-2xl bg-gradient-to-r from-primary/5 to-surface-container-low rounded-2xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg border border-primary/10">
                <div className="flex items-center gap-lg text-center md:text-left flex-col md:flex-row">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">send</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary mb-1">Don't miss out on exciting events!</h3>
                    <p className="font-body-md text-body-md text-text-secondary">Turn on notifications and be the first to know when new events are posted.</p>
                  </div>
                </div>
                <button className="px-xl py-md bg-primary text-on-primary font-label-lg text-label-lg rounded-xl hover:bg-primary-hover transition-colors shrink-0 flex items-center gap-sm">
                  <span className="material-symbols-outlined">notifications_active</span>
                  Enable Notifications
                </button>
              </div>
            </>
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
