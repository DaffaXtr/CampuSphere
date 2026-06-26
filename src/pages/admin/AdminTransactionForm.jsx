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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider mb-6">
        {transaction ? 'Edit Transaksi' : 'Tambah Transaksi Baru'}
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Pembeli</label>
            <input
              type="text"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Masukkan nama pembeli"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Tanggal Transaksi</label>
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Barang</label>
            <select
              name="merchandiseId"
              value={formData.merchandiseId}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              {allMerch.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Jumlah</label>
            <input
              type="number"
              min="1"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Metode Pembayaran</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="E-Wallet">E-Wallet</option>
              <option value="Virtual Account">Virtual Account</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="Pending">Pending</option>
              <option value="Berhasil">Berhasil</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
          </div>
        </div>

        {selectedMerch && (
          <div className="rounded-xl border border-border bg-[#F9FAFB] p-4 text-xs">
            <p className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-3">Ringkasan Barang</p>
            <div className="flex items-center gap-3">
              <img src={selectedMerch.imageSrc} alt="" className="w-12 h-12 rounded-xl object-cover border border-border bg-white" />
              <div className="min-w-0">
                <p className="font-bold text-text-primary truncate">{selectedMerch.name}</p>
                <p className="text-[10px] font-semibold text-text-secondary mt-0.5">{selectedMerch.storeName}</p>
              </div>
            </div>
            <p className="mt-3 font-bold text-text-secondary text-[11px]">Total: <span className="font-black text-[#1F2937] text-sm ml-1">{formatRupiah(numericTotal)}</span></p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-2 mt-6 pt-5 border-t border-border text-xs font-bold">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-[#1E5EF3] hover:bg-[#1E40AF] text-white transition-colors"
        >
          {transaction ? 'Simpan Perubahan' : 'Simpan Transaksi'}
        </button>
      </div>
    </form>
  );
};

export default AdminTransactionForm;
