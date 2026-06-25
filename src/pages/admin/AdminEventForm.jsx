import { useState } from 'react';

const colorOptions = ['text-primary', 'text-secondary', 'text-tertiary', 'text-success', 'text-warning'];

const AdminEventForm = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => {
    if (event) {
      return {
        ...event,
        tags: Array.isArray(event.tags) ? event.tags : []
      };
    }

    return {
      title: '',
      subtitle: '',
      imageSrc: '',
      icon: 'event',
      iconColor: 'text-primary',
      tags: [],
      timeRemaining: '',
      category: 'Technology',
      price: 'Free',
      format: 'Offline'
    };
  });

  const [tagInput, setTagInput] = useState(event && Array.isArray(event.tags) ? event.tags.join(', ') : '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = tagInput
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    onSave({
      ...formData,
      tags
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">
        {event ? 'Edit Event' : 'Buat Event Baru'}
      </h2>

      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Judul Event</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan judul event"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Tagline / Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Deskripsi singkat event"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Design">Design</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Status Harga</label>
            <select
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Format</label>
            <select
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Estimasi Waktu</label>
            <input
              type="text"
              name="timeRemaining"
              value={formData.timeRemaining}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Contoh: Starts in 5 days"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Icon Material</label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="event, campaign, palette"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Warna Icon</label>
            <select
              name="iconColor"
              value={formData.iconColor}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              {colorOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
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

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">Tags</label>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            placeholder="Pisah dengan koma, contoh: Seminar, Workshop, Tech"
          />
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
          {event ? 'Simpan Perubahan' : 'Simpan Event'}
        </button>
      </div>
    </form>
  );
};

export default AdminEventForm;