import { useState } from 'react';

const formatRupiah = (value) => {
  const numberValue = Number(value || 0);
  return `Rp ${numberValue.toLocaleString('id-ID')}`;
};

const AdminMerchandiseForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => {
    if (item) {
      return { ...item };
    }

    return {
      name: '',
      category: 'Apparel',
      price: 'Rp 0',
      numericPrice: 0,
      imageSrc: '',
      ratingValue: 4.5,
      reviewsCount: 0,
      soldCount: 0,
      storeName: 'HIMTI Official Store',
      tag: ''
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numericPrice' || name === 'ratingValue' || name === 'reviewsCount' || name === 'soldCount'
        ? value
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericPrice = Number(formData.numericPrice || 0);
    const ratingValue = Number(formData.ratingValue || 0);
    const reviewsCount = Number(formData.reviewsCount || 0);
    const soldCount = Number(formData.soldCount || 0);

    onSave({
      ...formData,
      numericPrice,
      price: formatRupiah(numericPrice),
      ratingValue,
      reviewsCount,
      soldCount,
      tag: formData.tag || null
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider mb-6">
        {item ? 'Edit Merchandise' : 'Buat Merchandise Baru'}
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Masukkan nama produk"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Stationery">Stationery</option>
              <option value="Tumbler">Tumbler</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Harga Numerik</label>
            <input
              type="number"
              name="numericPrice"
              min="0"
              step="1000"
              value={formData.numericPrice}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="45000"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Label Harga</label>
            <input
              type="text"
              value={formatRupiah(formData.numericPrice)}
              readOnly
              className="w-full bg-[#F1F5F9] border border-border rounded-xl px-4 py-2.5 text-xs text-text-secondary outline-none select-none font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Rating</label>
            <input
              type="number"
              name="ratingValue"
              min="0"
              max="5"
              step="0.1"
              value={formData.ratingValue}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="4.8"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Jumlah Review</label>
            <input
              type="number"
              name="reviewsCount"
              min="0"
              step="1"
              value={formData.reviewsCount}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="120"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Jumlah Terjual</label>
            <input
              type="number"
              name="soldCount"
              min="0"
              step="1"
              value={formData.soldCount}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="154"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Store</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="HIMTI Official Store"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Tag</label>
            <input
              type="text"
              name="tag"
              value={formData.tag || ''}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Best Seller, New Arrival, Limited"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">URL Gambar</label>
            <input
              type="url"
              name="imageSrc"
              value={formData.imageSrc}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.imageSrc && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Preview Gambar</label>
            <img
              src={formData.imageSrc}
              alt="Preview"
              className="w-full h-44 object-cover rounded-xl border border-border"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
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
          {item ? 'Simpan Perubahan' : 'Simpan Produk'}
        </button>
      </div>
    </form>
  );
};

export default AdminMerchandiseForm;