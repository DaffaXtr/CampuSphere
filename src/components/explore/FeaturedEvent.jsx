
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const FeaturedEvent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    if (width > 0) {
      const newSlide = Math.round(scrollLeft / width);
      setActiveSlide(newSlide);
    }
  };

  const featuredEvents = [
    {
      id: 1,
      title: "Grand Annual Tech Seminar 2026",
      date: "June 25, 2026",
      location: "Airlangga Convention Center",
      description: "Join us for the most anticipated tech event of the year. Featuring keynote speakers from global tech giants and hands-on workshops on emerging AI trends.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC64WMTr1JSH3GzEwX4GKeKQczvQs2ldcPlNHLjb6cRcHhz53NhyeJXEZQbgBxVyA9OQH6SnTFPv02xTZFaNExMV5MLFNyrsBEOpFdmhdnqDeZzsvJM-HsexhahfzR6IC3sdU-79bQ4PmBzHzowwNDZ_dXWgnBgzB1b00_tmej0gaCk2jE8Lbv-n4ax-5aSEDj0PqOHt4BRPIaXUg2dzrnL_YYeEN_bmiol-TvqFR8LGjJOROb79fsdHTSXAYgHzM9qjSv0aod08dly"
    },
    {
      id: 2,
      title: "Global Leadership Summit",
      date: "August 10, 2026",
      location: "Main Auditorium",
      description: "A two-day summit bringing student leaders and executives together to discuss leadership.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIqB2zFNt3nWkgMg_bYksFuB8HPv8bMuFHeCmEmOYfGrX7_zkwhSUlAZvuVLxLYFQCNvG2lT9rLYTc1AhCwNHIzT4s4cUokwmUzqG9dLr4nyN7B1kTChLzu4k4KyN0Rsj3Hwl9wsARgFSdZRiYdhUYfJqSW0asuJivvL-gFlMWL6nJ3fYwxolOG9Gs4RpYZqb_V_DFPpJcDLMOjJnSZDASzxrIRJ_eYQR-JLYkTZcF5arwc7ftYOAyi04YJ7eJt40facEw3U78Ckm2"
    },
    {
      id: 3,
      title: "Campus Career Fair",
      date: "September 5, 2026",
      location: "Student Center Plaza",
      description: "Connect with over 100 top companies recruiting for internships and full-time positions.",
      imageSrc: "https://lh3.googleusercontent.com/aida/AP1WRLsAuycVp7COkXQOKwJJ6oX5uW6flNZFbj0jl1yuY8Wp7vsYADcYQcFcEEQK_A-G-LnmPn7_bCMbNXU5kQxl2u8VjtnyinjU1V6oU_fVBkggNshHeKx10xE2bRCpRz3zU7oww7v2y6qM2BN_vM7uUnOEEiBqFfcSESN6eq5WmHkG2_ent737jdvci7Nr0h-I8sZ4mjWmVu8otIocLscQXejb21tnLc31jC5YCPHLh5JUrwmFOpF3nCk0-6w"
    }
  ];

  return (
    <section className="mb-2xl">
      {/* Desktop Layout: 3-Card Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-md md:gap-lg">
        {/* Left Large Card: Tech Seminar */}
        <div 
          style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F4FAF4 60%, #FCE4EC 100%)' }}
          className="md:col-span-2 border border-border rounded-2xl p-lg flex flex-col md:flex-row justify-between items-center md:items-stretch overflow-hidden relative min-h-[300px] group shadow-sm"
        >
          <div className="absolute top-8 right-16 w-6 h-6 rounded-full bg-soft-magenta/80 pointer-events-none"></div>
          <div className="absolute bottom-[-50px] right-[-30px] w-64 h-48 bg-primary-green/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col justify-between flex-1 relative z-10 text-left w-full">
            <div>
              <span className="bg-primary-green/10 text-primary-green border border-primary-green/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured Event</span>
              <h2 className="font-headline-xl text-2xl md:text-[28px] text-text-primary mt-md mb-sm leading-tight max-w-[420px] group-hover:text-primary-green transition-colors">
                <Link to={`/event/${featuredEvents[0].id}`}>{featuredEvents[0].title}</Link>
              </h2>
              <div className="flex flex-col gap-1.5 text-text-secondary text-sm mb-md">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-body-md text-primary-green">calendar_today</span>
                  <span>{featuredEvents[0].date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-body-md text-primary-green">location_on</span>
                  <span>{featuredEvents[0].location}</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm max-w-[440px] leading-relaxed line-clamp-2">
                {featuredEvents[0].description}
              </p>
            </div>
            <div className="mt-lg">
              <Link 
                to={`/event/${featuredEvents[0].id}`} 
                className="bg-primary-green hover:bg-secondary-green text-white px-lg py-2.5 rounded-lg font-label-md transition-all active:scale-95 inline-block text-center shadow-sm"
              >
                Register Ticket
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[240px] lg:w-[280px] h-[200px] md:h-auto flex items-center justify-center relative mt-md md:mt-0 flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm">
            <img 
              src={featuredEvents[0].imageSrc} 
              alt={featuredEvents[0].title} 
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column Stack: Summit & Career Fair */}
        <div className="flex flex-col gap-md md:gap-lg">
          {/* Top Right Card: Global Leadership Summit */}
          <div className="flex-1 bg-soft-magenta border border-border rounded-2xl p-md flex flex-row justify-between items-center overflow-hidden relative min-h-[135px] group shadow-sm text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-magenta font-bold text-[9px] md:text-[10px] tracking-wider uppercase">SUMMIT</span>
                <h3 className="font-bold text-sm md:text-base text-text-primary mt-1 leading-snug line-clamp-2 group-hover:text-primary-magenta transition-colors">
                  <Link to={`/event/${featuredEvents[1].id}`}>{featuredEvents[1].title}</Link>
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-text-secondary mt-1.5">
                  <span className="material-symbols-outlined text-xs text-primary-magenta">calendar_today</span>
                  <span>{featuredEvents[1].date}</span>
                </div>
              </div>
            </div>
            <div className="w-[100px] md:w-[110px] lg:w-[120px] h-full flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img 
                src={featuredEvents[1].imageSrc} 
                alt={featuredEvents[1].title} 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bottom Right Card: Campus Career Fair */}
          <div className="flex-1 bg-soft-green border border-border rounded-2xl p-md flex flex-row justify-between items-center overflow-hidden relative min-h-[135px] group shadow-sm text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-green font-bold text-[9px] md:text-[10px] tracking-wider uppercase">CAREER</span>
                <h3 className="font-bold text-sm md:text-base text-text-primary mt-1 leading-snug line-clamp-2 group-hover:text-primary-green transition-colors">
                  <Link to={`/event/${featuredEvents[2].id}`}>{featuredEvents[2].title}</Link>
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-text-secondary mt-1.5">
                  <span className="material-symbols-outlined text-xs text-primary-green">calendar_today</span>
                  <span>{featuredEvents[2].date}</span>
                </div>
              </div>
            </div>
            <div className="w-[100px] md:w-[110px] lg:w-[120px] h-full flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img 
                src={featuredEvents[2].imageSrc} 
                alt={featuredEvents[2].title} 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Slider Carousel */}
      <div className="md:hidden relative">
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar w-full rounded-2xl border border-border shadow-sm"
        >
          {/* Slide 1: Tech Seminar */}
          <div 
            style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F4FAF4 60%, #FCE4EC 100%)' }}
            className="snap-always snap-center min-w-full w-full flex-shrink-0 p-lg flex flex-row justify-between items-center relative min-h-[220px] overflow-hidden text-left"
          >
            <div className="absolute top-4 right-12 w-4 h-4 rounded-full bg-soft-magenta/80 pointer-events-none"></div>
            <div className="absolute bottom-[-40px] right-[-20px] w-48 h-36 bg-primary-green/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-green font-bold text-[9px] tracking-wider uppercase">FEATURED EVENT</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[0].title}
                </h2>
                <div className="flex flex-col gap-0.5 text-text-secondary text-[10px] mt-1.5">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary-green">calendar_today</span>
                    <span>{featuredEvents[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to={`/event/${featuredEvents[0].id}`} 
                  className="bg-primary-green text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block"
                >
                  Register Ticket
                </Link>
              </div>
            </div>
            
            <div className="w-[120px] h-[140px] flex items-center justify-center flex-shrink-0 relative rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img 
                src={featuredEvents[0].imageSrc} 
                alt={featuredEvents[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Slide 2: Global Leadership Summit */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-soft-magenta p-lg flex flex-row justify-between items-center relative min-h-[220px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-magenta font-bold text-[9px] tracking-wider uppercase">SUMMIT</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[1].title}
                </h2>
                <div className="flex flex-col gap-0.5 text-text-secondary text-[10px] mt-1.5">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary-magenta">calendar_today</span>
                    <span>{featuredEvents[1].date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to={`/event/${featuredEvents[1].id}`} 
                  className="bg-primary-magenta text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
            
            <div className="w-[120px] h-[140px] flex items-center justify-center flex-shrink-0 relative rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img 
                src={featuredEvents[1].imageSrc} 
                alt={featuredEvents[1].title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Slide 3: Campus Career Fair */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-soft-green p-lg flex flex-row justify-between items-center relative min-h-[220px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="text-primary-green font-bold text-[9px] tracking-wider uppercase">CAREER</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[2].title}
                </h2>
                <div className="flex flex-col gap-0.5 text-text-secondary text-[10px] mt-1.5">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary-green">calendar_today</span>
                    <span>{featuredEvents[2].date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to={`/event/${featuredEvents[2].id}`} 
                  className="bg-primary-green text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
            
            <div className="w-[120px] h-[140px] flex items-center justify-center flex-shrink-0 relative rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img 
                src={featuredEvents[2].imageSrc} 
                alt={featuredEvents[2].title} 
                className="w-full h-full object-cover"
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
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-primary-green w-6' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
