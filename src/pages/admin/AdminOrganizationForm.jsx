import { useState } from 'react';

const AdminOrganizationForm = ({ organization, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => ({
    name: organization?.name || '',
    type: organization?.type || 'Komunitas',
    city: organization?.city || '',
    membersCount: organization?.membersCount ?? 0,
    status: organization?.status || 'Aktif',
    leadName: organization?.leadName || '',
    logoSrc: organization?.logoSrc || ''
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'membersCount' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider mb-6">
        {organization ? 'Edit Organisasi' : 'Tambah Organisasi Baru'}
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Organisasi</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Masukkan nama organisasi"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Jenis Organisasi</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="BEM Fakultas">BEM Fakultas</option>
              <option value="Himpunan">Himpunan</option>
              <option value="UKM">UKM</option>
              <option value="Media Kampus">Media Kampus</option>
              <option value="Komunitas">Komunitas</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Kota</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Contoh: Surabaya"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Jumlah Anggota</label>
            <input
              type="number"
              min="0"
              name="membersCount"
              value={formData.membersCount}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="Aktif">Aktif</option>
              <option value="Vakum">Vakum</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Ketua / Lead</label>
            <input
              type="text"
              name="leadName"
              value={formData.leadName}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Masukkan nama ketua"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">URL Logo</label>
            <input
              type="url"
              name="logoSrc"
              value={formData.logoSrc}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.logoSrc && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Preview Logo</label>
            <img
              src={formData.logoSrc}
              alt="Preview logo"
              className="w-16 h-16 rounded-xl border border-border object-cover bg-white"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
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
          {organization ? 'Simpan Perubahan' : 'Simpan Organisasi'}
        </button>
      </div>
    </form>
  );
};

export default AdminOrganizationForm;
