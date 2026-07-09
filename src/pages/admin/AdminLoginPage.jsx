import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Jika admin sudah login, redirect langsung ke dashboard
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/admin', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulasi loading sedikit agar terkesan modern/premium
    setTimeout(() => {
      // Dummy credentials
      if (email === 'admin@campusphere.com' && password === 'admin123') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        navigate('/admin', { replace: true });
      } else {
        setError('Email atau password admin salah!');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-[#0F52BA]/10 via-[#F8FAFC] to-[#1E5EF3]/10 px-4">
      {/* Background circles decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E5EF3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0F52BA]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-border/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-100/50 backdrop-blur-sm relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-extrabold text-headline-xl text-text-primary text-[24px] tracking-tight leading-none">
            CampuSphere
          </h2>
          <p className="text-text-secondary text-body-sm font-medium mt-2">
            Masuk untuk mengakses dasbor admin fakultas
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-danger-container border border-danger/25 text-danger text-body-sm font-semibold flex items-center gap-3 animate-shake">
            <span className="material-symbols-outlined text-[20px] shrink-0">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm font-bold text-text-primary uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-[20px] text-text-secondary">
                mail
              </span>
              <input
                type="email"
                required
                placeholder="admin@campusphere.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 focus:bg-white border border-border/80 focus:border-[#1E5EF3] rounded-2xl outline-none font-body-md text-text-primary transition-all shadow-sm focus:shadow"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm font-bold text-text-primary uppercase tracking-wider">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-[20px] text-text-secondary">
                lock
              </span>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 focus:bg-white border border-border/80 focus:border-[#1E5EF3] rounded-2xl outline-none font-body-md text-text-primary transition-all shadow-sm focus:shadow"
              />
            </div>
          </div>

          {/* Help Info Box */}
          <div className="p-4 rounded-2xl bg-[#EBF3FF] border border-[#D0E2FF] flex gap-3 mt-1">
            <span className="material-symbols-outlined text-[20px] text-[#0F52BA] shrink-0 mt-0.5">
              info
            </span>
            <div>
              <p className="font-bold text-[11px] text-[#0F52BA] leading-none mb-1">
                Kredensial Demo Admin
              </p>
              <p className="text-[10px] text-text-secondary font-medium leading-relaxed">
                Email: <span className="font-semibold text-text-primary">admin@campusphere.com</span>
                <br />
                Password: <span className="font-semibold text-text-primary">admin123</span>
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 mt-3 bg-[#1E5EF3] hover:bg-[#0F52BA] disabled:bg-[#1E5EF3]/70 text-white rounded-2xl font-bold text-label-lg shadow-md shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Menghubungkan...</span>
              </>
            ) : (
              <>
                <span>Masuk Ke Dasbor</span>
                <span className="material-symbols-outlined text-[20px]">login</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
