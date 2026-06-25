import { useState } from 'react';

const AdminUserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => ({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'Admin Event',
    organization: user?.organization || '',
    status: user?.status || 'Aktif',
    joinedAt: user?.joinedAt || '',
    avatarSrc: user?.avatarSrc || ''
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-lg md:p-xl shadow-sm">
      <h2 className="font-headline-lg text-xl text-text-primary mb-lg">{user ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h2>

      <div className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="nama@campusphere.id"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Admin Event">Admin Event</option>
              <option value="Admin Merchandise">Admin Merchandise</option>
              <option value="Admin Organisasi">Admin Organisasi</option>
              <option value="Editor Artikel">Editor Artikel</option>
            </select>
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
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Tanggal Bergabung</label>
            <input
              type="date"
              name="joinedAt"
              value={formData.joinedAt}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Organisasi</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="Contoh: HIMA Teknik Informatika"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">URL Avatar</label>
            <input
              type="url"
              name="avatarSrc"
              value={formData.avatarSrc}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-md py-3 text-sm text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.avatarSrc && (
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-xs">Preview Avatar</label>
            <img
              src={formData.avatarSrc}
              alt="Preview avatar"
              className="w-20 h-20 rounded-full border border-border object-cover"
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
          {user ? 'Simpan Perubahan' : 'Simpan Pengguna'}
        </button>
      </div>
    </form>
  );
};

export default AdminUserForm;
