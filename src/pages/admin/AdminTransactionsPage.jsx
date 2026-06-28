import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
import AdminTransactionForm from './AdminTransactionForm';
import { transactionsData as initialTransactions } from '../../data/transactionsData';

const formatRupiah = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;

const AdminTransactionsPage = () => {
  const [transactions, setTransactions] = useState([...initialTransactions]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [filterPayment, setFilterPayment] = useState('Semua');
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statuses = ['Semua', 'Pending', 'Berhasil', 'Dibatalkan'];
  const paymentMethods = ['Semua', 'Transfer Bank', 'E-Wallet', 'Virtual Account'];

  const filteredTransactions = transactions.filter((trx) => {
    const searchMatch =
      trx.invoiceCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.buyerName.toLowerCase().includes(searchQuery.toLowerCase());
    const statusMatch = filterStatus === 'Semua' || trx.status === filterStatus;
    const paymentMatch = filterPayment === 'Semua' || trx.paymentMethod === filterPayment;
    return searchMatch && statusMatch && paymentMatch;
  });

  const handleSaveTransaction = (transactionData) => {
    if (editingTransaction) {
      setTransactions((prev) => prev.map((trx) => (
        trx.id === editingTransaction.id
          ? { ...transactionData, id: editingTransaction.id, invoiceCode: editingTransaction.invoiceCode }
          : trx
      )));
      setEditingTransaction(null);
    } else {
      const nextId = Math.max(...transactions.map((trx) => trx.id), 0) + 1;
      setTransactions((prev) => ([
        ...prev,
        { ...transactionData, id: nextId, invoiceCode: `TRX-${String(nextId).padStart(4, '0')}` }
      ]));
    }
    setShowForm(false);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((trx) => trx.id !== id));
    setDeleteConfirm(null);
  };

  const totalRevenue = transactions
    .filter((trx) => trx.status === 'Berhasil')
    .reduce((sum, trx) => sum + (trx.numericTotal || 0), 0);

  return (
    <div className="min-h-screen bg-background flex flex-col xl:flex-row w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <AdminTopbar />
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          {showForm ? (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => { setShowForm(false); setEditingTransaction(null); }} className="text-text-secondary hover:text-[#1E5EF3] flex items-center gap-1.5 text-xs font-bold transition-colors">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Kembali ke Manajemen Transaksi
                </button>
              </div>

              <AdminTransactionForm
                key={editingTransaction ? `trx-${editingTransaction.id}` : 'trx-new'}
                transaction={editingTransaction}
                onSave={handleSaveTransaction}
                onCancel={() => { setShowForm(false); setEditingTransaction(null); }}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                    Manajemen Transaksi
                  </h1>
                  <p className="text-text-secondary text-xs mt-1">Pantau semua pesanan merchandise, status pembayaran, dan riwayat transaksi pembeli</p>
                </div>
                <button
                  onClick={() => { setEditingTransaction(null); setShowForm(true); }}
                  className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add_card</span>
                  Tambah Transaksi
                </button>
              </div>

              {/* 3-Column Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Transaksi</p>
                    <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{transactions.length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Transaksi Berhasil</p>
                    <p className="text-2xl font-black text-[#10B981] mt-1 leading-none">{transactions.filter((trx) => trx.status === 'Berhasil').length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Pendapatan</p>
                    <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{formatRupiah(totalRevenue)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 md:p-5 border-b border-border flex flex-col gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                    <div className="relative md:col-span-2 xl:col-span-2">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[16px] pointer-events-none">search</span>
                      <input
                        type="text"
                        placeholder="Cari invoice, barang, atau pembeli..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F9FAFB] border border-border rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
                      />
                    </div>

                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>

                    <select value={filterPayment} onChange={(e) => setFilterPayment(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {paymentMethods.map((method) => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                        <th className="px-4 md:px-5 pb-3 pt-4">Invoice & Barang</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden md:table-cell">Pembeli</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Pembayaran</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Status</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Total</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[11px]">
                      {filteredTransactions.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-5 py-12 text-center text-text-secondary">
                            <span className="material-symbols-outlined text-3xl mb-1 block">search_off</span>
                            Tidak ada transaksi ditemukan
                          </td>
                        </tr>
                      ) : (
                        filteredTransactions.map((trx) => (
                          <tr key={trx.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center gap-3">
                                <img src={trx.itemImage} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50 flex-shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{trx.invoiceCode}</p>
                                  <p className="text-text-secondary text-[10px] truncate mt-0.5">{trx.itemName} x{trx.quantity}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden md:table-cell text-text-secondary">
                              <p className="font-bold text-text-primary">{trx.buyerName}</p>
                              <p className="text-[10px] mt-0.5 font-medium">{trx.createdAt}</p>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden lg:table-cell text-text-secondary font-medium">{trx.paymentMethod}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${
                                trx.status === 'Berhasil'
                                  ? 'bg-[#E6F4EA] text-[#10B981] border-[#D1FAE5]'
                                  : trx.status === 'Pending'
                                    ? 'bg-[#FFFBEB] text-[#F59E0B] border-[#FEF3C7]'
                                    : 'bg-[#FEE2E2] text-[#EF4444] border-[#FECACA]'
                              }`}>
                                {trx.status}
                              </span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-right font-bold text-[#1F2937]">{trx.totalPrice}</td>
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingTransaction(trx); setShowForm(true); }}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-[#1E5EF3] hover:bg-[#EBF3FF] transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(trx.id)}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-rose-500 hover:bg-rose-50 transition-colors"
                                  title="Hapus"
                                >
                                  <span className="material-symbols-outlined text-[16px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-text-secondary text-[10px] font-bold">
                    Menampilkan <span className="text-text-primary font-black">{filteredTransactions.length}</span> dari <span className="text-text-primary font-black">{transactions.length}</span> transaksi
                  </p>
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-[#1E5EF3] text-[10px] font-bold hover:underline">
                      Reset Pencarian
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Footer Section */}
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-[10px] font-bold text-text-secondary">
            <p>© 2025 CampuSphere • Fakultas Universitas Airlangga</p>
            <p>v1.0.0</p>
          </div>
        </div>
      </div>

      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-5 md:p-6 max-w-sm w-full shadow-lg border border-border">
            <h3 className="font-bold text-text-primary text-sm mb-2">Hapus Transaksi?</h3>
            <p className="text-text-secondary text-xs mb-4">Data transaksi yang dihapus tidak dapat dikembalikan. Lanjutkan?</p>
            <div className="flex items-center justify-end gap-2 text-xs font-bold">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteTransaction(deleteConfirm)}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white transition-colors"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTransactionsPage;
