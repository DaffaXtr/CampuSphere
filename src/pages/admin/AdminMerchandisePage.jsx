import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
import AdminMerchandiseForm from './AdminMerchandiseForm';
import { allMerch as initialMerch, merchCategories, merchPriceRanges, merchStores } from '../../data/merchandiseData';

const AdminMerchandisePage = () => {
  const [merchandise, setMerchandise] = useState([...initialMerch]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');
  const [filterStore, setFilterStore] = useState('Semua Store');
  const [filterPriceRange, setFilterPriceRange] = useState('Any Price');
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMerchandise = merchandise.filter((item) => {
    if (
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.storeName.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (filterCategory !== 'Semua' && item.category !== filterCategory) return false;
    if (filterStore !== 'Semua Store' && !item.storeName.includes(filterStore)) return false;

    if (filterPriceRange === 'Under Rp 50.000' && item.numericPrice >= 50000) return false;
    if (filterPriceRange === 'Rp 50.000 - Rp 100.000' && (item.numericPrice < 50000 || item.numericPrice > 100000)) return false;
    if (filterPriceRange === 'Over Rp 100.000' && item.numericPrice <= 100000) return false;

    return true;
  });

  const handleSaveItem = (itemData) => {
    if (editingItem) {
      setMerchandise((prev) => prev.map((item) => (item.id === editingItem.id ? { ...itemData, id: editingItem.id } : item)));
      setEditingItem(null);
    } else {
      const nextId = Math.max(...merchandise.map((item) => item.id), 0) + 1;
      setMerchandise((prev) => [...prev, { ...itemData, id: nextId }]);
    }
    setShowForm(false);
  };

  const handleDeleteItem = (id) => {
    setMerchandise((prev) => prev.filter((item) => item.id !== id));
    setDeleteConfirm(null);
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
                <button onClick={() => { setShowForm(false); setEditingItem(null); }} className="text-text-secondary hover:text-[#1E5EF3] flex items-center gap-1.5 text-xs font-bold transition-colors">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Kembali ke Manajemen Merchandise
                </button>
              </div>

              <AdminMerchandiseForm
                key={editingItem ? `merch-${editingItem.id}` : 'merch-new'}
                item={editingItem}
                onSave={handleSaveItem}
                onCancel={() => { setShowForm(false); setEditingItem(null); }}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                    Manajemen Merchandise
                  </h1>
                  <p className="text-text-secondary text-xs mt-1">Kelola katalog merchandise, ketersediaan produk, dan rating toko</p>
                </div>
                <button
                  onClick={() => { setEditingItem(null); setShowForm(true); }}
                  className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Buat Produk Baru
                </button>
              </div>

              {/* 4-Column Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Produk</p>
                    <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{merchandise.length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#8B5CF6] bg-[#F5F3FF] border-[#E9D5FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">category</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Kategori</p>
                    <p className="text-2xl font-black text-[#8B5CF6] mt-1 leading-none">{merchCategories.length - 1}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">storefront</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Store</p>
                    <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{merchStores.length - 1}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">star</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Rata-rata Rating</p>
                    <p className="text-2xl font-black text-[#10B981] mt-1 leading-none">{(merchandise.reduce((sum, item) => sum + Number(item.ratingValue || 0), 0) / merchandise.length || 0).toFixed(1)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 md:p-5 border-b border-border flex flex-col gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                    <div className="relative md:col-span-2 xl:col-span-2">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[16px] pointer-events-none">search</span>
                      <input
                        type="text"
                        placeholder="Cari produk atau store..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F9FAFB] border border-border rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
                      />
                    </div>

                    <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      <option value="Semua">Semua Kategori</option>
                      {merchCategories
                        .filter((category) => category !== 'All Products')
                        .map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    <select value={filterStore} onChange={(e) => setFilterStore(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {merchStores.map((store) => (
                        <option key={store.name} value={store.name}>{store.name}</option>
                      ))}
                    </select>

                    <select value={filterPriceRange} onChange={(e) => setFilterPriceRange(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {merchPriceRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                        <th className="px-4 md:px-5 pb-3 pt-4">Produk</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden md:table-cell">Kategori</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Store</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Harga</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden lg:table-cell">Rating</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden lg:table-cell">Terjual</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[11px]">
                      {filteredMerchandise.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="px-5 py-12 text-center text-text-secondary">
                            <span className="material-symbols-outlined text-3xl mb-1 block">search_off</span>
                            Tidak ada produk ditemukan
                          </td>
                        </tr>
                      ) : (
                        filteredMerchandise.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center gap-3">
                                <img src={item.imageSrc} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50 flex-shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{item.name}</p>
                                  <p className="text-text-secondary text-[10px] md:hidden mt-0.5">{item.category}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden md:table-cell">
                              <span className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">{item.category}</span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden lg:table-cell text-text-secondary font-medium">{item.storeName}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell text-text-primary font-bold">{item.price}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden lg:table-cell">
                              <span className="inline-flex items-center gap-1 text-text-primary font-bold">
                                <span className="material-symbols-outlined text-[13px] text-amber-500 fill-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                {item.ratingValue.toFixed(1)}
                              </span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden lg:table-cell text-text-secondary font-medium">{item.soldCount}</td>
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingItem(item); setShowForm(true); }}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-[#1E5EF3] hover:bg-[#EBF3FF] transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(item.id)}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-rose-500 hover:bg-rose-50 transition-colors"
                                  title="Hapus"
                                >
                                  <span className="material-symbols-outlined text-[16px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-text-secondary text-[10px] font-bold">
                    Menampilkan <span className="text-text-primary font-black">{filteredMerchandise.length}</span> dari <span className="text-text-primary font-black">{merchandise.length}</span> produk
                  </p>
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-[#1E5EF3] text-[10px] font-bold hover:underline">
                      Reset Pencarian
                    </button>
                  )}
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
            <h3 className="font-bold text-text-primary text-sm mb-2">Hapus Produk?</h3>
            <p className="text-text-secondary text-xs mb-4">Produk yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-2 text-xs font-bold">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteItem(deleteConfirm)}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white transition-colors"
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

export default AdminMerchandisePage;