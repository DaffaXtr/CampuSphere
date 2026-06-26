import { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
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
  const totalMembers = organizations.reduce((sum, org) => sum + (org.membersCount || 0), 0);

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

  const getTypeBadge = (type) => {
    switch (type) {
      case 'UKM':
        return <span className="bg-[#F5F3FF] text-[#8B5CF6] border border-[#E9D5FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">UKM</span>;
      case 'BEM':
        return <span className="bg-[#FEE2E2] text-[#EF4444] border border-[#FECACA] text-[9px] font-bold px-2.5 py-0.5 rounded-full">BEM</span>;
      default:
        return <span className="bg-[#EBF3FF] text-[#1E5EF3] border border-[#D0E2FF] text-[9px] font-bold px-2.5 py-0.5 rounded-full">{type}</span>;
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
                <button onClick={() => { setShowForm(false); setEditingOrganization(null); }} className="text-text-secondary hover:text-[#1E5EF3] flex items-center gap-1.5 text-xs font-bold transition-colors">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Kembali ke Manajemen Organisasi
                </button>
              </div>

              <AdminOrganizationForm
                key={editingOrganization ? `organization-${editingOrganization.id}` : 'organization-new'}
                organization={editingOrganization}
                onSave={handleSaveOrganization}
                onCancel={() => { setShowForm(false); setEditingOrganization(null); }}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                    Manajemen Organisasi
                  </h1>
                  <p className="text-text-secondary text-xs mt-1">Kelola data organisasi, kepengurusan, dan jumlah anggota aktif</p>
                </div>
                <button
                  onClick={() => { setEditingOrganization(null); setShowForm(true); }}
                  className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">apartment</span>
                  Tambah Organisasi
                </button>
              </div>

              {/* 3-Column Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">apartment</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Organisasi</p>
                    <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{organizations.length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Organisasi Aktif</p>
                    <p className="text-2xl font-black text-[#10B981] mt-1 leading-none">{organizations.filter((org) => org.status === 'Aktif').length}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">groups_3</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Anggota</p>
                    <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{totalMembers}</p>
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
                        placeholder="Cari nama organisasi, kota, atau ketua..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F9FAFB] border border-border rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
                      />
                    </div>

                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>

                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-[#F9FAFB] border border-border rounded-xl px-3 py-2 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold">
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                        <th className="px-4 md:px-5 pb-3 pt-4">Organisasi</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden md:table-cell">Tipe</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Kota</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Status</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-center hidden sm:table-cell">Anggota</th>
                        <th className="px-4 md:px-5 pb-3 pt-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-[11px]">
                      {filteredOrganizations.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-5 py-12 text-center text-text-secondary">
                            <span className="material-symbols-outlined text-3xl mb-1 block">search_off</span>
                            Tidak ada organisasi ditemukan
                          </td>
                        </tr>
                      ) : (
                        filteredOrganizations.map((org) => (
                          <tr key={org.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center gap-3">
                                <img src={org.logoSrc} alt="" className="w-12 h-12 rounded-xl object-cover border border-border/50 flex-shrink-0 bg-slate-50" />
                                <div className="min-w-0">
                                  <p className="font-bold text-text-primary truncate max-w-[220px] md:max-w-[320px]">{org.name}</p>
                                  <p className="text-text-secondary text-[10px] truncate mt-0.5 font-medium">{org.leadName}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 hidden md:table-cell">{getTypeBadge(org.type)}</td>
                            <td className="px-4 md:px-5 py-2.5 hidden lg:table-cell text-text-secondary font-medium">{org.city}</td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${org.status === 'Aktif' ? 'bg-[#E6F4EA] text-[#10B981] border-[#D1FAE5]' : 'bg-[#FEE2E2] text-[#EF4444] border-[#FECACA]'}`}>
                                {org.status}
                              </span>
                            </td>
                            <td className="px-4 md:px-5 py-2.5 text-center hidden sm:table-cell text-text-secondary font-bold">{org.membersCount}</td>
                            <td className="px-4 md:px-5 py-2.5">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => { setEditingOrganization(org); setShowForm(true); }}
                                  className="p-1.5 rounded-lg text-text-secondary hover:text-[#1E5EF3] hover:bg-[#EBF3FF] transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(org.id)}
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
                    Menampilkan <span className="text-text-primary font-black">{filteredOrganizations.length}</span> dari <span className="text-text-primary font-black">{organizations.length}</span> organisasi
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
            <h3 className="font-bold text-text-primary text-sm mb-2">Hapus Organisasi?</h3>
            <p className="text-text-secondary text-xs mb-4">Data organisasi yang dihapus tidak dapat dikembalikan. Lanjutkan?</p>
            <div className="flex items-center justify-end gap-2 text-xs font-bold">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteOrganization(deleteConfirm)}
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

export default AdminOrganizationsPage;
