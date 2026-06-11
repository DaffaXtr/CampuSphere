

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-border dark:border-outline-variant w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-lg px-margin-mobile md:px-margin-desktop max-w-full mx-auto w-full gap-md md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-lg text-center md:text-left">
          <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">CampuSphere</span>
          <p className="font-label-md text-label-md text-on-surface-variant dark:text-on-secondary-container">© 2026 CampuSphere. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-md md:gap-lg font-label-md text-label-md mt-sm md:mt-0">
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Terms of Service</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Campus Directory</a>
          <a className="text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
