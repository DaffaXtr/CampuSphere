import { useState, useEffect } from 'react';
import AdminArticleForm from './AdminArticleForm';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
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

  return (
    <div className="min-h-screen bg-background flex flex-col xl:flex-row w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <AdminTopbar />
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          {showForm ? (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => { setShowForm(false); setEditingArticle(null); }} className="text-text-secondary hover:text-[#1E5EF3] flex items-center gap-1.5 text-xs font-bold transition-colors">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Kembali ke Manajemen Artikel
                </button>
              </div>
              <AdminArticleForm
                article={editingArticle}
                onSave={handleSaveArticle}
                onCancel={() => { setShowForm(false); setEditingArticle(null); }}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                    Manajemen Artikel
                  </h1>
                  <p className="text-text-secondary text-xs mt-1">Kelola konten artikel di halaman News & Insights</p>
                </div>
                <button onClick={() => { setEditingArticle(null); setShowForm(true); }} className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Buat Artikel Baru
                </button>
              </div>

              {/* 3-Column Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">article</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Artikel</p>
                    <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{articles.length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Views</p>
                    <p className="text-2xl font-black text-[#1E5EF3] mt-1 leading-none">{articles.reduce((acc, curr) => acc + (curr.views || 0), 0).toLocaleString()}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Likes</p>
                    <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{articles.reduce((acc, curr) => acc + (curr.likes || 0), 0).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 md:p-5 border-b border-border flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[16px] pointer-events-none">search</span>
                    <input
                      type="text"
                      placeholder="Cari judul atau isi artikel..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#F9FAFB] border border-border rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
                    />
                  </div>
                  <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                        <th className="px-4 md:px-5 pb-3 pt-4">Artikel</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden md:table-cell">Kategori</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Tanggal</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center">Views</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Likes</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Komentar</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[11px]">
                      {filteredArticles.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="px-5 py-12 text-center text-text-secondary">
                            <span className="material-symbols-outlined text-3xl mb-1 block">search_off</span>
                            Tidak ada artikel ditemukan
                          </td>
                        </tr>
                      ) : (
                        filteredArticles.map((article) => (
                          <tr key={article.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center gap-3">
                                <img src={article.image} alt="" className="w-10 h-10 rounded-xl object-cover border border-border/50 flex-shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-semibold text-text-primary truncate max-w-[200px] md:max-w-[320px]">{article.title}</p>
                                  <p className="text-text-secondary text-[10px] md:hidden mt-0.5">{article.category}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden md:table-cell">
                              <span className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">{article.category}</span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-text-secondary font-medium hidden lg:table-cell">{article.date}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center text-text-secondary font-medium">
                              <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">visibility</span>{article.views.toLocaleString()}</span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell text-text-secondary font-medium">
                              <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[13px] text-rose-500">favorite</span>{article.likes.toLocaleString()}</span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-center text-text-secondary font-medium hidden sm:table-cell">{article.comments || 0}</td>
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center justify-end gap-1">
                                <button onClick={() => handleEditClick(article)} className="p-1.5 rounded-lg text-text-secondary hover:text-[#1E5EF3] hover:bg-[#EBF3FF] transition-colors" title="Edit"><span className="material-symbols-outlined text-[16px]">edit</span></button>
                                <button onClick={() => setDeleteConfirm(article.id)} className="p-1.5 rounded-lg text-text-secondary hover:text-rose-500 hover:bg-rose-50 transition-colors" title="Hapus"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-text-secondary text-[10px] font-bold">Menampilkan <span className="text-text-primary font-black">{filteredArticles.length}</span> dari <span className="text-text-primary font-black">{articles.length}</span> artikel</p>
                  {searchQuery && <button onClick={() => setSearchQuery('')} className="text-[#1E5EF3] text-[10px] font-bold hover:underline">Reset Pencarian</button>}
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
            <h3 className="font-bold text-text-primary text-sm mb-2">Hapus Artikel?</h3>
            <p className="text-text-secondary text-xs mb-4">Artikel yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-2 text-xs font-bold">
              <button onClick={() => setDeleteConfirm(null)} className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors">Batal</button>
              <button onClick={() => handleDeleteArticle(deleteConfirm)} className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white transition-colors">Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminArticlesPage;
