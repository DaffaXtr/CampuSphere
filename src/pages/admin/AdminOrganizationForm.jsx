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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">
        {organization ? 'Edit Organisasi' : 'Tambah Organisasi Baru'}
      </h2>

      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Organisasi</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan nama organisasi"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Jenis Organisasi</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="BEM Fakultas">BEM Fakultas</option>
              <option value="Himpunan">Himpunan</option>
              <option value="UKM">UKM</option>
              <option value="Media Kampus">Media Kampus</option>
              <option value="Komunitas">Komunitas</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Kota</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Contoh: Surabaya"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Jumlah Anggota</label>
            <input
              type="number"
              min="0"
              name="membersCount"
              value={formData.membersCount}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Aktif">Aktif</option>
              <option value="Vakum">Vakum</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Ketua / Lead</label>
            <input
              type="text"
              name="leadName"
              value={formData.leadName}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan nama ketua"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">URL Logo</label>
            <input
              type="url"
              name="logoSrc"
              value={formData.logoSrc}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.logoSrc && (
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Preview Logo</label>
            <img
              src={formData.logoSrc}
              alt="Preview logo"
              className="w-20 h-20 rounded-xl border border-border object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-sm mt-lg pt-lg border-t border-border">
        <button
          type="button"
          onClick={onCancel}
          className="px-lg py-2.5 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-lg py-2.5 rounded-xl bg-primary-blue hover:bg-secondary-blue text-white text-sm font-semibold transition-colors"
        >
          {organization ? 'Simpan Perubahan' : 'Simpan Organisasi'}
        </button>
      </div>
    </form>
  );
};

export default AdminOrganizationForm;
