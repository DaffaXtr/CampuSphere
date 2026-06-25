import { useState } from 'react';
import { allMerch } from '../../data/merchandiseData';

const formatRupiah = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;

const AdminTransactionForm = ({ transaction, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => ({
    buyerName: transaction?.buyerName || '',
    merchandiseId: transaction?.merchandiseId || allMerch[0]?.id || 1,
    quantity: transaction?.quantity || 1,
    paymentMethod: transaction?.paymentMethod || 'Transfer Bank',
    status: transaction?.status || 'Pending',
    createdAt: transaction?.createdAt || ''
  }));

  const selectedMerch = allMerch.find((item) => item.id === Number(formData.merchandiseId)) || allMerch[0];
  const numericTotal = Number(selectedMerch?.numericPrice || 0) * Number(formData.quantity || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'merchandiseId' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      merchandiseId: selectedMerch.id,
      itemName: selectedMerch.name,
      itemImage: selectedMerch.imageSrc,
      storeName: selectedMerch.storeName,
      unitPrice: formatRupiah(selectedMerch.numericPrice),
      totalPrice: formatRupiah(numericTotal),
      numericTotal
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">
        {transaction ? 'Edit Transaksi' : 'Tambah Transaksi Baru'}
      </h2>

      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Pembeli</label>
            <input
              type="text"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan nama pembeli"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Tanggal Transaksi</label>
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Barang</label>
            <select
              name="merchandiseId"
              value={formData.merchandiseId}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              {allMerch.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Jumlah</label>
            <input
              type="number"
              min="1"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Metode Pembayaran</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="E-Wallet">E-Wallet</option>
              <option value="Virtual Account">Virtual Account</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Pending">Pending</option>
              <option value="Berhasil">Berhasil</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
          </div>
        </div>

        {selectedMerch && (
          <div className="rounded-xl border border-border bg-surface p-md">
            <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Ringkasan Barang</p>
            <div className="mt-sm flex items-center gap-sm">
              <img src={selectedMerch.imageSrc} alt="" className="w-12 h-12 rounded-lg object-cover border border-border" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">{selectedMerch.name}</p>
                <p className="text-xs text-text-secondary">{selectedMerch.storeName}</p>
              </div>
            </div>
            <p className="mt-sm text-sm text-text-secondary">Total: <span className="font-bold text-text-primary">{formatRupiah(numericTotal)}</span></p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-sm mt-lg pt-lg border-t border-border">
        <button
          type="button"
          onClick={onCancel}
          className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-lg py-2.5 rounded-xl bg-primary-blue hover:bg-secondary-blue text-white text-sm font-semibold transition-colors"
        >
          {transaction ? 'Simpan Perubahan' : 'Simpan Transaksi'}
        </button>
      </div>
    </form>
  );
};

export default AdminTransactionForm;
