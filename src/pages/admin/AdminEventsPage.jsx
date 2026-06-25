import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
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

  if (showForm) {
    return (
      <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-lg items-start">
          <AdminSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-sm mb-lg">
              <button onClick={() => { setShowForm(false); setEditingEvent(null); }} className="text-text-secondary hover:text-primary-blue flex items-center gap-1 text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Kembali
              </button>
            </div>

            <AdminEventForm
              key={editingEvent ? `event-${editingEvent.id}` : 'event-new'}
              event={editingEvent}
              onSave={handleSaveEvent}
              onCancel={() => { setShowForm(false); setEditingEvent(null); }}
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
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Manajemen Event</h1>
              <p className="text-text-secondary text-sm mt-1">Kelola data dari eventsData.js</p>
            </div>
            <button
              onClick={() => { setEditingEvent(null); setShowForm(true); }}
              className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Buat Event Baru
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Event</p>
              <p className="mt-2 text-3xl font-black text-text-primary">{events.length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Free Event</p>
              <p className="mt-2 text-3xl font-black text-primary-blue">{events.filter((event) => event.price === 'Free').length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Paid Event</p>
              <p className="mt-2 text-3xl font-black text-secondary-yellow">{events.filter((event) => event.price === 'Paid').length}</p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border flex flex-col gap-md">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md">
                <div className="relative md:col-span-2 xl:col-span-2">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] pointer-events-none">search</span>
                  <input
                    type="text"
                    placeholder="Cari judul, subtitle, atau tag..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
                  />
                </div>

                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {prices.map((price) => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>

                <select value={filterFormat} onChange={(e) => setFilterFormat(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {formats.map((format) => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Event</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden md:table-cell">Kategori</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Format</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Harga</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden lg:table-cell">Waktu</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-lg py-3xl text-center text-text-secondary">
                        <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
                        Tidak ada event ditemukan
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((event) => (
                      <tr key={event.id} className="hover:bg-surface/60 transition-colors">
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center gap-sm">
                            <img src={event.imageSrc} alt="" className="w-12 h-12 rounded-lg object-cover border border-border/50 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{event.title}</p>
                              <p className="text-text-secondary text-xs md:hidden">{event.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden md:table-cell">
                          <span className="bg-ultra-light-blue text-primary-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-primary-blue/15">{event.category}</span>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden lg:table-cell text-text-secondary">{event.format}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden sm:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${event.price === 'Paid' ? 'bg-primary-blue/10 text-primary-blue border-primary-blue/20' : 'bg-success/10 text-success border-success/20'}`}>
                            {event.price}
                          </span>
                        </td>
                        <td className="px-md md:px-lg py-3 text-center hidden lg:table-cell text-text-secondary">{event.timeRemaining}</td>
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => { setEditingEvent(event); setShowForm(true); }}
                              className="p-2 rounded-lg text-text-secondary hover:text-primary-blue hover:bg-ultra-light-blue transition-colors"
                              title="Edit"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(event.id)}
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
                Menampilkan <span className="font-bold text-text-primary">{filteredEvents.length}</span> dari <span className="font-bold text-text-primary">{events.length}</span> event
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
            <h3 className="font-headline-lg text-lg text-text-primary mb-sm">Hapus Event?</h3>
            <p className="text-text-secondary text-sm mb-lg">Event yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin melanjutkan?</p>
            <div className="flex items-center justify-end gap-sm">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteEvent(deleteConfirm)}
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

export default AdminEventsPage;