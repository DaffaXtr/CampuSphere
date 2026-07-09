import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const profileRef = useRef(null);

  const location = useLocation();
  const isExploreActive = location.pathname.startsWith('/explore') || location.pathname.startsWith('/event') || location.pathname.startsWith('/recruitment');

  const getLinkClass = ({ isActive }) => {
    const baseClass = "transition-colors cursor-pointer ";
    if (isActive) {
      return baseClass + "text-secondary-blue dark:text-primary-fixed-dim font-bold";
    }
    return baseClass + "text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary-blue dark:hover:text-primary-fixed-dim";
  };

  const [cartCount, setCartCount] = useState(parseInt(localStorage.getItem('cartCount') || '2'));

  // Close profile dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Listen for cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      setCartCount(parseInt(localStorage.getItem('cartCount') || '2'));
    };
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  return (
    <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-border dark:border-outline-variant sticky top-0 w-full z-50 h-[64px] md:h-[80px]">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-full max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="font-headline-md text-[18px] md:text-headline-md font-bold text-primary dark:text-primary-fixed-dim cursor-pointer">CampuSphere</Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-lg font-body-md text-body-md">
          <div className="relative group">
            <NavLink to="/explore" className={({ isActive }) => getLinkClass({ isActive: isActive || isExploreActive })}>
              <span className="flex items-center gap-1">
                Eksplorasi
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">expand_more</span>
              </span>
            </NavLink>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="w-48 bg-surface-container-lowest dark:bg-inverse-surface border border-border dark:border-outline-variant rounded-lg shadow-lg py-2 flex flex-col">
                <NavLink to="/explore" end className={({isActive}) => `px-4 py-2 text-body-sm transition-colors ${isActive ? 'bg-surface-container text-secondary-blue dark:text-primary-fixed-dim font-bold' : 'text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container hover:text-primary-blue dark:hover:text-primary-fixed-dim'}`}>Semua</NavLink>
                <NavLink to="/events" className={({isActive}) => `px-4 py-2 text-body-sm transition-colors ${isActive ? 'bg-surface-container text-secondary-blue dark:text-primary-fixed-dim font-bold' : 'text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container hover:text-primary-blue dark:hover:text-primary-fixed-dim'}`}>Acara</NavLink>
                <NavLink to="/recruitments" className={({isActive}) => `px-4 py-2 text-body-sm transition-colors ${isActive ? 'bg-surface-container text-secondary-blue dark:text-primary-fixed-dim font-bold' : 'text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container hover:text-primary-blue dark:hover:text-primary-fixed-dim'}`}>Rekrutmen</NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/merchandise" className={getLinkClass}>Merchandise</NavLink>
          <NavLink to="/article" className={getLinkClass}>Article</NavLink>
          <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
        </nav>

        {/* Profile / Actions */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-md">
          <Link to="/merchandise/cart" className="p-1 md:p-2 text-on-surface-variant hover:text-primary-blue transition-colors flex items-center justify-center relative">
            <span className="material-symbols-outlined text-[20px] md:text-[24px]">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 md:top-0 md:right-0 bg-error text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-surface-container-lowest">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Link>
          
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <div 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-variant overflow-hidden border-2 border-border cursor-pointer hover:border-primary-blue transition-colors shrink-0 flex items-center justify-center"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <img src="https://ui-avatars.com/api/?name=Student+User&background=2E7D32&color=fff&size=128" alt="Profile" className="w-full h-full object-cover object-center" />
            </div>
            
            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-surface-container-lowest dark:bg-inverse-surface border border-border dark:border-outline-variant rounded-lg shadow-lg py-2 flex flex-col z-50 animate-fade-in-down">
                <div className="px-4 py-2 border-b border-border mb-1">
                  <p className="text-body-sm font-bold text-on-surface">Student User</p>
                  <p className="text-label-sm text-on-surface-variant">student@campus.edu</p>
                </div>
                <Link to="/profile" className={`px-4 py-2 text-body-sm transition-colors flex items-center gap-2 ${location.pathname === '/profile' ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-blue'}`} onClick={() => setIsProfileDropdownOpen(false)}>
                  <span className="material-symbols-outlined text-[18px]">dashboard</span> Activity Hub
                </Link>
                <Link to="/tickets" className={`px-4 py-2 text-body-sm transition-colors flex items-center gap-2 ${location.pathname === '/tickets' ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-blue'}`} onClick={() => setIsProfileDropdownOpen(false)}>
                  <span className="material-symbols-outlined text-[18px]">confirmation_number</span> My E-Tickets
                </Link>
                <Link to="/certificates" className={`px-4 py-2 text-body-sm transition-colors flex items-center gap-2 ${location.pathname === '/certificates' ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-blue'}`} onClick={() => setIsProfileDropdownOpen(false)}>
                  <span className="material-symbols-outlined text-[18px]">workspace_premium</span> E-Certificates
                </Link>
                <Link to="/history" className={`px-4 py-2 text-body-sm transition-colors flex items-center gap-2 ${location.pathname === '/history' ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-blue'}`} onClick={() => setIsProfileDropdownOpen(false)}>
                  <span className="material-symbols-outlined text-[18px]">history</span> Transactions
                </Link>
                <Link to="/settings" className={`px-4 py-2 text-body-sm transition-colors flex items-center gap-2 ${location.pathname === '/settings' ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-blue'}`} onClick={() => setIsProfileDropdownOpen(false)}>
                  <span className="material-symbols-outlined text-[18px]">settings</span> Settings
                </Link>
                <div className="border-t border-border my-1"></div>
                <button className="px-4 py-2 text-left text-body-sm text-error hover:bg-surface-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">logout</span> Logout
                </button>
              </div>
            )}
          </div>

          <button className="md:hidden p-1 text-on-surface-variant hover:text-primary-blue transition-colors flex items-center justify-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-[24px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full flex flex-col px-margin-mobile py-4 gap-4 border-t border-b border-border dark:border-outline-variant bg-surface-container-lowest font-body-md text-body-md shadow-lg z-50">
          <div>
            <div 
              className={`flex items-center justify-between cursor-pointer ${isExploreActive ? 'text-secondary-blue font-bold' : 'text-on-surface-variant'}`}
              onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
            >
              <span>Eksplorasi</span>
              <span className={`material-symbols-outlined transition-transform ${isMobileExploreOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </div>
            {isMobileExploreOpen && (
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-border ml-2 mt-3 animate-fade-in-down">
                <NavLink end to="/explore" className={({isActive}) => `text-body-sm ${isActive ? 'text-secondary-blue font-bold' : 'text-on-surface-variant'}`} onClick={() => setIsMobileMenuOpen(false)}>Semua</NavLink>
                <NavLink to="/events" className={({isActive}) => `text-body-sm ${isActive ? 'text-secondary-blue font-bold' : 'text-on-surface-variant'}`} onClick={() => setIsMobileMenuOpen(false)}>Acara</NavLink>
                <NavLink to="/recruitments" className={({isActive}) => `text-body-sm ${isActive ? 'text-secondary-blue font-bold' : 'text-on-surface-variant'}`} onClick={() => setIsMobileMenuOpen(false)}>Rekrutmen</NavLink>
                <NavLink to="/challenges" className={({isActive}) => `text-body-sm ${isActive ? 'text-secondary-blue font-bold' : 'text-on-surface-variant'}`} onClick={() => setIsMobileMenuOpen(false)}>Tantangan</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/merchandise" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Merchandise</NavLink>
          <NavLink to="/article" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Article</NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
