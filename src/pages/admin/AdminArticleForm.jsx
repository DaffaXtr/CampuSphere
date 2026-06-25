import { useState } from 'react';

const AdminArticleForm = ({ article, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => {
    if (article) {
      return {
        ...article,
        content: article.content && article.content.length > 0 ? article.content : ['']
      };
    }
    return {
      title: '',
      excerpt: '',
      content: [''],
      category: 'Tips Kampus',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '5 mnt baca',
      image: '',
      tags: [],
      views: 0,
      likes: 0,
      comments: 0,
      author: {
        name: '',
        role: '',
        avatar: '',
        bio: ''
      }
    };
  });

  const [tagInput, setTagInput] = useState(article && article.tags ? article.tags.join(', ') : '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      author: { ...prev.author, [name]: value }
    }));
  };

  const handleContentChange = (index, value) => {
    const newContent = [...formData.content];
    newContent[index] = value;
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  const addContentBlock = () => {
    setFormData(prev => ({ ...prev, content: [...prev.content, ''] }));
  };

  const removeContentBlock = (index) => {
    if (formData.content.length === 1) return;
    const newContent = formData.content.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tagInput.split(',').map(t => t.trim()).filter(t => t.length > 0);
    const contentArray = formData.content.filter(c => c.trim().length > 0);
    if (contentArray.length === 0) {
      alert(' minimal satu paragraf konten harus diisi.');
      return;
    }
    onSave({
      ...formData,
      tags: tagsArray,
      content: contentArray
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">
        {article ? 'Edit Artikel' : 'Buat Artikel Baru'}
      </h2>

      <div className="space-y-lg">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">Judul Artikel</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            placeholder="Masukkan judul artikel"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows="3"
            className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none resize-none"
            placeholder="Ringkasan singkat artikel"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">Konten Artikel</label>
          <div className="space-y-sm">
            {formData.content.map((block, index) => (
              <div key={index} className="flex items-start gap-sm">
                <textarea
                  value={block}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                  required
                  rows="4"
                  className="flex-1 bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none resize-none"
                  placeholder={`Paragraf ${index + 1}`}
                />
                {formData.content.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeContentBlock(index)}
                    className="p-2 rounded-lg text-text-secondary hover:text-error hover:bg-error-container transition-colors mt-1"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addContentBlock}
              className="w-full py-2.5 border border-dashed border-border rounded-xl text-text-secondary hover:border-primary-blue hover:text-primary-blue text-sm font-semibold transition-colors"
            >
              + Tambah Paragraf
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Tips Kampus">Tips Kampus</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Akademik">Akademik</option>
              <option value="Kreatif & Seni">Kreatif & Seni</option>
              <option value="Beasiswa">Beasiswa</option>
              <option value="Karir & Magang">Karir & Magang</option>
              <option value="Teknologi">Teknologi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Waktu Baca</label>
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="contoh: 5 mnt baca"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">URL Gambar</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            placeholder="https://..."
          />
          {formData.image && (
            <div className="mt-sm">
              <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded-xl border border-border" onError={(e) => e.target.style.display = 'none'} />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-xs">Tags</label>
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInput}
            className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            placeholder="Pisah dengan koma, contoh: Mahasiswa, Organisasi, Produktif"
          />
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {formData.tags.map((tag, idx) => (
                <span key={idx} className="bg-ultra-light-blue text-primary-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-primary-blue/15 inline-flex items-center gap-1">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-error">
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Penulis</label>
            <input
              type="text"
              name="name"
              value={formData.author.name}
              onChange={handleAuthorChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Nama penulis"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Role Penulis</label>
            <input
              type="text"
              name="role"
              value={formData.author.role}
              onChange={handleAuthorChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="contoh: Redaktur CampuSphere"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Avatar URL</label>
            <input
              type="url"
              name="avatar"
              value={formData.author.avatar}
              onChange={handleAuthorChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Bio Penulis</label>
            <input
              type="text"
              name="bio"
              value={formData.author.bio}
              onChange={handleAuthorChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Bio singkat penulis"
            />
          </div>
        </div>
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
          {article ? 'Simpan Perubahan' : 'Publikasikan'}
        </button>
      </div>
    </form>
  );
};

export default AdminArticleForm;
