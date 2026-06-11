import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 mb-md text-on-surface-variant flex-wrap">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="font-label-sm text-[10px] md:text-label-sm text-primary">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  to={item.path}
                  className="font-label-sm text-[10px] md:text-label-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                <span className="material-symbols-outlined text-[14px] md:text-[16px]">
                  chevron_right
                </span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
