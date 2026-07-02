import { Link } from 'react-router-dom';

const ProfileSidebar = ({ activeTab }) => {
  const menuItems = [
    {
      id: 'hub',
      label: 'Activity Hub',
      icon: 'dashboard',
      path: '/profile'
    },
    {
      id: 'tickets',
      label: 'My E-Tickets',
      icon: 'confirmation_number',
      path: '/tickets'
    },
    {
      id: 'certificates',
      label: 'E-Certificates',
      icon: 'workspace_premium',
      path: '/certificates'
    },
    {
      id: 'history',
      label: 'Transactions',
      icon: 'history',
      path: '/history'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      path: '/settings'
    }
  ];

  return (
    <aside className="hidden md:flex w-72 bg-surface border-r border-border p-md md:p-lg flex-col gap-md shrink-0 sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto hide-scrollbar">
      
      {/* Student Identity Widget */}
      <div className="px-md py-md bg-white rounded-xl border border-border shadow-sm text-left">
        <div className="flex items-start justify-between mb-sm">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-border bg-surface-container-high shrink-0">
            <img 
              alt="Daffa Eka Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXdMNHYXEridbxzZjCuV8_6AIF4dz-2maZTcytehk3UX-6hevUDytjNVlxuTHuLfDybfLtQkYhHo8qDSiXdK8Z3KHl0tvu3C-zILvkFAil0N4Ru_66xwrmNfaTO9AHGKOVxRIPvnq4REp7jUqL4OORRNo-T-l71qwd92bS0Khgl2sRKBLAgR0lEPZHo4cOnqqpZEc3OcPHca1zbrKo5Nt8skOv1gtzZGdOwQ2rNl4RQHbwh6L17z3U7-AUS9dc0nhoKmDfw-BFVvJu" 
            />
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue font-label-sm text-[10px] border border-primary-blue/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-1"></span>
            Active Student
          </span>
        </div>
        <h2 className="font-bold text-base text-text-primary">Daffa Eka</h2>
        <p className="text-xs text-text-primary font-mono mt-0.5">NIM: 123456789</p>
        <p className="text-xs text-text-secondary mt-1">S1 Teknik Informatika</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-xs">
        {menuItems.map(item => {
          const isActive = activeTab === item.id;
          return (
            <Link 
              key={item.id}
              to={item.path} 
              className={`flex items-center gap-md p-md rounded-xl transition-all ${
                isActive 
                  ? 'bg-primary-blue text-white shadow-sm' 
                  : 'text-text-secondary hover:bg-white hover:border-border border border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label-md text-label-md">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="md:mt-auto border-t border-border/60 pt-md flex flex-col gap-xs">
        <Link to="/about" className="flex items-center gap-md p-md text-text-secondary hover:bg-white hover:border-border border border-transparent rounded-xl transition-all">
          <span className="material-symbols-outlined text-[20px]">help</span>
          <span className="font-label-md text-label-md">Help Center</span>
        </Link>
        <button className="flex items-center gap-md p-md text-error hover:bg-error/5 rounded-xl transition-all text-left">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="font-label-md text-label-md">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
