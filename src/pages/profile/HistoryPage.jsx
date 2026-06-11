import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';

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
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['All', 'Merchandise', 'Events'];

  const filteredHistory = dummyHistory.filter(item => {
    if (activeTab === 'Merchandise') return item.type === 'merchandise';
    if (activeTab === 'Events') return item.type === 'event';
    return true;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case 'success':
        return <span className="px-sm py-xs bg-success/10 text-success text-label-sm font-bold rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Berhasil</span>;
      case 'pending':
        return <span className="px-sm py-xs bg-warning/10 text-warning text-label-sm font-bold rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> Menunggu Pembayaran</span>;
      case 'failed':
        return <span className="px-sm py-xs bg-error/10 text-error text-label-sm font-bold rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">cancel</span> Dibatalkan</span>;
      default:
        return null;
    }
  };

  const getIconByType = (type) => {
    return type === 'merchandise' ? 'shopping_bag' : 'local_activity';
  };

  const getCardBgByType = (type) => {
    return type === 'merchandise' ? 'bg-primary/5 text-primary' : 'bg-warning/10 text-warning';
  };

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <div className="mb-xl">
        <Breadcrumb items={[
          { label: 'Profile' },
          { label: 'Riwayat Transaksi' }
        ]} />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
        <h1 className="font-headline-lg text-headline-lg text-text-primary">Riwayat Transaksi</h1>
        
        {/* Search Bar - Optional UI element */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Cari Order ID..." 
            className="pl-10 pr-4 py-2 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-body-sm w-full md:w-64"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-md border-b border-border mb-xl overflow-x-auto no-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-sm font-label-md transition-colors border-b-2 whitespace-nowrap px-sm ${activeTab === tab ? 'text-primary border-primary' : 'text-text-secondary border-transparent hover:text-text-primary'}`}
          >
            {tab === 'All' ? 'Semua' : tab}
          </button>
        ))}
      </div>

      {/* History List */}
      <div className="space-y-md">
        {filteredHistory.length === 0 ? (
          <div className="text-center py-3xl bg-surface border border-border rounded-2xl">
            <span className="material-symbols-outlined text-[48px] text-outline-variant mb-md">receipt_long</span>
            <h2 className="font-headline-md text-text-primary mb-xs">Belum Ada Transaksi</h2>
            <p className="text-text-secondary">Anda belum melakukan transaksi di kategori ini.</p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-xl p-md sm:p-lg hover:border-primary/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-md border-b border-border pb-md">
                <div className="flex items-center gap-sm">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getCardBgByType(item.type)}`}>
                    <span className="material-symbols-outlined text-[20px]">{getIconByType(item.type)}</span>
                  </div>
                  <div>
                    <span className="text-label-sm text-text-secondary uppercase tracking-wider block mb-1">
                      {item.type === 'merchandise' ? 'Belanja Merchandise' : 'Tiket Event'}
                    </span>
                    <span className="font-bold text-text-primary text-label-md">{item.date}</span>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2">
                  {getStatusBadge(item.status)}
                  <span className="text-label-sm text-text-secondary font-mono">{item.id}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
                <div className="space-y-1">
                  {item.items.map((prod, idx) => (
                    <div key={idx} className="font-body-md text-text-primary">
                      <span className="font-semibold">{prod.qty}x</span> {prod.name}
                    </div>
                  ))}
                  {item.items.length > 1 && (
                    <div className="text-label-sm text-text-secondary mt-1">
                      + {item.items.length - 1} barang lainnya
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto mt-md sm:mt-0 pt-md sm:pt-0 border-t border-border sm:border-t-0">
                  <div className="flex flex-col sm:items-end">
                    <span className="text-label-sm text-text-secondary mb-1">Total Belanja</span>
                    <span className="font-bold text-headline-sm text-text-primary">{item.totalAmount}</span>
                  </div>
                  
                  <div className="flex gap-2 w-full sm:w-auto mt-2">
                    {item.status === 'pending' && (
                      <button 
                        onClick={() => navigate(`/merchandise/1/payment`)} 
                        className="flex-1 sm:flex-none px-md py-sm bg-primary text-white rounded-lg font-bold text-label-sm hover:bg-primary-hover transition-colors text-center"
                      >
                        Lanjut Bayar
                      </button>
                    )}
                    <button className="flex-1 sm:flex-none px-md py-sm bg-surface text-text-primary border border-border rounded-lg font-bold text-label-sm hover:bg-surface-container transition-colors text-center">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default HistoryPage;
