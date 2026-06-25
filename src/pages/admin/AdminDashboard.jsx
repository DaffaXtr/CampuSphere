import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { articles } from '../../data/articlesData';
import { allEvents } from '../../data/eventsData';
import { allMerch } from '../../data/merchandiseData';
import { transactionsData } from '../../data/transactionsData';
import { usersData } from '../../data/usersData';
import { organizationsData } from '../../data/organizationsData';

const formatRupiah = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const summary = useMemo(() => {
    const revenue = transactionsData.filter((trx) => trx.status === 'Berhasil').reduce((sum, trx) => sum + Number(trx.numericTotal || 0), 0);

    return {
      articles: articles.length,
      events: allEvents.length,
      merchandise: allMerch.length,
      transactions: transactionsData.length,
      successfulTransactions: transactionsData.filter((trx) => trx.status === 'Berhasil').length,
      revenue,
      users: usersData.length,
      activeUsers: usersData.filter((user) => user.status === 'Aktif').length,
      organizations: organizationsData.length,
      activeOrganizations: organizationsData.filter((organization) => organization.status === 'Aktif').length
    };
  }, []);

  const menuCards = [
    { title: 'Artikel', description: 'Kelola konten berita, insight, dan informasi kampus.', icon: 'article', value: summary.articles, to: '/admin/articles' },
    { title: 'Events Data', description: 'Atur daftar event, format, harga, dan kategori.', icon: 'event', value: summary.events, to: '/admin/events' },
    { title: 'Merchandise', description: 'Kelola katalog produk, store, dan harga.', icon: 'storefront', value: summary.merchandise, to: '/admin/merchandise' },
    { title: 'Transaksi', description: 'Pantau transaksi dan total pendapatan.', icon: 'receipt_long', value: summary.transactions, to: '/admin/transactions' },
    { title: 'Laporan Keuangan', description: 'Unduh laporan PDF keuangan terbaru.', icon: 'monitoring', value: summary.revenue, to: '/admin/financial-report', formattedValue: formatRupiah(summary.revenue) },
    { title: 'Pengguna', description: 'Kelola akun pengguna dan akses admin.', icon: 'groups', value: summary.users, to: '/admin/users' },
    { title: 'Organisasi', description: 'Atur data organisasi, ketua, dan status.', icon: 'apartment', value: summary.organizations, to: '/admin/organizations' }
  ];

  const quickStats = [
    { label: 'Artikel', value: summary.articles, helper: 'Konten aktif' },
    { label: 'Event', value: summary.events, helper: 'Kegiatan terdaftar' },
    { label: 'Merchandise', value: summary.merchandise, helper: 'Produk katalog' },
    { label: 'Transaksi Berhasil', value: summary.successfulTransactions, helper: 'Order selesai' },
    { label: 'Pendapatan', value: formatRupiah(summary.revenue), helper: 'Akumulasi sukses' },
    { label: 'Pengguna Aktif', value: summary.activeUsers, helper: 'Akun aktif' },
    { label: 'Organisasi Aktif', value: summary.activeOrganizations, helper: 'Komunitas berjalan' }
  ];

  const recentTransactions = transactionsData.slice(0, 5);
  const recentArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-lg items-start">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-blue">Admin Overview</p>
              <h1 className="mt-1 font-headline-lg text-2xl md:text-[32px] text-text-primary">Dashboard Utama</h1>
              <p className="text-text-secondary text-sm mt-1">Ringkasan semua menu admin dalam satu tampilan.</p>
            </div>
            <div className="rounded-2xl border border-primary-blue/10 bg-primary-blue/5 px-md py-3 text-sm text-primary-blue font-semibold">
              Kelola semua modul dari panel ini
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md mb-lg">
            {quickStats.slice(0, 4).map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-white p-md shadow-sm">
                <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">{item.label}</p>
                <p className="mt-2 text-3xl font-black text-text-primary">{item.value}</p>
                <p className="mt-1 text-xs text-text-secondary">{item.helper}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
            {quickStats.slice(4).map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-white p-md shadow-sm">
                <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">{item.label}</p>
                <p className="mt-2 text-2xl font-black text-text-primary">{item.value}</p>
                <p className="mt-1 text-xs text-text-secondary">{item.helper}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-lg mb-lg">
            <section className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              <div className="p-md md:p-lg border-b border-border flex items-center justify-between gap-sm">
                <div>
                  <h2 className="font-bold text-text-primary">Menu Admin</h2>
                  <p className="text-xs text-text-secondary mt-1">Akses cepat ke seluruh modul pengelolaan.</p>
                </div>
              </div>

              <div className="p-md md:p-lg grid grid-cols-1 sm:grid-cols-2 gap-md">
                {menuCards.map((card) => (
                  <Link
                    key={card.title}
                    to={card.to}
                    className="group rounded-2xl border border-border bg-surface-container-low p-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-blue/30 hover:bg-ultra-light-blue"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary-blue">{card.title}</p>
                        <h3 className="mt-1 font-bold text-lg text-text-primary">{card.formattedValue || card.value}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-text-secondary">{card.description}</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-blue text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                        <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                      </div>
                    </div>
                    <div className="mt-md inline-flex items-center gap-1 text-xs font-semibold text-primary-blue">
                      Buka menu
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              <div className="p-md md:p-lg border-b border-border flex items-center justify-between gap-sm">
                <div>
                  <h2 className="font-bold text-text-primary">Aktivitas Terkini</h2>
                  <p className="text-xs text-text-secondary mt-1">Transaksi terbaru dan artikel terbaru.</p>
                </div>
              </div>

              <div className="p-md md:p-lg space-y-md">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary mb-2">Transaksi Terbaru</p>
                  <div className="space-y-2">
                    {recentTransactions.map((trx) => (
                      <div key={trx.id} className="rounded-xl border border-border bg-surface p-md flex items-center gap-sm">
                        <img src={trx.itemImage} alt="" className="w-12 h-12 rounded-lg object-cover border border-border" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-text-primary truncate">{trx.invoiceCode} - {trx.itemName}</p>
                          <p className="text-xs text-text-secondary truncate">{trx.buyerName} • {trx.status} • {trx.totalPrice}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary mb-2">Artikel Terbaru</p>
                  <div className="space-y-2">
                    {recentArticles.map((article) => (
                      <div key={article.id} className="rounded-xl border border-border bg-surface p-md flex items-center gap-sm">
                        <img src={article.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-border" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-text-primary truncate">{article.title}</p>
                          <p className="text-xs text-text-secondary truncate">{article.category} • {article.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
