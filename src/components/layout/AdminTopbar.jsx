import { useState } from 'react';

const AdminTopbar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white border-b border-border w-full sticky top-0 z-40 h-20 shrink-0 flex items-center px-6 md:px-8">
      <div className="flex justify-between items-center w-full">
        {/* Left Section: Menu & Search */}
        <div className="flex items-center gap-6 flex-1 max-w-xl">
          {/* Hamburger Menu (visible on mobile, triggers sidebar) */}
          <button 
            onClick={() => window.dispatchEvent(new Event('toggle-admin-sidebar'))}
            className="xl:hidden text-text-secondary hover:text-text-primary focus:outline-none flex items-center justify-center p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          {/* Search bar */}
          <div className="relative w-full max-w-md hidden md:block">
            <input
              type="text"
              placeholder="Cari artikel, produk, event, pengguna..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-slate-50 border border-border rounded-full pl-6 pr-12 py-2.5 text-xs text-text-primary placeholder-text-secondary focus:outline-none focus:border-[#1E5EF3] focus:bg-white transition-all"
            />
            <span className="material-symbols-outlined text-text-secondary absolute right-4 top-1/2 -translate-y-1/2 text-[18px]">
              search
            </span>
          </div>
        </div>

        {/* Right Section: Notification & Profile */}
        <div className="flex items-center gap-6">
          {/* Notification Button */}
          <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 bg-[#EB5757] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              12
            </span>
          </button>

          {/* Vertical Divider */}
          <div className="h-8 w-px bg-border hidden sm:block"></div>

          {/* Admin Profile */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border group-hover:border-[#1E5EF3] transition-colors shrink-0 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
                alt="Admin Utama"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Admin+Utama&background=1E5EF3&color=fff&size=128';
                }}
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-text-primary group-hover:text-[#1E5EF3] transition-colors">
                Admin Utama
              </span>
              <span className="text-[10px] text-text-secondary font-medium mt-0.5">
                Super Admin
              </span>
            </div>
            <span className="material-symbols-outlined text-text-secondary text-[18px] hidden sm:block">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
