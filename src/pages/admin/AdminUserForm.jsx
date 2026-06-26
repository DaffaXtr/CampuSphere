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
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider mb-6">{user ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="nama@campusphere.id"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Admin Event">Admin Event</option>
              <option value="Admin Merchandise">Admin Merchandise</option>
              <option value="Admin Organisasi">Admin Organisasi</option>
              <option value="Editor Artikel">Editor Artikel</option>
            </select>
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
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Tanggal Bergabung</label>
            <input
              type="date"
              name="joinedAt"
              value={formData.joinedAt}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white outline-none cursor-pointer font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Organisasi</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="Contoh: HIMA Teknik Informatika"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">URL Avatar</label>
            <input
              type="url"
              name="avatarSrc"
              value={formData.avatarSrc}
              onChange={handleChange}
              required
              className="w-full bg-[#F9FAFB] border border-border rounded-xl px-4 py-2.5 text-xs text-text-primary focus:border-[#1E5EF3] focus:bg-white focus:ring-1 focus:ring-[#1E5EF3]/20 outline-none"
              placeholder="https://..."
            />
          </div>
        </div>

        {formData.avatarSrc && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Preview Avatar</label>
            <img
              src={formData.avatarSrc}
              alt="Preview avatar"
              className="w-16 h-16 rounded-full border border-border object-cover bg-white"
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
          {user ? 'Simpan Perubahan' : 'Simpan Pengguna'}
        </button>
      </div>
    </form>
  );
};

export default AdminUserForm;
