
import { Link } from 'react-router-dom';

const EventCard = ({ title, subtitle, imageSrc, icon, iconColor, tags, timeRemaining }) => {
  return (
    <Link to="/event/1" className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors flex flex-col group cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img alt={`${title} Poster`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageSrc} />
      </div>
      <div className="p-sm md:p-lg flex flex-col flex-grow gap-2 md:gap-md">
        <div className="flex items-start gap-2 md:gap-md">
          <div className="w-7 h-7 md:w-10 md:h-10 bg-surface rounded-lg flex items-center justify-center border border-border flex-shrink-0">
            <span className={`material-symbols-outlined text-[14px] md:text-[24px] ${iconColor}`}>{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[12px] md:text-base text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-tight">{title}</h4>
            <p className="text-text-secondary text-[10px] md:text-label-sm line-clamp-1 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-xs">
          {tags.map((tag, index) => (
            <span key={index} className="bg-surface-container-low text-on-surface-variant px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-label-sm whitespace-nowrap">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 md:pt-md">
          <span className={`${timeRemaining.includes('2d') ? 'text-error' : 'text-text-secondary'} font-label-md text-[10px] md:text-label-sm flex items-center gap-1`}>
            <span className="material-symbols-outlined text-[12px] md:text-body-sm">schedule</span> {timeRemaining}
          </span>
          <span className="text-primary font-label-md text-[10px] md:text-base group-hover:underline">Apply</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
