import { useState, useEffect } from 'react';
import AdminArticleForm from './AdminArticleForm';
import AdminSidebar from './AdminSidebar';
import { articles as initialArticles } from '../../data/articlesData';

const AdminArticlesPage = () => {
  const [articles, setArticles] = useState([...initialArticles]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');
  const [editingArticle, setEditingArticle] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Semua', 'Tips Kampus', 'Prestasi', 'Akademik', 'Kreatif & Seni', 'Beasiswa', 'Karir & Magang', 'Teknologi'];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'Semua' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSaveArticle = (articleData) => {
    if (editingArticle) {
      setArticles((prev) => prev.map((article) => (article.id === editingArticle.id ? { ...articleData, id: editingArticle.id } : article)));
      setEditingArticle(null);
    } else {
      const newArticle = {
        ...articleData,
        id: Math.max(...articles.map((article) => article.id), 0) + 1
      };
      setArticles((prev) => [...prev, newArticle]);
    }
    setShowForm(false);
  };

  const handleDeleteArticle = (id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
    setDeleteConfirm(null);
  };

  const handleEditClick = (article) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto">
        <div className="flex items-center gap-sm mb-lg">
          <button onClick={() => { setShowForm(false); setEditingArticle(null); }} className="text-text-secondary hover:text-primary-blue flex items-center gap-1 text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali
          </button>
        </div>
        <AdminArticleForm
          article={editingArticle}
          onSave={handleSaveArticle}
          onCancel={() => { setShowForm(false); setEditingArticle(null); }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-lg items-start">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
            <div>
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Manajemen Artikel</h1>
              <p className="text-text-secondary text-sm mt-1">Kelola konten artikel di halaman News & Insights</p>
            </div>
            <button onClick={() => { setEditingArticle(null); setShowForm(true); }} className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Buat Artikel Baru
            </button>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border flex flex-col md:flex-row gap-md">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] pointer-events-none">search</span>
                <input
                  type="text"
                  placeholder="Cari judul atau isi artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
                />
              </div>
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Artikel</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden md:table-cell">Kategori</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Tanggal</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center">Views</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Likes</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Komentar</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredArticles.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-lg py-3xl text-center text-text-secondary">
                        <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
                        Tidak ada artikel ditemukan
                      </td>
                    </tr>
                  ) : (
                    filteredArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-surface/60 transition-colors">
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center gap-sm">
                            <img src={article.image} alt="" className="w-10 h-10 rounded-lg object-cover border border-border/50 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-text-primary truncate max-w-[200px] md:max-w-[320px]">{article.title}</p>
                              <p className="text-text-secondary text-xs md:hidden">{article.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden md:table-cell">
                          <span className="bg-ultra-light-blue text-primary-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-primary-blue/15">{article.category}</span>
                        </td>
                        <td className="px-md md:px-lg py-3 text-text-secondary hidden lg:table-cell">{article.date}</td>
                        <td className="px-md md:px-lg py-3 text-center">
                          <span className="inline-flex items-center gap-1 text-text-secondary"><span className="material-symbols-outlined text-[14px]">visibility</span>{article.views.toLocaleString()}</span>
                        </td>
                        <td className="px-md md:px-lg py-3 text-center hidden sm:table-cell">
                          <span className="inline-flex items-center gap-1 text-text-secondary"><span className="material-symbols-outlined text-[14px] text-error">favorite</span>{article.likes.toLocaleString()}</span>
                        </td>
                        <td className="px-md md:px-lg py-3 text-center text-text-secondary hidden sm:table-cell">{article.comments || 0}</td>
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button onClick={() => handleEditClick(article)} className="p-2 rounded-lg text-text-secondary hover:text-primary-blue hover:bg-ultra-light-blue transition-colors" title="Edit"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                            <button onClick={() => setDeleteConfirm(article.id)} className="p-2 rounded-lg text-text-secondary hover:text-error hover:bg-error-container transition-colors" title="Hapus"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-md md:p-lg border-t border-border flex items-center justify-between">
              <p className="text-text-secondary text-xs">Menampilkan <span className="font-bold text-text-primary">{filteredArticles.length}</span> dari <span className="font-bold text-text-primary">{articles.length}</span> artikel</p>
              {searchQuery && <button onClick={() => setSearchQuery('')} className="text-primary-blue text-xs font-semibold hover:underline">Reset Pencarian</button>}
            </div>
          </div>
        </div>
      </div>

      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-md">
          <div className="bg-white rounded-2xl p-lg md:p-xl max-w-md w-full shadow-lg">
            <h3 className="font-headline-lg text-lg text-text-primary mb-sm">Hapus Artikel?</h3>
            <p className="text-text-secondary text-sm mb-lg">Artikel yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-sm">
              <button onClick={() => setDeleteConfirm(null)} className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors">Batal</button>
              <button onClick={() => handleDeleteArticle(deleteConfirm)} className="px-lg py-2.5 rounded-xl bg-error hover:bg-error/90 text-white text-sm font-semibold transition-colors">Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminArticlesPage;
