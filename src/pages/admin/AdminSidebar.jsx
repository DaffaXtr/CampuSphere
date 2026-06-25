import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/admin' },
    { label: 'Artikel', icon: 'article', path: '/admin/articles' },
    { label: 'Events Data', icon: 'event', path: '/admin/events' },
    { label: 'Merchandise Data', icon: 'storefront', path: '/admin/merchandise' },
    { label: 'Manajemen Transaksi', icon: 'receipt_long', path: '/admin/transactions' },
    { label: 'Laporan Keuangan', icon: 'monitoring', path: '/admin/financial-report' },
    { label: 'Manajemen Pengguna', icon: 'groups', path: '/admin/users' },
    { label: 'Manajemen Organisasi', icon: 'apartment', path: '/admin/organizations' },
  ];

  return (
    <aside className="hidden xl:flex w-72 shrink-0">
      <div className="sticky top-[96px] h-[calc(100vh-128px)] w-full overflow-y-auto rounded-3xl border border-border bg-surface-container-lowest p-md shadow-sm text-left">
        <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">Admin Studio</p>
              <h2 className="mt-1 font-bold text-lg text-text-primary">Content Manager</h2>
              <p className="mt-1 text-xs text-text-secondary">Kelola konten publik dari satu panel.</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue text-white shadow-sm">
              <span className="material-symbols-outlined text-[24px]">admin_panel_settings</span>
            </div>
          </div>

          <div className="mt-md rounded-2xl bg-primary-blue/5 border border-primary-blue/10 p-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary-blue">Access level</p>
            <p className="mt-1 font-bold text-sm text-text-primary">Super Admin</p>
            <p className="text-xs text-text-secondary">Dashboard, artikel, event, merchandise, transaksi, laporan, user, dan organisasi.</p>
          </div>
        </div>

        <nav className="mt-md flex flex-col gap-2">
          <p className="px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">Navigation</p>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) => (
                `flex items-center gap-md px-md py-3 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                    : 'bg-white text-text-secondary border-border/70 hover:border-primary-blue/40 hover:text-primary-blue hover:bg-surface-container-low'
                }`
              )}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label-md text-label-md">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-md rounded-2xl bg-text-primary text-white p-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">Tip</p>
          <p className="mt-1 text-xs leading-relaxed text-white/85">
            Gunakan panel ini untuk berpindah cepat antar dashboard, artikel, event, merchandise, transaksi, laporan, pengguna, dan organisasi.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;