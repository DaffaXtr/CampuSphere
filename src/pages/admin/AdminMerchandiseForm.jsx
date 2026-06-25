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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">
        {item ? 'Edit Merchandise' : 'Buat Merchandise Baru'}
      </h2>

      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan nama produk"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Stationery">Stationery</option>
              <option value="Tumbler">Tumbler</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Harga Numerik</label>
            <input
              type="number"
              name="numericPrice"
              min="0"
              step="1000"
              value={formData.numericPrice}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="45000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Label Harga</label>
            <input
              type="text"
              value={formatRupiah(formData.numericPrice)}
              readOnly
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Rating</label>
            <input
              type="number"
              name="ratingValue"
              min="0"
              max="5"
              step="0.1"
              value={formData.ratingValue}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="4.8"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Jumlah Review</label>
            <input
              type="number"
              name="reviewsCount"
              min="0"
              step="1"
              value={formData.reviewsCount}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="120"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Jumlah Terjual</label>
            <input
              type="number"
              name="soldCount"
              min="0"
              step="1"
              value={formData.soldCount}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="154"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Store</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="HIMTI Official Store"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Tag</label>
            <input
              type="text"
              name="tag"
              value={formData.tag || ''}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Best Seller, New Arrival, Limited"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">URL Gambar</label>
            <input
              type="url"
              name="imageSrc"
              value={formData.imageSrc}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.imageSrc && (
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Preview Gambar</label>
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
          {item ? 'Simpan Perubahan' : 'Simpan Produk'}
        </button>
      </div>
    </form>
  );
};

export default AdminMerchandiseForm;