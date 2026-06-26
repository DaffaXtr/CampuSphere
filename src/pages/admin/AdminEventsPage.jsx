import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
import AdminEventForm from './AdminEventForm';
import { allEvents as initialEvents } from '../../data/eventsData';

const AdminEventsPage = () => {
  const [events, setEvents] = useState([...initialEvents]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');
  const [filterPrice, setFilterPrice] = useState('Semua');
  const [filterFormat, setFilterFormat] = useState('Semua');
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Semua', ...Array.from(new Set(initialEvents.map((event) => event.category).filter(Boolean)))];
  const prices = ['Semua', 'Free', 'Paid'];
  const formats = ['Semua', 'Online', 'Offline', 'Hybrid'];

  const filteredEvents = events.filter((event) => {
    const searchMatch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.tags || []).join(', ').toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = filterCategory === 'Semua' || event.category === filterCategory;
    const priceMatch = filterPrice === 'Semua' || event.price === filterPrice;
    const formatMatch = filterFormat === 'Semua' || event.format === filterFormat;
    return searchMatch && categoryMatch && priceMatch && formatMatch;
  });

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEvents((prev) => prev.map((event) => (event.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : event)));
      setEditingEvent(null);
    } else {
      const nextId = Math.max(...events.map((event) => event.id), 0) + 1;
      setEvents((prev) => [...prev, { ...eventData, id: nextId }]);
    }
    setShowForm(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
    setDeleteConfirm(null);
  };

  const getFormatBadge = (format) => {
    switch (format) {
      case 'Online':
        return <span className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Online</span>;
      case 'Offline':
        return <span className="bg-[#E6F4EA] text-[#10B981] border border-[#D1FAE5] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Offline</span>;
      case 'Hybrid':
        return <span className="bg-[#F5F3FF] text-[#8B5CF6] border border-[#E9D5FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">Hybrid</span>;
      default:
        return <span className="bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0] text-[9px] font-bold px-2.5 py-0.5 rounded-full">{format}</span>;
    }
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
                <button onClick={() => { setShowForm(false); setEditingEvent(null); }} className="text-text-secondary hover:text-[#1E5EF3] flex items-center gap-1.5 text-xs font-bold transition-colors">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Kembali ke Manajemen Event
                </button>
              </div>

              <AdminEventForm
                key={editingEvent ? `event-${editingEvent.id}` : 'event-new'}
                event={editingEvent}
                onSave={handleSaveEvent}
                onCancel={() => { setShowForm(false); setEditingEvent(null); }}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                    Manajemen Event
                  </h1>
                  <p className="text-text-secondary text-xs mt-1">Kelola data event, registrasi peserta, dan format kegiatan</p>
                </div>
                <button
                  onClick={() => { setEditingEvent(null); setShowForm(true); }}
                  className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Buat Event Baru
                </button>
              </div>

              {/* 3-Column Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">event_note</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Event</p>
                    <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{events.length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">redeem</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Free Event</p>
                    <p className="text-2xl font-black text-[#10B981] mt-1 leading-none">{events.filter((event) => event.price === 'Free').length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Paid Event</p>
                    <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{events.filter((event) => event.price === 'Paid').length}</p>
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
                        placeholder="Cari judul, subtitle, atau tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F9FAFB] border border-border rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
                      />
                    </div>

                    <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>

                    <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {prices.map((price) => (
                        <option key={price} value={price}>{price}</option>
                      ))}
                    </select>

                    <select value={filterFormat} onChange={(e) => setFilterFormat(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {formats.map((format) => (
                        <option key={format} value={format}>{format}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                        <th className="px-4 md:px-5 pb-3 pt-4">Event</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden md:table-cell">Kategori</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Format</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Harga</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden lg:table-cell">Waktu</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[11px]">
                      {filteredEvents.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-5 py-12 text-center text-text-secondary">
                            <span className="material-symbols-outlined text-3xl mb-1 block">search_off</span>
                            Tidak ada event ditemukan
                          </td>
                        </tr>
                      ) : (
                        filteredEvents.map((event) => (
                          <tr key={event.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center gap-3">
                                <img src={event.imageSrc} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50 flex-shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{event.title}</p>
                                  <p className="text-text-secondary text-[10px] md:hidden mt-0.5">{event.category}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden md:table-cell">
                              <span className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">{event.category}</span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden lg:table-cell">{getFormatBadge(event.format)}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold ${
                                event.price === 'Paid'
                                  ? 'bg-[#FFFBEB] text-[#F59E0B] border border-[#FEF3C7]'
                                  : 'bg-[#E6F4EA] text-[#10B981] border border-[#D1FAE5]'
                              }`}>
                                {event.price}
                              </span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden lg:table-cell text-text-secondary font-medium">{event.timeRemaining}</td>
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingEvent(event); setShowForm(true); }}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-[#1E5EF3] hover:bg-[#EBF3FF] transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(event.id)}
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
                    Menampilkan <span className="text-text-primary font-black">{filteredEvents.length}</span> dari <span className="text-text-primary font-black">{events.length}</span> event
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
            <h3 className="font-bold text-text-primary text-sm mb-2">Hapus Event?</h3>
            <p className="text-text-secondary text-xs mb-4">Event yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-2 text-xs font-bold">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteEvent(deleteConfirm)}
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

export default AdminEventsPage;