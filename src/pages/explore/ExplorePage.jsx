import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import FeaturedEvent from '../../components/explore/FeaturedEvent';
import EventCard from '../../components/explore/EventCard';
import RecruitmentCard from '../../components/explore/RecruitmentCard';
import { upcomingEvents, recruitments } from '../../data/eventsData';

const ExplorePage = () => {

  return (
    <main className="py-md md:py-xl px-margin-mobile md:px-margin-desktop mx-auto max-w-[1440px] min-h-screen flex flex-col gap-xl">
      <div className="hidden md:block text-left">
        <Breadcrumb items={[
          { label: 'Explore' }
        ]} />
      </div>

      <FeaturedEvent />

      <section>
        <div className="flex items-center justify-between mb-4 md:mb-lg">
          <h2 className="font-headline-md text-[16px] md:text-headline-md">Other Upcoming Events</h2>
          <Link to="/events" className="text-primary text-[11px] md:text-label-md font-label-md hover:underline">View All Events</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-sm md:gap-lg">
          {upcomingEvents.map((event, idx) => (
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
