import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuredEvents } from '../../data/eventsData';

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

  return (
    <section>
      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:grid grid-cols-3 gap-lg min-h-[340px]">

        {/* --- Left Featured Card --- */}
        <div
          style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 40%, #FEF3C7 100%)' }}
          className="col-span-2 border border-border rounded-2xl p-lg lg:p-xl flex flex-row items-stretch overflow-hidden relative group shadow-sm text-left"
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="absolute top-4 left-[55%] w-[100px] h-[80px] bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:10px_10px] opacity-[0.12]"></div>
            <div className="absolute bottom-[-60px] right-[-40px] w-72 h-52 bg-primary-blue/8 rounded-full blur-2xl"></div>
            <div className="absolute top-6 right-[45%] w-5 h-5 rounded-full bg-primary-yellow/60"></div>
            <div className="absolute top-1/2 left-[52%] -translate-y-1/2 w-40 h-40 border border-primary-blue/10 rounded-full"></div>
          </div>

          {/* Left text content */}
          <div className="flex flex-col justify-between flex-1 relative z-10 pr-lg">
            <div>
              <span className="text-primary-blue font-bold text-[10px] md:text-xs tracking-wider uppercase">
                Featured Event
              </span>

              <h2 className="font-headline-xl text-2xl lg:text-[32px] text-text-primary mt-md mb-sm leading-tight max-w-[380px]">
                <Link to={`/event/${featuredEvents[0].id}`}>{featuredEvents[0].title}</Link>
              </h2>

              <div className="flex flex-col gap-1 text-text-secondary text-sm mb-md">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-body-md text-primary-blue">calendar_today</span>
                  <span>{featuredEvents[0].date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-body-md text-primary-blue">location_on</span>
                  <span>{featuredEvents[0].location}</span>
                </div>
              </div>

              <p className="text-text-secondary text-sm max-w-[400px] leading-relaxed line-clamp-2">
                {featuredEvents[0].description}
              </p>
            </div>

            {/* Bottom: Button + Social Proof */}
            <div className="mt-lg flex flex-col sm:flex-row items-start sm:items-center gap-md">
              <Link
                to={`/event/${featuredEvents[0].id}`}
                className="bg-primary-blue hover:bg-secondary-blue text-white px-lg py-2.5 rounded-xl font-label-md transition-all active:scale-95 inline-flex items-center gap-2 shadow-sm"
              >
                Register Ticket
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>

              {/* Social proof avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Participant" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Participant" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Participant" />
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-primary-yellow text-text-primary text-[8px] font-extrabold">+99</div>
                </div>
                <span className="text-xs text-text-secondary font-medium">
                  Join <strong>{featuredEvents[0].participants}</strong> participants
                </span>
              </div>
            </div>
          </div>

          {/* Center/Right: Event Image + Early Bird Badge */}
          <div className="w-[220px] lg:w-[260px] flex-shrink-0 relative z-10 flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden border border-border/40 shadow-md relative">
              <img
                src={featuredEvents[0].imageSrc}
                alt={featuredEvents[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Right Column: 2 Stacked Cards --- */}
        <div className="flex flex-col gap-lg">
          {/* Top: Summit */}
          <div className="flex-1 bg-pale-yellow/50 border border-border rounded-2xl p-md flex flex-row justify-between items-stretch overflow-hidden relative group shadow-sm text-left">
            {/* Decorative shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-secondary-yellow/15 rounded-full"></div>
              <div className="absolute bottom-3 left-3 w-[50px] h-[40px] bg-[radial-gradient(circle,#F59E0B_0.8px,transparent_0.8px)] bg-[size:8px_8px] opacity-[0.12]"></div>
              <div className="absolute top-3 right-[45%] w-2 h-2 bg-secondary-yellow/20 rounded-sm rotate-45"></div>
            </div>

            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-3">
              <div>
                <span className="text-secondary-yellow font-bold text-[9px] md:text-[10px] tracking-wider uppercase">
                  {featuredEvents[1].tag}
                </span>
                <h3 className="font-bold text-sm lg:text-base text-text-primary mt-2 leading-snug line-clamp-2">
                  <Link to={`/event/${featuredEvents[1].id}`}>{featuredEvents[1].title}</Link>
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-text-secondary mt-2">
                <span className="material-symbols-outlined text-xs text-dark-yellow">calendar_today</span>
                <span>{featuredEvents[1].date}</span>
              </div>
              <div className="mt-3 lg:mt-4">
                <Link
                  to={`/event/${featuredEvents[1].id}`}
                  className="bg-primary-yellow hover:bg-secondary-yellow text-text-primary text-[11px] px-4 py-1.5 rounded-lg font-bold inline-block transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="w-[100px] lg:w-[120px] flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm relative z-10">
              <img
                src={featuredEvents[1].imageSrc}
                alt={featuredEvents[1].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom: Career */}
          <div className="flex-1 bg-ultra-light-blue border border-border rounded-2xl p-md flex flex-row justify-between items-stretch overflow-hidden relative group shadow-sm text-left">
            {/* Decorative shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="absolute -bottom-8 -left-8 w-28 h-28 border border-primary-blue/10 rounded-full"></div>
              <div className="absolute top-4 right-[40%] w-[45px] h-[35px] bg-[radial-gradient(circle,#2563EB_0.8px,transparent_0.8px)] bg-[size:8px_8px] opacity-[0.1]"></div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-primary-blue/15 rounded-sm rotate-45"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-16 h-16 border border-dashed border-primary-blue/8 rounded-full"></div>
            </div>

            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-3">
              <div>
                <span className="text-primary-blue font-bold text-[9px] md:text-[10px] tracking-wider uppercase">
                  {featuredEvents[2].tag}
                </span>
                <h3 className="font-bold text-sm lg:text-base text-text-primary mt-2 leading-snug line-clamp-2">
                  <Link to={`/event/${featuredEvents[2].id}`}>{featuredEvents[2].title}</Link>
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-text-secondary mt-2">
                <span className="material-symbols-outlined text-xs text-primary-blue">calendar_today</span>
                <span>{featuredEvents[2].date}</span>
              </div>
              <div className="mt-3 lg:mt-4">
                <Link
                  to={`/event/${featuredEvents[2].id}`}
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="w-[100px] lg:w-[120px] flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm relative z-10">
              <img
                src={featuredEvents[2].imageSrc}
                alt={featuredEvents[2].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile Layout: Carousel ===== */}
      <div className="md:hidden relative">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar w-full rounded-2xl border border-border shadow-sm"
        >
          {/* Slide 1: Featured */}
          <div
            style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #FEF3C7 100%)' }}
            className="snap-always snap-center min-w-full w-full flex-shrink-0 p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left"
          >
            <div className="absolute top-4 right-12 w-4 h-4 rounded-full bg-primary-yellow/60 pointer-events-none"></div>
            <div className="absolute bottom-[-40px] right-[-20px] w-48 h-36 bg-primary-blue/10 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-3">
              <div>
                <span className="text-primary-blue font-bold text-[9px] tracking-wider uppercase">FEATURED EVENT</span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[0].title}
                </h2>
                <div className="flex items-center gap-1 text-text-secondary text-[10px] mt-1.5">
                  <span className="material-symbols-outlined text-xs text-primary-blue">calendar_today</span>
                  <span>{featuredEvents[0].date}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <Link
                  to={`/event/${featuredEvents[0].id}`}
                  className="bg-primary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block w-fit"
                >
                  Register Ticket
                </Link>
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="" />
                    <img className="inline-block h-5 w-5 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="" />
                    <div className="inline-flex items-center justify-center h-5 w-5 rounded-full ring-1 ring-white bg-primary-yellow text-[6px] font-bold text-text-primary">+99</div>
                  </div>
                  <span className="text-[9px] text-text-secondary">Join {featuredEvents[0].participants}</span>
                </div>
              </div>
            </div>

            <div className="w-[120px] h-[150px] flex-shrink-0 relative rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img
                src={featuredEvents[0].imageSrc}
                alt={featuredEvents[0].title}
                className="w-full h-full object-cover"
              />
              {/* Mobile Early Bird Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-primary-yellow/95 text-center py-1 px-1">
                <p className="text-[7px] font-bold text-text-primary uppercase">Early Bird • 25% Off</p>
              </div>
            </div>
          </div>

          {/* Slide 2: Summit */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-pale-yellow/50 p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="bg-secondary-yellow/20 text-dark-yellow border border-secondary-yellow/30 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider inline-block">
                  {featuredEvents[1].tag}
                </span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1.5 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[1].title}
                </h2>
                <div className="flex items-center gap-1 text-text-secondary text-[10px] mt-1.5">
                  <span className="material-symbols-outlined text-xs text-dark-yellow">calendar_today</span>
                  <span>{featuredEvents[1].date}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/event/${featuredEvents[1].id}`}
                  className="bg-primary-yellow hover:bg-secondary-yellow text-text-primary text-[11px] px-4 py-1.5 rounded-lg font-bold inline-block transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="w-[120px] h-[150px] flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm">
              <img
                src={featuredEvents[1].imageSrc}
                alt={featuredEvents[1].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Slide 3: Career Fair */}
          <div className="snap-always snap-center min-w-full w-full flex-shrink-0 bg-ultra-light-blue p-lg flex flex-row justify-between items-center relative min-h-[240px] overflow-hidden text-left">
            <div className="flex flex-col justify-between h-full flex-1 relative z-10 pr-2">
              <div>
                <span className="bg-primary-blue/10 text-primary-blue border border-primary-blue/20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider inline-block">
                  {featuredEvents[2].tag}
                </span>
                <h2 className="font-bold text-[18px] text-text-primary mt-1.5 leading-tight max-w-[170px] line-clamp-2">
                  {featuredEvents[2].title}
                </h2>
                <div className="flex items-center gap-1 text-text-secondary text-[10px] mt-1.5">
                  <span className="material-symbols-outlined text-xs text-primary-blue">calendar_today</span>
                  <span>{featuredEvents[2].date}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/event/${featuredEvents[2].id}`}
                  className="bg-primary-blue hover:bg-secondary-blue text-white text-[11px] px-4 py-1.5 rounded-lg font-semibold inline-block transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="w-[120px] h-[150px] flex-shrink-0 rounded-xl overflow-hidden border border-border/40 shadow-sm">
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
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-primary-blue w-6' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
