import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminOrganizationForm from './AdminOrganizationForm';
import { organizationsData as initialOrganizations } from '../../data/organizationsData';

const AdminOrganizationsPage = () => {
  const [organizations, setOrganizations] = useState([...initialOrganizations]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [editingOrganization, setEditingOrganization] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const types = ['Semua', ...Array.from(new Set(initialOrganizations.map((org) => org.type).filter(Boolean)))] ;
  const statuses = ['Semua', 'Aktif', 'Vakum'];

  const filteredOrganizations = organizations.filter((org) => {
    const searchMatch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.leadName.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatch = filterType === 'Semua' || org.type === filterType;
    const statusMatch = filterStatus === 'Semua' || org.status === filterStatus;
    return searchMatch && typeMatch && statusMatch;
  });

  const handleSaveOrganization = (organizationData) => {
    if (editingOrganization) {
      setOrganizations((prev) => prev.map((org) => (org.id === editingOrganization.id ? { ...organizationData, id: editingOrganization.id } : org)));
      setEditingOrganization(null);
    } else {
      const nextId = Math.max(...organizations.map((org) => org.id), 0) + 1;
      setOrganizations((prev) => [...prev, { ...organizationData, id: nextId }]);
    }
    setShowForm(false);
  };

  const handleDeleteOrganization = (id) => {
    setOrganizations((prev) => prev.filter((org) => org.id !== id));
    setDeleteConfirm(null);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-lg items-start">
          <AdminSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-sm mb-lg">
              <button onClick={() => { setShowForm(false); setEditingOrganization(null); }} className="text-text-secondary hover:text-primary-blue flex items-center gap-1 text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Kembali
              </button>
            </div>

            <AdminOrganizationForm
              key={editingOrganization ? `organization-${editingOrganization.id}` : 'organization-new'}
              organization={editingOrganization}
              onSave={handleSaveOrganization}
              onCancel={() => { setShowForm(false); setEditingOrganization(null); }}
            />
          </div>
        </div>
      </div>
    );
  }

  const totalMembers = organizations.reduce((sum, org) => sum + Number(org.membersCount || 0), 0);

  return (
    <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-lg items-start">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
            <div>
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Manajemen Organisasi</h1>
              <p className="text-text-secondary text-sm mt-1">Kelola data organisasi dari organizationsData.js</p>
            </div>
            <button
              onClick={() => { setEditingOrganization(null); setShowForm(true); }}
              className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">apartment</span>
              Tambah Organisasi
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Organisasi</p>
              <p className="mt-2 text-3xl font-black text-text-primary">{organizations.length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Organisasi Aktif</p>
              <p className="mt-2 text-3xl font-black text-primary-blue">{organizations.filter((org) => org.status === 'Aktif').length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Anggota</p>
              <p className="mt-2 text-3xl font-black text-secondary-yellow">{totalMembers}</p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border flex flex-col gap-md">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md">
                <div className="relative md:col-span-2 xl:col-span-2">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[18px] pointer-events-none">search</span>
                  <input
                    type="text"
                    placeholder="Cari nama organisasi, kota, atau ketua..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
                  />
                </div>

                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-surface border border-border rounded-lg px-md py-2.5 text-sm text-text-primary focus:border-primary-blue outline-none">
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Organisasi</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden md:table-cell">Tipe</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Kota</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center hidden sm:table-cell">Anggota</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredOrganizations.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-lg py-3xl text-center text-text-secondary">
                        <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
                        Tidak ada organisasi ditemukan
                      </td>
                    </tr>
                  ) : (
                    filteredOrganizations.map((org) => (
                      <tr key={org.id} className="hover:bg-surface/60 transition-colors">
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center gap-sm">
                            <img src={org.logoSrc} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-semibold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{org.name}</p>
                              <p className="text-text-secondary text-xs truncate">{org.leadName}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md md:px-lg py-3 hidden md:table-cell text-text-secondary">{org.type}</td>
                        <td className="px-md md:px-lg py-3 hidden lg:table-cell text-text-secondary">{org.city}</td>
                        <td className="px-md md:px-lg py-3 text-center hidden sm:table-cell text-text-secondary">{org.membersCount}</td>
                        <td className="px-md md:px-lg py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => { setEditingOrganization(org); setShowForm(true); }}
                              className="p-2 rounded-lg text-text-secondary hover:text-primary-blue hover:bg-ultra-light-blue transition-colors"
                              title="Edit"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(org.id)}
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
                Menampilkan <span className="font-bold text-text-primary">{filteredOrganizations.length}</span> dari <span className="font-bold text-text-primary">{organizations.length}</span> organisasi
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
            <h3 className="font-headline-lg text-lg text-text-primary mb-sm">Hapus Organisasi?</h3>
            <p className="text-text-secondary text-sm mb-lg">Data organisasi yang dihapus tidak dapat dikembalikan. Lanjutkan?</p>
            <div className="flex items-center justify-end gap-sm">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteOrganization(deleteConfirm)}
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

export default AdminOrganizationsPage;
