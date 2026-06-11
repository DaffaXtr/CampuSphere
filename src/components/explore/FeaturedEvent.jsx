
import { Link } from 'react-router-dom';

const FeaturedEvent = () => {
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
      description: "A two-day summit bringing together student leaders and industry executives to discuss the future of leadership, sustainability, and corporate responsibility.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIqB2zFNt3nWkgMg_bYksFuB8HPv8bMuFHeCmEmOYfGrX7_zkwhSUlAZvuVLxLYFQCNvG2lT9rLYTc1AhCwNHIzT4s4cUokwmUzqG9dLr4nyN7B1kTChLzu4k4KyN0Rsj3Hwl9wsARgFSdZRiYdhUYfJqSW0asuJivvL-gFlMWL6nJ3fYwxolOG9Gs4RpYZqb_V_DFPpJcDLMOjJnSZDASzxrIRJ_eYQR-JLYkTZcF5arwc7ftYOAyi04YJ7eJt40facEw3U78Ckm2"
    },
    {
      id: 3,
      title: "Campus Career Fair",
      date: "September 5, 2026",
      location: "Student Center Plaza",
      description: "Connect with over 100 top companies recruiting for internships and full-time positions. Don't miss this opportunity to kickstart your career.",
      imageSrc: "https://lh3.googleusercontent.com/aida/AP1WRLsAuycVp7COkXQOKwJJ6oX5uW6flNZFbj0jl1yuY8Wp7vsYADcYQcFcEEQK_A-G-LnmPn7_bCMbNXU5kQxl2u8VjtnyinjU1V6oU_fVBkggNshHeKx10xE2bRCpRz3zU7oww7v2y6qM2BN_vM7uUnOEEiBqFfcSESN6eq5WmHkG2_ent737jdvci7Nr0h-I8sZ4mjWmVu8otIocLscQXejb21tnLc31jC5YCPHLh5JUrwmFOpF3nCk0-6w"
    }
  ];

  // Duplicate the array to create an "infinite loop" illusion when swiping
  const displayEvents = Array(20).fill(featuredEvents).flat();

  return (
    <section>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-lg pb-md hide-scrollbar">
        {displayEvents.flatMap((event, index) => [
          <Link key={`${event.id}-${index}-mobile`} to={`/event/${event.id}`} className="min-w-full w-full snap-always snap-center bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group flex flex-row md:hidden cursor-pointer shrink-0">
            <div className="w-2/5 shrink-0 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0" alt={event.title} src={event.imageSrc} />
              <div className="absolute top-2 left-2 bg-primary text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider">Featured</div>
            </div>
            <div className="p-sm flex flex-col flex-grow justify-center min-h-[140px]">
              <div className="mb-2">
                <div className="flex items-center gap-1 text-primary font-label-sm mb-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  <span className="text-[10px]">{event.date}</span>
                </div>
                <h2 className="font-bold text-[14px] mb-1 text-text-primary group-hover:text-primary transition-colors line-clamp-2">{event.title}</h2>
                <div className="flex items-center gap-1 text-text-secondary font-body-sm mb-1">
                  <span className="material-symbols-outlined text-[12px]">location_on</span>
                  <span className="text-[10px]">{event.location}</span>
                </div>
                <p className="text-text-secondary text-[11px] max-w-xl line-clamp-2">{event.description}</p>
              </div>
              <span className="bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded-lg text-[10px] transition-all active:scale-95 w-fit">Register Ticket</span>
            </div>
          </Link>,

          <Link key={`${event.id}-${index}-desktop`} to={`/event/${event.id}`} className="hidden md:flex min-w-[75%] lg:min-w-[85%] snap-always snap-center bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group flex-row cursor-pointer shrink-0">
            <div className="w-2/5 h-auto overflow-hidden relative shrink-0">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0" alt={event.title} src={event.imageSrc} />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">Featured Event</div>
            </div>
            <div className="p-lg flex flex-col flex-grow justify-center min-h-[250px]">
              <div className="mb-lg">
                <div className="flex items-center gap-2 text-primary font-label-md mb-2">
                  <span className="material-symbols-outlined text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  <span>{event.date}</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-md text-text-primary group-hover:text-primary transition-colors">{event.title}</h2>
                <div className="flex items-center gap-2 text-text-secondary font-body-sm mb-2">
                  <span className="material-symbols-outlined text-body-sm">location_on</span>
                  <span>{event.location}</span>
                </div>
                <p className="mt-md text-text-secondary font-body-md max-w-2xl">{event.description}</p>
              </div>
              <span className="bg-primary hover:bg-primary-hover text-white px-lg py-3 rounded-lg font-label-md transition-all active:scale-95 w-fit">Register Ticket</span>
            </div>
          </Link>
        ])}
      </div>
    </section>
  );
};

export default FeaturedEvent;
