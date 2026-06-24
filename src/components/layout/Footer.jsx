

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-border dark:border-outline-variant w-full mt-auto min-h-[64px] md:min-h-[80px] flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-0 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full gap-md md:gap-0">
        <div className="flex flex-row items-center justify-between w-full md:w-auto gap-2 md:gap-lg">
          <span className="font-headline-md text-sm md:text-headline-md font-bold text-on-surface dark:text-inverse-on-surface shrink-0">CampuSphere</span>
          <p className="font-label-md text-[10px] sm:text-xs md:text-label-md text-on-surface-variant dark:text-on-secondary-container truncate">© 2026 CampuSphere. All rights reserved.</p>
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-lg font-label-md text-label-md">
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary-blue dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary-blue dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Terms of Service</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary-blue dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Campus Directory</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary-blue dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
