import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
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

  if (showForm) {
    return (
      <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-lg items-start">
          <AdminSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-sm mb-lg">
              <button onClick={() => { setShowForm(false); setEditingTransaction(null); }} className="text-text-secondary hover:text-primary-blue flex items-center gap-1 text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Kembali
              </button>
            </div>

            <AdminTransactionForm
              key={editingTransaction ? `trx-${editingTransaction.id}` : 'trx-new'}
              transaction={editingTransaction}
              onSave={handleSaveTransaction}
              onCancel={() => { setShowForm(false); setEditingTransaction(null); }}
            />
          </div>
        </div>
      </div>
    );
  }

  const totalRevenue = transactions
    .filter((trx) => trx.status === 'Berhasil')
    .reduce((sum, trx) => sum + Number(trx.numericTotal || 0), 0);

  return (
    <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-lg items-start">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
            <div>
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Manajemen Transaksi</h1>
              <p className="text-text-secondary text-sm mt-1">Data barang mengikuti merchandiseData.js</p>
            </div>
            <button
              onClick={() => { setEditingTransaction(null); setShowForm(true); }}
              className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">add_card</span>
              Tambah Transaksi
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Transaksi</p>
              <p className="mt-2 text-3xl font-black text-text-primary">{transactions.length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Transaksi Berhasil</p>
              <p className="mt-2 text-3xl font-black text-primary-blue">{transactions.filter((trx) => trx.status === 'Berhasil').length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Pendapatan</p>
              <p className="mt-2 text-3xl font-black text-secondary-yellow">{formatRupiah(totalRevenue)}</p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border flex flex-col gap-md">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md">
                <div className="relative md:col-span-2 xl:col-span-2">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] pointer-events-none">search</span>
                  <input
                    type="text"
                    placeholder="Cari invoice, barang, atau pembeli..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
                  />
                </div>

                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>

                <select value={filterPayment} onChange={(e) => setFilterPayment(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Invoice & Barang</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden md:table-cell">Pembeli</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Pembayaran</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Status</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Total</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-lg py-3xl text-center text-text-secondary">
                        <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
                        Tidak ada transaksi ditemukan
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((trx) => (
                      <tr key={trx.id} className="hover:bg-surface/60 transition-colors">
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center gap-sm">
                            <img src={trx.itemImage} alt="" className="w-12 h-12 rounded-lg object-cover border border-border/50 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{trx.invoiceCode}</p>
                              <p className="text-text-secondary text-xs truncate">{trx.itemName} x{trx.quantity}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden md:table-cell text-text-secondary">
                          <p className="font-semibold text-text-primary">{trx.buyerName}</p>
                          <p className="text-xs">{trx.createdAt}</p>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden lg:table-cell text-text-secondary">{trx.paymentMethod}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden sm:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                            trx.status === 'Berhasil'
                              ? 'bg-success/10 text-success border-success/20'
                              : trx.status === 'Pending'
                                ? 'bg-secondary-yellow/15 text-secondary-yellow border-secondary-yellow/30'
                                : 'bg-error/10 text-error border-error/20'
                          }`}>
                            {trx.status}
                          </span>
                        </td>
                        <td className="px-md md:px-lg py-3 text-right font-semibold text-text-primary">{trx.totalPrice}</td>
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => { setEditingTransaction(trx); setShowForm(true); }}
                              className="p-2 rounded-lg text-text-secondary hover:text-primary-blue hover:bg-ultra-light-blue transition-colors"
                              title="Edit"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(trx.id)}
                              className="p-2 rounded-lg text-text-secondary hover:text-error hover:bg-error-container transition-colors"
                              title="Hapus"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-md md:p-lg border-t border-border flex items-center justify-between gap-md">
              <p className="text-text-secondary text-xs">
                Menampilkan <span className="font-bold text-text-primary">{filteredTransactions.length}</span> dari <span className="font-bold text-text-primary">{transactions.length}</span> transaksi
              </p>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-primary-blue text-xs font-semibold hover:underline">
                  Reset Pencarian
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-md">
          <div className="bg-white rounded-2xl p-lg md:p-xl max-w-md w-full shadow-lg">
            <h3 className="font-headline-lg text-lg text-text-primary mb-sm">Hapus Transaksi?</h3>
            <p className="text-text-secondary text-sm mb-lg">Data transaksi yang dihapus tidak dapat dikembalikan. Lanjutkan?</p>
            <div className="flex items-center justify-end gap-sm">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteTransaction(deleteConfirm)}
                className="px-lg py-2.5 rounded-xl bg-error hover:bg-error/90 text-white text-sm font-semibold transition-colors"
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
