import { Link } from 'react-router-dom';
import FeaturedEvent from '../../components/explore/FeaturedEvent';
import EventCard from '../../components/explore/EventCard';
import RecruitmentCard from '../../components/explore/RecruitmentCard';

const ExplorePage = () => {
  const events = [
    {
      title: "HIMA Teknik Informatika",
      subtitle: "Staff Recruitment 2026",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIqB2zFNt3nWkgMg_bYksFuB8HPv8bMuFHeCmEmOYfGrX7_zkwhSUlAZvuVLxLYFQCNvG2lT9rLYTc1AhCwNHIzT4s4cUokwmUzqG9dLr4nyN7B1kTChLzu4k4KyN0Rsj3Hwl9wsARgFSdZRiYdhUYfJqSW0asuJivvL-gFlMWL6nJ3fYwxolOG9Gs4RpYZqb_V_DFPpJcDLMOjJnSZDASzxrIRJ_eYQR-JLYkTZcF5arwc7ftYOAyi04YJ7eJt40facEw3U78Ckm2",
      icon: "groups",
      iconColor: "text-primary",
      tags: ["Front-End", "UI/UX"],
      timeRemaining: "Closing in 2d"
    },
    {
      title: "Campus Startup Hub",
      subtitle: "Project Lead & Ops",
      imageSrc: "https://lh3.googleusercontent.com/aida/AP1WRLsAuycVp7COkXQOKwJJ6oX5uW6flNZFbj0jl1yuY8Wp7vsYADcYQcFcEEQK_A-G-LnmPn7_bCMbNXU5kQxl2u8VjtnyinjU1V6oU_fVBkggNshHeKx10xE2bRCpRz3zU7oww7v2y6qM2BN_vM7uUnOEEiBqFfcSESN6eq5WmHkG2_ent737jdvci7Nr0h-I8sZ4mjWmVu8otIocLscQXejb21tnLc31jC5YCPHLh5JUrwmFOpF3nCk0-6w",
      icon: "rocket_launch",
      iconColor: "text-tertiary",
      tags: ["Operations", "Leadership"],
      timeRemaining: "Closing in 5d"
    },
    {
      title: "Creative Arts Club",
      subtitle: "Creative Designer",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTbHz_veFBGzKf__BPngKfjfx6cmeYGCKwyaNBGHnfdvxKinxchVqrPmiywjOU85owbpVQQLfn8CLWCMbidgd2F-zLFv39dbAy4vsVxR2eQd6MOFOPbWjTzcXJUCAJWj6611ECrA7er9SeeOppyBqymtDFM29_rW_jHlHC_2y6qLYgzbGkYD1-_NeZpWkIg3iGhy1NJtzwc2GvQ2KZlLYc1YhEnfgTFzAH0z6-rTs1HujlZnUOVev1m4UYt1-6IX3V4wiDqrvdLE7c",
      icon: "palette",
      iconColor: "text-warning",
      tags: ["Design", "Photography"],
      timeRemaining: "Closing in 7d"
    }
  ];

  const recruitments = [
    {
      title: "HIMA Teknik Informatika",
      subtitle: "Staff Recruitment 2026",
      imageSrc: "https://lh3.googleusercontent.com/aida/AP1WRLthEoxDQAXNGxGycOnjvX9UF4mGwOoEDgyNlUK0iSsJ5Ei9-sWaUITGC-sGsiivfAjxxhV_WOHoOPwe23_nKQhFY6PnRn0578_OgGCsmDM8H521ip9bS4ZiIC4_eaKjAesK-ajaUjE4BfaRUVHnYA8GYhpdkW7Dg1q1X2hgLh7ksP-m8cu7iUd78qp83HZS67hPvX6YVnrXhVaAL-lwpooizzNJOKLcsMrVCDRdXQh4FIfp14-zExsjELDB",
      icon: "groups",
      iconColor: "text-primary",
      tags: ["Front-End", "UI/UX"],
      timeRemaining: "2d"
    },
    {
      title: "Campus Startup Hub",
      subtitle: "Project Lead & Ops",
      imageSrc: "https://lh3.googleusercontent.com/aida/AP1WRLtndD7xiKSfw-r5BQLLWT1uWya9XLneM_557l3ZKr88Jk1hmf8CeSiezea0ccTwrvcs11ClXtUIwveJxoNbyuuF1gWgaCR5mqdbIbE2-qoq2lP5C5pVok0SnsyGo0kuQiu-yq84GUtiGP9ypninRx_nKEEef5AqIibTZolPKhZAIuLyKPdnNbskxkG8X2kdkY6MTNjzRikJupFiQI78XG21DNSL1ck0QVJXvW7cBku0li37NNGuFmzhFlDn",
      icon: "rocket_launch",
      iconColor: "text-tertiary",
      tags: ["Operations", "Leadership"],
      timeRemaining: "5d"
    },
    {
      title: "Creative Arts Club",
      subtitle: "Creative Designer",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTbHz_veFBGzKf__BPngKfjfx6cmeYGCKwyaNBGHnfdvxKinxchVqrPmiywjOU85owbpVQQLfn8CLWCMbidgd2F-zLFv39dbAy4vsVxR2eQd6MOFOPbWjTzcXJUCAJWj6611ECrA7er9SeeOppyBqymtDFM29_rW_jHlHC_2y6qLYgzbGkYD1-_NeZpWkIg3iGhy1NJtzwc2GvQ2KZlLYc1YhEnfgTFzAH0z6-rTs1HujlZnUOVev1m4UYt1-6IX3V4wiDqrvdLE7c",
      icon: "palette",
      iconColor: "text-warning",
      tags: ["Design", "Photography"],
      timeRemaining: "7d"
    }
  ];

  return (
    <main className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop pb-xl md:pb-2xl mx-auto max-w-full space-y-xl md:space-y-xl">


      <FeaturedEvent />

      <section>
        <div className="flex items-center justify-between mb-4 md:mb-lg">
          <h2 className="font-headline-md text-[16px] md:text-headline-md">Other Upcoming Events</h2>
          <Link to="/events" className="text-primary text-[11px] md:text-label-md font-label-md hover:underline">View All Events</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-sm md:gap-lg">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4 md:mb-lg">
          <h2 className="font-headline-md text-[16px] md:text-headline-md">Organization Recruitment Board</h2>
          <Link to="/recruitments" className="text-primary text-[11px] md:text-label-md font-label-md hover:underline">View All Positions</Link>
        </div>
        <div className="grid grid-cols-2 gap-sm md:gap-lg md:grid-cols-3">
          {recruitments.map((recruitment, idx) => (
            <RecruitmentCard key={idx} {...recruitment} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
