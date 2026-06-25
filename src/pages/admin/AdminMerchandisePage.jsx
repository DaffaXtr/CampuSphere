import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
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

  if (showForm) {
    return (
      <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-lg items-start">
          <AdminSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-sm mb-lg">
              <button onClick={() => { setShowForm(false); setEditingItem(null); }} className="text-text-secondary hover:text-primary-blue flex items-center gap-1 text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Kembali
              </button>
            </div>

            <AdminMerchandiseForm
              key={editingItem ? `merch-${editingItem.id}` : 'merch-new'}
              item={editingItem}
              onSave={handleSaveItem}
              onCancel={() => { setShowForm(false); setEditingItem(null); }}
            />
          </div>
        </div>
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
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Manajemen Merchandise</h1>
              <p className="text-text-secondary text-sm mt-1">Kelola data dari merchandiseData.js</p>
            </div>
            <button
              onClick={() => { setEditingItem(null); setShowForm(true); }}
              className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Buat Produk Baru
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Produk</p>
              <p className="mt-2 text-3xl font-black text-text-primary">{merchandise.length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Kategori</p>
              <p className="mt-2 text-3xl font-black text-primary-blue">{merchCategories.length - 1}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Store</p>
              <p className="mt-2 text-3xl font-black text-secondary-yellow">{merchStores.length - 1}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Rata-rata Rating</p>
              <p className="mt-2 text-3xl font-black text-success">{(merchandise.reduce((sum, item) => sum + Number(item.ratingValue || 0), 0) / merchandise.length || 0).toFixed(1)}</p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border flex flex-col gap-md">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md">
                <div className="relative md:col-span-2 xl:col-span-2">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] pointer-events-none">search</span>
                  <input
                    type="text"
                    placeholder="Cari produk atau store..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
                  />
                </div>

                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  <option value="Semua">Semua Kategori</option>
                  {merchCategories
                    .filter((category) => category !== 'All Products')
                    .map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <select value={filterStore} onChange={(e) => setFilterStore(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {merchStores.map((store) => (
                    <option key={store.name} value={store.name}>{store.name}</option>
                  ))}
                </select>

                <select value={filterPriceRange} onChange={(e) => setFilterPriceRange(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {merchPriceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Produk</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden md:table-cell">Kategori</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Store</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Harga</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden lg:table-cell">Rating</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden lg:table-cell">Terjual</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredMerchandise.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-lg py-3xl text-center text-text-secondary">
                        <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
                        Tidak ada produk ditemukan
                      </td>
                    </tr>
                  ) : (
                    filteredMerchandise.map((item) => (
                      <tr key={item.id} className="hover:bg-surface/60 transition-colors">
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center gap-sm">
                            <img src={item.imageSrc} alt="" className="w-12 h-12 rounded-lg object-cover border border-border/50 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{item.name}</p>
                              <p className="text-text-secondary text-xs md:hidden">{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden md:table-cell">
                          <span className="bg-ultra-light-blue text-primary-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-primary-blue/15">{item.category}</span>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden lg:table-cell text-text-secondary">{item.storeName}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden sm:table-cell text-text-primary font-semibold">{item.price}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden lg:table-cell text-text-secondary">{item.ratingValue.toFixed(1)}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden lg:table-cell text-text-secondary">{item.soldCount}</td>
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => { setEditingItem(item); setShowForm(true); }}
                              className="p-2 rounded-lg text-text-secondary hover:text-primary-blue hover:bg-ultra-light-blue transition-colors"
                              title="Edit"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(item.id)}
                              className="p-2 rounded-lg text-text-secondary hover:text-error hover:bg-error-container transition-colors"
                              title="Hapus"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-md md:p-lg border-t border-border flex items-center justify-between gap-md">
              <p className="text-text-secondary text-xs">
                Menampilkan <span className="font-bold text-text-primary">{filteredMerchandise.length}</span> dari <span className="font-bold text-text-primary">{merchandise.length}</span> produk
              </p>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-primary-blue text-xs font-semibold hover:underline">
                  Reset Pencarian
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-md">
          <div className="bg-white rounded-2xl p-lg md:p-xl max-w-md w-full shadow-lg">
            <h3 className="font-headline-lg text-lg text-text-primary mb-sm">Hapus Produk?</h3>
            <p className="text-text-secondary text-sm mb-lg">Produk yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-sm">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteItem(deleteConfirm)}
                className="px-lg py-2.5 rounded-xl bg-error hover:bg-error/90 text-white text-sm font-semibold transition-colors"
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