import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const summaryStats = [
    { label: 'Total Pengguna', value: '5.842', trend: '↑ 12,8%', helper: 'dari 30 hari lalu', icon: 'groups', iconColor: 'text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF]' },
    { label: 'Total Artikel', value: '346', trend: '↑ 9,6%', helper: 'dari 30 hari lalu', icon: 'article', iconColor: 'text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5]' },
    { label: 'Total Produk', value: '128', trend: '↑ 14,7%', helper: 'dari 30 hari lalu', icon: 'storefront', iconColor: 'text-[#8B5CF6] bg-[#F5F3FF] border-[#E9D5FF]' },
    { label: 'Total Event', value: '78', trend: '↑ 11,2%', helper: 'dari 30 hari lalu', icon: 'event', iconColor: 'text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7]' },
    { label: 'Total Transaksi', value: '1.256', trend: '↑ 18,3%', helper: 'dari 30 hari lalu', icon: 'receipt_long', iconColor: 'text-[#06B6D4] bg-[#ECFEFF] border-[#CFFAFE]' },
  ];

  const [activeBar, setActiveBar] = useState(null);

  const barChartData = [
    { month: 'Jan', year: '2025', count: '3.200', trend: '↑ 12%', trendColor: 'text-[#10B981]', height: 'h-[40%]' },
    { month: 'Feb', year: '2025', count: '4.100', trend: '↑ 28%', trendColor: 'text-[#10B981]', height: 'h-[50%]' },
    { month: 'Mar', year: '2025', count: '5.420', trend: '↑ 49%', trendColor: 'text-[#10B981]', height: 'h-[65%]' },
    { month: 'Apr', year: '2025', count: '3.500', trend: '↓ 35%', trendColor: 'text-[#EF4444]', height: 'h-[42%]' },
    { month: 'Mei', year: '2025', count: '5.000', trend: '↑ 42%', trendColor: 'text-[#10B981]', height: 'h-[60%]' },
    { month: 'Jun', year: '2025', count: '4.600', trend: '↓ 8%', trendColor: 'text-[#EF4444]', height: 'h-[55%]' },
  ];

  const donutCategories = [
    { name: 'Merchandise', percentage: '38%', value: 'Rp 95.214.000', color: 'bg-[#1E5EF3]' },
    { name: 'Tiket Event', percentage: '29%', value: 'Rp 72.685.000', color: 'bg-[#10B981]' },
    { name: 'Modul & Buku', percentage: '18%', value: 'Rp 45.632.000', color: 'bg-[#06B6D4]' },
    { name: 'Jaket & Korsa', percentage: '10%', value: 'Rp 25.183.000', color: 'bg-[#F59E0B]' },
    { name: 'Lainnya', percentage: '5%', value: 'Rp 12.391.000', color: 'bg-[#94A3B8]' },
  ];

  const newRegistrants = [
    { name: 'Nadia Putri', role: 'Mahasiswa', dept: 'D4 Teknik Informatika', date: '24 Jun 2025', status: 'Aktif', avatar: 'https://ui-avatars.com/api/?name=Nadia+Putri&background=EBF3FF&color=1E5EF3' },
    { name: 'Muhammad Farhan', role: 'Pengelola', dept: 'BEM FISIP 2025', date: '24 Jun 2025', status: 'Pending', avatar: 'https://ui-avatars.com/api/?name=Muhammad+Farhan&background=FFFBEB&color=F59E0B' },
    { name: 'Rizky Pratama', role: 'Mahasiswa', dept: 'D4 Manajemen', date: '23 Jun 2025', status: 'Aktif', avatar: 'https://ui-avatars.com/api/?name=Rizky+Pratama&background=EBF3FF&color=1E5EF3' },
    { name: 'Siti Aisyah', role: 'Pengelola', dept: 'HIMA Biologi', date: '23 Jun 2025', status: 'Aktif', avatar: 'https://ui-avatars.com/api/?name=Siti+Aisyah&background=EBF3FF&color=1E5EF3' },
    { name: 'Daffa Alvaro', role: 'Mahasiswa', dept: 'D4 Teknik Informatika', date: '22 Jun 2025', status: 'Aktif', avatar: 'https://ui-avatars.com/api/?name=Daffa+Alvaro&background=EBF3FF&color=1E5EF3' },
  ];

  const recentTransactions = [
    { id: 'TRX-250624-001', user: 'Stella Powell', item: 'Tiket Seminar Nasional', amount: 'Rp 75.000', status: 'Sukses' },
    { id: 'TRX-250624-002', user: 'Aaron Dunn', item: 'Jaket Korsa FISIP 2025', amount: 'Rp 210.000', status: 'Pending' },
    { id: 'TRX-250623-015', user: 'Eleanor Kim', item: 'Webinar UI/UX Design', amount: 'Rp 65.000', status: 'Sukses' },
    { id: 'TRX-250623-014', user: 'Joshua Cook', item: 'Buku Praktikum Akuntansi', amount: 'Rp 100.000', status: 'Gagal' },
    { id: 'TRX-250623-013', user: 'Anna Russell', item: 'Totebag CampuSphere', amount: 'Rp 45.000', status: 'Sukses' },
  ];

  const recentActivities = [
    { text: 'Artikel baru diterbitkan', desc: '"Tips Membuat Portofolio Menarik" oleh HIMA D4 TI', time: '10 menit yang lalu', icon: 'article', iconColor: 'text-[#1E5EF3] bg-[#EBF3FF]' },
    { text: 'Produk baru ditambahkan', desc: 'Jaket Korsa FISIP 2025 oleh BEM FISIP', time: '25 menit yang lalu', icon: 'shopping_bag', iconColor: 'text-[#10B981] bg-[#E6F4EA]' },
    { text: 'Event baru dibuat', desc: 'Workshop Data Analytics oleh HIMA Manajemen', time: '1 jam yang lalu', icon: 'calendar_today', iconColor: 'text-[#8B5CF6] bg-[#F5F3FF]' },
    { text: 'Pengguna baru terdaftar', desc: 'Muhammad Farhan sebagai Pengelola', time: '2 jam yang lalu', icon: 'person', iconColor: 'text-[#F59E0B] bg-[#FFFBEB]' },
    { text: 'Permintaan verifikasi organisasi', desc: 'HIMA Ekonomi menunggu persetujuan', time: '3 jam yang lalu', icon: 'shield', iconColor: 'text-[#06B6D4] bg-[#ECFEFF]' },
  ];

  const quickActions = [
    { label: 'Buat Pengumuman', icon: 'campaign', color: 'text-[#7E22CE] bg-[#F3E8FF] border-[#E9D5FF] hover:bg-[#E9D5FF]', to: '/admin/announcements' },
    { label: 'Tambah Artikel', icon: 'article', color: 'text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] hover:bg-[#D0E2FF]', to: '/admin/articles' },
    { label: 'Tambah Produk', icon: 'storefront', color: 'text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] hover:bg-[#D1FAE5]', to: '/admin/merchandise' },
    { label: 'Buat Event', icon: 'event', color: 'text-[#D946EF] bg-[#FAE8FF] border-[#F5D0FE] hover:bg-[#F5D0FE]', to: '/admin/events' },
    { label: 'Lihat Laporan Keuangan', icon: 'bar_chart', color: 'text-[#1E40AF] bg-[#EFF6FF] border-[#DBEAFE] hover:bg-[#DBEAFE]', to: '/admin/financial-report' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col xl:flex-row w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <AdminTopbar />
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                Selamat datang, Admin Utama! <span className="animate-bounce">👋</span>
              </h1>
              <p className="text-text-secondary text-xs mt-1">Berikut ringkasan performa platform CampuSphere hari ini.</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs text-text-secondary font-semibold shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>24 Mei - 24 Juni 2025</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
          </div>

          {/* 5-Column Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {summaryStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${item.iconColor} shadow-sm`}>
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{item.label}</p>
                  <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{item.value}</p>
                  <p className="text-[10px] text-text-secondary mt-1.5 flex items-center gap-1">
                    <span className="text-[#10B981] font-bold">{item.trend}</span>
                    <span>{item.helper}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Span: Charts and Tables */}
            <div className="xl:col-span-3 flex flex-col gap-6">
              {/* Row 1: Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bar Chart Card */}
                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-text-primary text-sm">Pertumbuhan Pengguna Baru</h3>
                    <div className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[10px] font-bold text-text-secondary cursor-pointer hover:bg-slate-50">
                      <span>6 Bulan Terakhir</span>
                      <span className="material-symbols-outlined text-[12px]">expand_more</span>
                    </div>
                  </div>
                  {/* Chart Container */}
                  <div className="h-48 flex items-end justify-between relative px-2 mb-4">
                    {/* Y-Axis labels */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] font-bold text-text-secondary select-none pointer-events-none">
                      <span>7K</span>
                      <span>6K</span>
                      <span>5K</span>
                      <span>4K</span>
                      <span>3K</span>
                      <span>2K</span>
                      <span>1K</span>
                    </div>
                    {/* Chart Bars */}
                    <div className="w-full h-full ml-8 flex items-end justify-between relative">
                      {barChartData.map((item) => {
                        const isActive = activeBar === item.month;
                        return (
                          <div
                            key={item.month}
                            className="flex flex-col items-center flex-1 h-full justify-end group cursor-pointer relative"
                            onMouseEnter={() => setActiveBar(item.month)}
                            onMouseLeave={() => setActiveBar(null)}
                          >
                            {/* Tooltip on Active/Hover */}
                            {isActive && (
                              <div className="absolute bottom-[70%] z-20 bg-slate-900 text-white rounded-xl p-3 text-left shadow-lg pointer-events-none w-36 transition-all duration-300">
                                <p className="text-[10px] text-slate-400 font-semibold">{item.month} {item.year}</p>
                                <p className="text-sm font-black mt-0.5">{item.count} Pengguna</p>
                                <p className={`text-[9px] ${item.trendColor} font-bold mt-1 flex items-center gap-0.5`}>
                                  <span>{item.trend}</span>
                                  <span className="text-slate-400 font-medium">dari bulan lalu</span>
                                </p>
                              </div>
                            )}
                            <div className={`w-8 rounded-t-lg transition-all duration-300 ${item.height} ${isActive ? 'bg-[#1E5EF3] shadow-lg shadow-blue-500/20' : 'bg-[#C2D6FF] group-hover:bg-[#99BBFF]'}`}></div>
                            <span className="text-[10px] font-bold text-text-secondary mt-2">{item.month}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Legend */}
                  <div className="flex items-center justify-center gap-2 mt-4 pt-2 border-t border-slate-50">
                    <span className="h-2 w-2 rounded-full bg-[#1E5EF3]"></span>
                    <span className="text-[10px] font-bold text-text-secondary">Pengguna Baru</span>
                  </div>
                </div>

                {/* Donut Chart Card */}
                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-text-primary text-sm">Transaksi per Kategori</h3>
                    <div className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[10px] font-bold text-text-secondary cursor-pointer hover:bg-slate-50">
                      <span>30 Hari Terakhir</span>
                      <span className="material-symbols-outlined text-[12px]">expand_more</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 h-48">
                    {/* SVG Donut Chart */}
                    <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        {/* Background ring */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#E2E8F0" strokeWidth="3" />
                        {/* Merchandise (38%) */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#1E5EF3" strokeWidth="4" strokeDasharray="38 62" strokeDashoffset="0" />
                        {/* Tiket Event (29%) */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#10B981" strokeWidth="4" strokeDasharray="29 71" strokeDashoffset="-38" />
                        {/* Modul & Buku (18%) */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#06B6D4" strokeWidth="4" strokeDasharray="18 82" strokeDashoffset="-67" />
                        {/* Jaket & Korsa (10%) */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#F59E0B" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-85" />
                        {/* Lainnya (5%) */}
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#94A3B8" strokeWidth="4" strokeDasharray="5 95" strokeDashoffset="-95" />
                      </svg>
                      {/* Inner circle */}
                      <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">
                        <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Total</span>
                        <span className="text-base font-black text-text-primary mt-1">Rp 251M</span>
                      </div>
                    </div>
                    {/* Legend */}
                    <div className="flex-1 flex flex-col justify-between h-full py-1">
                      {donutCategories.map((cat) => (
                        <div key={cat.name} className="flex items-center justify-between text-[11px] gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${cat.color}`}></span>
                            <span className="text-text-secondary font-medium truncate">{cat.name}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-bold text-text-primary">{cat.percentage}</span>
                            <span className="text-text-secondary font-medium ml-1">({cat.value.slice(0, 10)}...)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Tables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pendaftaran Terbaru */}
                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-text-primary text-sm">Pendaftaran Terbaru</h3>
                      <Link to="/admin/users" className="text-xs font-bold text-[#1E5EF3] hover:underline">
                        Lihat Semua
                      </Link>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                            <th className="pb-3">Nama</th>
                            <th className="pb-3">Role</th>
                            <th className="pb-3">Organisasi / Prodi</th>
                            <th className="pb-3">Tanggal</th>
                            <th className="pb-3 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-[11px]">
                          {newRegistrants.map((reg, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="py-2.5 flex items-center gap-2 font-semibold text-text-primary">
                                <img src={reg.avatar} className="w-6 h-6 rounded-full shrink-0 object-cover" alt="" />
                                <span className="truncate max-w-[80px]">{reg.name}</span>
                              </td>
                              <td className="py-2.5 text-text-secondary font-medium">{reg.role}</td>
                              <td className="py-2.5 text-text-secondary font-medium truncate max-w-[90px]">{reg.dept}</td>
                              <td className="py-2.5 text-text-secondary font-medium whitespace-nowrap">{reg.date}</td>
                              <td className="py-2.5 text-right">
                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold ${reg.status === 'Aktif' ? 'bg-[#E6F4EA] text-[#10B981] border border-[#D1FAE5]' : 'bg-[#FFFBEB] text-[#F59E0B] border border-[#FEF3C7]'}`}>
                                  {reg.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Transaksi Terbaru */}
                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-text-primary text-sm">Transaksi Terbaru</h3>
                      <Link to="/admin/transactions" className="text-xs font-bold text-[#1E5EF3] hover:underline">
                        Lihat Semua
                      </Link>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                            <th className="pb-3">ID Transaksi</th>
                            <th className="pb-3">Pengguna</th>
                            <th className="pb-3">Produk / Event</th>
                            <th className="pb-3">Jumlah</th>
                            <th className="pb-3 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-[11px]">
                          {recentTransactions.map((trx, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="py-2.5 font-bold text-[#1E5EF3]">{trx.id}</td>
                              <td className="py-2.5 font-semibold text-text-primary">{trx.user}</td>
                              <td className="py-2.5 text-text-secondary font-medium truncate max-w-[100px]">{trx.item}</td>
                              <td className="py-2.5 font-bold text-text-primary">{trx.amount}</td>
                              <td className="py-2.5 text-right">
                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold ${
                                  trx.status === 'Sukses' ? 'bg-[#E6F4EA] text-[#10B981] border border-[#D1FAE5]' :
                                  trx.status === 'Pending' ? 'bg-[#FFFBEB] text-[#F59E0B] border border-[#FEF3C7]' :
                                  'bg-[#FEE2E2] text-[#EF4444] border border-[#FEE2E2]'
                                }`}>
                                  {trx.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Span: Activities & Quick Actions */}
            <div className="xl:col-span-1 flex flex-col gap-6">
              {/* Aktivitas Terbaru */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-text-primary text-sm">Aktivitas Terbaru</h3>
                    <button className="text-xs font-bold text-[#1E5EF3] hover:underline">
                      Lihat Semua
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    {recentActivities.map((act, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${act.iconColor} border border-border/20`}>
                          <span className="material-symbols-outlined text-[16px]">{act.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1 text-left">
                          <p className="text-[11px] font-bold text-text-primary leading-snug">{act.text}</p>
                          <p className="text-[10px] text-text-secondary font-semibold leading-normal mt-0.5 truncate">{act.desc}</p>
                          <span className="text-[9px] text-text-secondary mt-1 block">{act.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Aksi Cepat */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <h3 className="font-bold text-text-primary text-sm mb-4 text-left">Aksi Cepat</h3>
                <div className="flex flex-col gap-2.5">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.to}
                      className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-xl border text-[11px] font-bold transition-all shadow-sm ${action.color}`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {action.label.startsWith('Lihat') ? action.icon : 'add'}
                      </span>
                      <span>{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-[10px] font-bold text-text-secondary">
            <p>© 2025 CampuSphere • Fakultas Universitas Airlangga</p>
            <p>v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
