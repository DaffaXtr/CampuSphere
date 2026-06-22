
import { Link } from 'react-router-dom';

const RecruitmentCard = ({ id = 1, title, subtitle, imageSrc, icon, iconColor, tags, timeRemaining }) => {
  return (
    <Link 
      to={`/recruitment/${id}`} 
      className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow hover:border-primary transition-all duration-300 flex flex-col group cursor-pointer"
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          alt={`${title} Recruitment Poster`} 
          className="w-full h-full object-cover" 
          src={imageSrc} 
        />
      </div>

      <div className="p-md md:p-lg flex flex-col flex-grow gap-3">
        <div className="flex items-start gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-9 md:h-9 bg-surface rounded-lg flex items-center justify-center border border-border flex-shrink-0">
            <span className={`material-symbols-outlined text-[14px] md:text-[20px] ${iconColor}`}>{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[13px] md:text-base text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {title}
            </h4>
            <p className="text-text-secondary text-[11px] md:text-label-sm line-clamp-1 mt-1">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded-full text-[9px] md:text-label-sm whitespace-nowrap border border-border/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2 md:pt-md border-t border-border/40">
          <span className={`${timeRemaining.includes('2d') ? 'text-error' : 'text-text-secondary'} font-label-md text-[10px] md:text-label-sm flex items-center gap-1`}>
            <span className="material-symbols-outlined text-[12px] md:text-body-sm">schedule</span> {timeRemaining}
          </span>
          <span className="text-primary font-label-md text-[11px] md:text-label-md flex items-center gap-1">
            Apply <span className="material-symbols-outlined text-[12px] md:text-[14px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecruitmentCard;


