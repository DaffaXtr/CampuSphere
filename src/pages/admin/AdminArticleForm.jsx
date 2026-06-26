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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider mb-6">
        {article ? 'Edit Artikel' : 'Buat Artikel Baru'}
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Judul Artikel</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
            placeholder="Masukkan judul artikel"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows="3"
            className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none resize-none"
            placeholder="Ringkasan singkat artikel"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Konten Artikel</label>
          <div className="space-y-3">
            {formData.content.map((block, index) => (
              <div key={index} className="flex items-start gap-2">
                <textarea
                  value={block}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                  required
                  rows="4"
                  className="flex-1 bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none resize-none"
                  placeholder={`Paragraf ${index + 1}`}
                />
                {formData.content.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeContentBlock(index)}
                    className="p-1.5 rounded-lg text-text-secondary hover:text-rose-500 hover:bg-rose-50 transition-colors mt-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addContentBlock}
              className="w-full py-2 border border-dashed border-border rounded-xl text-text-secondary hover:border-[#1E5EF3] hover:text-[#1E5EF3] text-xs font-bold transition-colors"
            >
              + Tambah Paragraf
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
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
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Waktu Baca</label>
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="contoh: 5 mnt baca"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">URL Gambar</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
            placeholder="https://..."
          />
          {formData.image && (
            <div className="mt-2">
              <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded-xl border border-border" onError={(e) => e.target.style.display = 'none'} />
            </div>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Tags</label>
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInput}
            className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
            placeholder="Pisah dengan koma, contoh: Mahasiswa, Organisasi, Produktif"
          />
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {formData.tags.map((tag, idx) => (
                <span key={idx} className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-rose-500 flex items-center">
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Penulis</label>
            <input
              type="text"
              name="name"
              value={formData.author.name}
              onChange={handleAuthorChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Nama penulis"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Role Penulis</label>
            <input
              type="text"
              name="role"
              value={formData.author.role}
              onChange={handleAuthorChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="contoh: Redaktur CampuSphere"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Avatar URL</label>
            <input
              type="url"
              name="avatar"
              value={formData.author.avatar}
              onChange={handleAuthorChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Bio Penulis</label>
            <input
              type="text"
              name="bio"
              value={formData.author.bio}
              onChange={handleAuthorChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Bio singkat penulis"
            />
          </div>
        </div>
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
          {article ? 'Simpan Perubahan' : 'Publikasikan'}
        </button>
      </div>
    </form>
  );
};

export default AdminArticleForm;
