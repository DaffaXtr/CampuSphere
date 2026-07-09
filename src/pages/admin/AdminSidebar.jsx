import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/explore', { replace: true });
  };

  useEffect(() => {
    const handleToggle = () => setIsMobileOpen((prev) => !prev);
    window.addEventListener('toggle-admin-sidebar', handleToggle);
    return () => window.removeEventListener('toggle-admin-sidebar', handleToggle);
  }, []);

  const menuGroups = [
    {
      title: 'MANAJEMEN KONTEN',
      items: [
        { label: 'Artikel', icon: 'article', path: '/admin/articles' },
        { label: 'Produk', icon: 'storefront', path: '/admin/merchandise' },
        { label: 'Event', icon: 'event', path: '/admin/events' },
        { label: 'Pengumuman', icon: 'campaign', path: '/admin/announcements' },
      ],
    },
    {
      title: 'MANAJEMEN PENGGUNA',
      items: [
        { label: 'Pengguna', icon: 'groups', path: '/admin/users' },
        { label: 'Organisasi', icon: 'apartment', path: '/admin/organizations' },
        { label: 'Role & Permission', icon: 'key', path: '/admin/roles' },
      ],
    },
    {
      title: 'MANAJEMEN TRANSAKSI',
      items: [
        { label: 'Transaksi', icon: 'receipt_long', path: '/admin/transactions' },
        { label: 'Pencairan Dana', icon: 'payments', path: '/admin/disbursements' },
        { label: 'Laporan Keuangan', icon: 'monitoring', path: '/admin/financial-report' },
      ],
    },
    {
      title: 'SISTEM',
      items: [
        { label: 'Pengaturan', icon: 'settings', path: '/admin/settings' },
        { label: 'Log Aktivitas', icon: 'history', path: '/admin/logs' },
      ],
    },
  ];

  const renderSidebarContent = (onItemClick) => (
    <div className="w-full flex flex-col h-full bg-white overflow-hidden">
      {/* Sticky Logo Header */}
      <div className="w-full p-6 pb-4 flex items-center justify-between shrink-0 bg-white z-10 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="font-bold text-base text-[#0F52BA] leading-none tracking-wide">CAMPUSPHERE</h2>
            <p className="text-[11px] font-semibold text-text-secondary mt-1">Admin Fakultas</p>
          </div>
        </div>
        {onItemClick && (
          <button
            onClick={onItemClick}
            className="xl:hidden text-text-secondary hover:text-text-primary focus:outline-none flex items-center justify-center p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col justify-between">
        <div className="w-full px-6 py-6 flex flex-col text-left">
          {/* Menu Groups */}
          <div className="flex flex-col gap-6">
          <NavLink
            to="/admin"
            end
            onClick={onItemClick}
            className={({ isActive }) => (
              `flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E5EF3] text-white border-[#1E5EF3] shadow-sm font-semibold'
                  : 'bg-transparent text-text-secondary border-transparent hover:text-text-primary hover:bg-slate-50'
              }`
            )}
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="text-sm">Dashboard Utama</span>
          </NavLink>
          {menuGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-1">
              <p className="px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary mb-1">
                {group.title}
              </p>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/admin'}
                  onClick={onItemClick}
                  className={({ isActive }) => (
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? 'bg-[#1E5EF3] text-white border-[#1E5EF3] shadow-sm font-semibold'
                        : 'bg-transparent text-text-secondary border-transparent hover:text-text-primary hover:bg-slate-50'
                    }`
                  )}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
          {/* Logout Button */}
          <div className="pt-2 border-t border-border/40">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-100 transition-all duration-200 text-left w-full font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="text-sm">Keluar Akun</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer/Banner di paling bawah Sidebar */}
      <div className="p-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#EBF3FF] border border-[#D0E2FF] p-4 flex flex-col gap-2">
          <div className="z-10">
            <h4 className="font-bold text-xs text-[#0F52BA]">Fakultas Maju,</h4>
            <p className="text-[11px] text-text-secondary font-medium">Ekosistem Terintegrasi</p>
          </div>
          <button className="z-10 mt-2 self-start rounded-lg bg-[#1E5EF3] px-3 py-1.5 text-[9px] font-bold text-white hover:bg-[#0F52BA] transition-all flex items-center gap-1 shadow-sm">
            Lihat Statistik Lengkap
            <span className="material-symbols-outlined text-[8px] font-bold">arrow_forward</span>
          </button>
          {/* Hiasan gedung siluet */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[72px] text-[#0F52BA]">domain</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:flex w-72 shrink-0 bg-white border-r border-border h-screen sticky top-0 flex-col justify-between">
        {renderSidebarContent()}
      </aside>

      {/* Mobile/Tablet Drawer Sidebar */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 xl:hidden transition-all duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-border h-screen flex flex-col justify-between transform transition-transform duration-300 xl:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {renderSidebarContent(() => setIsMobileOpen(false))}
      </aside>
    </>
  );
};

export default AdminSidebar;