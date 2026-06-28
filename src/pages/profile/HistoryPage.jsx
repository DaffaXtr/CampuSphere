import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProfileSidebar from '../../components/profile/ProfileSidebar';

const dummyHistory = [
  {
    id: 'CS-MERCH-88219',
    type: 'merchandise',
    date: '10 Jun 2026, 14:30',
    items: [
      { name: 'Official Campus Hoodie - Navy', qty: 1 },
      { name: 'Classic Enamel Pin Set', qty: 1 }
    ],
    totalAmount: 'Rp 177.000',
    status: 'success' // success, pending, failed
  },
  {
    id: 'CS-EVT-99201',
    type: 'event',
    date: '08 Jun 2026, 09:15',
    items: [
      { name: 'Tech Innovation Summit 2026 (VIP Ticket)', qty: 2 }
    ],
    totalAmount: 'Rp 300.000',
    status: 'success'
  },
  {
    id: 'CS-MERCH-77102',
    type: 'merchandise',
    date: '01 Jun 2026, 11:20',
    items: [
      { name: 'Campus Tumbler Edition', qty: 1 }
    ],
    totalAmount: 'Rp 85.000',
    status: 'pending'
  },
  {
    id: 'CS-EVT-44021',
    type: 'event',
    date: '25 May 2026, 16:45',
    items: [
      { name: 'Workshop: Intro to UI/UX', qty: 1 }
    ],
    totalAmount: 'Rp 50.000',
    status: 'failed'
  }
];

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['All', 'Merchandise', 'Events'];

  const filteredHistory = dummyHistory.filter(item => {
    // Filter by Tab
    const matchesTab = 
      activeTab === 'All' || 
      (activeTab === 'Merchandise' && item.type === 'merchandise') || 
      (activeTab === 'Events' && item.type === 'event');
    
    // Filter by Search Query
    const matchesSearch = item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.items.some(prod => prod.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case 'success':
        return (
          <span className="px-3 py-0.5 bg-success/10 text-success text-[11px] font-bold rounded-full flex items-center gap-1 border border-success/20">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Berhasil
          </span>
        );
      case 'pending':
        return (
          <span className="px-3 py-0.5 bg-warning/10 text-warning text-[11px] font-bold rounded-full flex items-center gap-1 border border-warning/20">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            Menunggu Pembayaran
          </span>
        );
      case 'failed':
        return (
          <span className="px-3 py-0.5 bg-error/10 text-error text-[11px] font-bold rounded-full flex items-center gap-1 border border-error/20">
            <span className="material-symbols-outlined text-[14px]">cancel</span>
            Dibatalkan
          </span>
        );
      default:
        return null;
    }
  };

  const getIconByType = (type) => {
    return type === 'merchandise' ? 'shopping_bag' : 'local_activity';
  };

  const getCardBgByType = (type) => {
    return type === 'merchandise' 
      ? 'bg-soft-yellow text-dark-yellow' 
      : 'bg-primary-blue/10 text-primary-blue';
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col relative text-left">
      
      {/* Main Layout Container: 2 Columns */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch">
        
        {/* Left Side: Sidebar */}
        <ProfileSidebar activeTab="history" />

        {/* Right Side: Content Area */}
        <main className="flex-1 py-md md:py-xl px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
          
          {/* Breadcrumb & Header */}
          <div>
            <header className="mb-md hidden md:block">
              <Breadcrumb items={[
                { label: 'Profile', path: '/profile' },
                { label: 'Transactions' }
              ]} />
            </header>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-border/60 pb-md mb-lg">
              <div>
                <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">
                  Riwayat Transaksi
                </h1>
                <p className="font-body-md text-body-md text-text-secondary">
                  Daftar transaksi merchandise resmi dan tiket event kampus Anda.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">search</span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari Order ID / barang..." 
                  className="pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl focus:ring-1 focus:ring-primary-blue focus:border-primary-blue outline-none text-sm w-full sm:w-64 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-md border-b border-border pb-1 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-label-md transition-colors border-b-2 whitespace-nowrap px-md text-sm ${
                  activeTab === tab 
                    ? 'text-primary-blue border-primary-blue font-bold' 
                    : 'text-text-secondary border-transparent hover:text-text-primary'
                }`}
              >
                {tab === 'All' ? 'Semua Transaksi' : tab === 'Merchandise' ? 'Merchandise' : 'Tiket Event'}
              </button>
            ))}
          </div>

          {/* History List */}
          <div className="flex flex-col gap-md">
            {filteredHistory.length === 0 ? (
              <div className="text-center py-3xl bg-white border border-border border-dashed rounded-2xl flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-[48px] text-text-secondary mb-md">receipt_long</span>
                <h2 className="font-bold text-lg text-text-primary mb-xs">Belum Ada Transaksi</h2>
                <p className="text-text-secondary text-sm max-w-xs">Anda belum melakukan transaksi di kategori ini.</p>
              </div>
            ) : (
              filteredHistory.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white border border-border rounded-2xl p-md sm:p-lg transition-all duration-300 relative overflow-hidden group shadow-sm ${
                    item.type === 'merchandise' 
                      ? 'hover:border-primary-yellow/40' 
                      : 'hover:border-primary-blue/40'
                  }`}
                >
                  {/* Decorative side accent bar */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full transition-opacity ${
                    item.type === 'merchandise' 
                      ? 'bg-primary-yellow opacity-30 group-hover:opacity-100' 
                      : 'bg-primary-blue opacity-30 group-hover:opacity-100'
                  }`}></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-md border-b border-border/40 pb-md pl-2">
                    <div className="flex items-center gap-sm">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getCardBgByType(item.type)}`}>
                        <span className="material-symbols-outlined text-[20px]">{getIconByType(item.type)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-0.5">
                          {item.type === 'merchandise' ? 'Belanja Merchandise' : 'Tiket Event'}
                        </span>
                        <span className="font-bold text-text-primary text-sm">{item.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2">
                      {getStatusBadge(item.status)}
                      <span className="text-[11px] text-text-secondary font-mono">{item.id}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md pl-2">
                    <div className="space-y-1">
                      {item.items.map((prod, idx) => (
                        <div key={idx} className="text-sm text-text-primary">
                          <span className="font-bold text-text-secondary mr-1">{prod.qty}x</span> {prod.name}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto mt-md sm:mt-0 pt-md sm:pt-0 border-t border-border/40 sm:border-t-0">
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 w-full sm:w-auto">
                        <span className="text-xs text-text-secondary">Total Belanja</span>
                        <span className={`font-bold text-base md:text-lg ${
                          item.type === 'merchandise' ? 'text-dark-yellow' : 'text-primary-blue'
                        }`}>
                          {item.totalAmount}
                        </span>
                      </div>
                      
                      <div className="flex gap-2 w-full sm:w-auto mt-2">
                        {item.status === 'pending' && (
                          <button 
                            onClick={() => navigate(`/merchandise/1/payment`)} 
                            className="flex-1 sm:flex-none px-md py-2 bg-primary-yellow hover:bg-secondary-yellow text-text-primary rounded-xl font-bold text-xs transition-colors shadow-sm whitespace-nowrap"
                          >
                            Lanjut Bayar
                          </button>
                        )}
                        <button className="flex-1 sm:flex-none px-md py-2 bg-surface hover:bg-surface-container-high border border-border text-text-primary rounded-xl font-bold text-xs transition-colors whitespace-nowrap">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HistoryPage;
