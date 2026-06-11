
import { Link } from 'react-router-dom';

const RecruitmentCard = ({ id = 1, title, subtitle, imageSrc, icon, iconColor, tags, timeRemaining }) => {
  return (
    <Link to={`/recruitment/${id}`} className="bg-white border border-border rounded-xl p-sm md:p-md hover:border-primary transition-colors flex flex-col gap-2 md:gap-md group cursor-pointer">
      <div className="aspect-video overflow-hidden rounded-lg mb-1 md:mb-sm">
        <img alt={`${title} Recruitment Poster`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageSrc} />
      </div>
      <div className="flex items-start gap-1.5 md:gap-sm">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-surface rounded-lg flex items-center justify-center border border-border flex-shrink-0">
          <span className={`material-symbols-outlined ${iconColor} text-[12px] md:text-body-md`}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-[11px] md:text-body-sm truncate group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-text-secondary text-[9px] md:text-label-sm truncate">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 md:gap-xs">
        {tags.map((tag, index) => (
          <span key={index} className="bg-surface-container-low text-on-surface-variant px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-label-sm whitespace-nowrap">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-auto pt-1 md:pt-sm">
        <span className={`${timeRemaining.includes('2d') ? 'text-error' : 'text-text-secondary'} font-label-md text-[9px] md:text-label-sm flex items-center gap-1`}>
          <span className="material-symbols-outlined text-[11px] md:text-body-sm">schedule</span> {timeRemaining}
        </span>
        <span className="text-primary text-[9px] md:text-label-sm font-label-md group-hover:underline">Apply</span>
      </div>
    </Link>
  );
};

export default RecruitmentCard;
