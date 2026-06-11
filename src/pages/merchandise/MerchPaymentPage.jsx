import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';

const MerchPaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 - 1);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  // Copy to clipboard helper
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'bank') {
        setCopiedBank(true);
        setTimeout(() => setCopiedBank(false), 2000);
      } else {
        setCopiedAmount(true);
        setTimeout(() => setCopiedAmount(false), 2000);
      }
    });
  };

  const handlePaid = () => {
    navigate('/merchandise/success');
  };

  return (
    <div className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-xl">
        <Breadcrumb items={[
          { label: 'Merchandise', path: '/merchandise' },
          { label: 'Produk', path: `/merchandise/${id || 1}` },
          { label: 'Checkout', path: `/merchandise/${id || 1}/checkout` },
          { label: 'Payment' }
        ]} />
      </div>

      {/* Hero Status Section */}
      <section className="flex flex-col items-center text-center mb-2xl">
        <div className="w-16 h-16 bg-warning/10 text-warning rounded-full flex items-center justify-center mb-md">
          <span className="material-symbols-outlined text-[32px]">schedule</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-text-primary mb-xs">Menunggu Pembayaran</h1>
        <p className="text-text-secondary font-body-md mb-lg">Silakan selesaikan pembayaran Anda sebelum waktu habis untuk mengamankan pesanan.</p>
        <div className="bg-surface-container-low border border-border px-xl py-md rounded-full inline-flex items-center gap-md shadow-sm">
          <span className="text-text-secondary font-label-md">Bayar dalam:</span>
          <span className={`font-numeric-tabular text-headline-md tracking-widest ${timeLeft <= 0 ? 'text-error' : 'text-primary'}`}>
            {timeLeft <= 0 ? "EXPIRED" : `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
          </span>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-3xl">
        {/* Left Column: Bank Details & QRIS */}
        <div className="lg:col-span-7 space-y-gutter">
          
          {/* Bank Transfer Card */}
          <div className="bg-white border border-border rounded-2xl p-xl shadow-sm">
            <div className="flex items-center justify-between mb-xl border-b border-border pb-sm">
              <h2 className="font-headline-md text-headline-md text-text-primary">Detail Transfer Bank</h2>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqB_AJ5ktGs2PNb61kLrGd18zE8qCtB3SBW3pFi57LDthUEQgW-V0orEmPOLcWAUgFDlFK7O9caaJcGpEUxup01u9iDJNdQ4pdVgxlqX4TNT-KIlFqslIOqxKigp3z-75djequAqvvBLIX5n46Z8Brzv0Bh2igI_3MgITzlyqFtdzsPHPaIm0R1CSeM5Opzoe33yedahcWgcw_FJUMGSllullHEKewmPZE5O46mx4YQLjC8NFvyDNkn5EPsewmIKdQ3eF4QT3PEuoW" 
                alt="Bank Logo" 
                className="h-8 object-contain" 
              />
            </div>
            <div className="space-y-lg">
              <div className="flex flex-col gap-xs">
                <span className="text-label-sm text-outline uppercase tracking-wider">Nama Bank</span>
                <span className="font-body-lg text-text-primary font-semibold">Bank Central Campus</span>
              </div>
              <div className="flex items-center justify-between p-lg bg-surface border border-border rounded-xl">
                <div className="flex flex-col gap-xs">
                  <span className="text-label-sm text-outline uppercase tracking-wider">Nomor Rekening (Virtual Account)</span>
                  <span className="font-headline-md text-text-primary tracking-tight">8830 1928 3342 1109</span>
                </div>
                <button 
                  onClick={() => handleCopy('8830192833421109', 'bank')}
                  className={`flex items-center gap-xs font-label-md px-md py-sm rounded-lg transition-colors ${copiedBank ? 'text-success bg-success/10' : 'text-primary hover:bg-primary/5'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{copiedBank ? 'check' : 'content_copy'}</span>
                  {copiedBank ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-label-sm text-outline uppercase tracking-wider">Nama Rekening</span>
                <span className="font-body-lg text-text-primary font-semibold">CampuSphere Merchandise</span>
              </div>
            </div>
          </div>

          {/* QRIS Section */}
          <div className="bg-white border border-border rounded-2xl p-xl shadow-sm">
            <h2 className="font-headline-md text-headline-md text-text-primary mb-xl border-b border-border pb-sm">E-Wallet / QRIS</h2>
            <div className="flex flex-col md:flex-row items-center gap-xl">
              <div className="p-lg bg-white border border-border rounded-xl shadow-sm relative overflow-hidden group">
                <div className="w-48 h-48 bg-surface-container flex items-center justify-center border-2 border-dashed border-outline-variant rounded-lg">
                  <div className="text-center p-md">
                    <span className="material-symbols-outlined text-outline-variant text-[48px] mb-sm">qr_code_2</span>
                    <p className="text-label-sm text-outline-variant">QR Code will appear here</p>
                  </div>
                </div>
                <div className="absolute inset-0 p-lg bg-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[64px]">qr_code_scanner</span>
                </div>
              </div>
              <div className="flex-1 space-y-md">
                <p className="text-body-md text-text-secondary">Scan kode QRIS menggunakan aplikasi E-Wallet pilihan Anda (GoPay, OVO, Dana, ShopeePay) atau aplikasi Mobile Banking apapun.</p>
                <div className="flex flex-wrap gap-md opacity-80">
                  <span className="px-md py-xs bg-surface border border-border rounded-full text-label-sm text-text-primary font-semibold">Mendukung QRIS</span>
                  <span className="px-md py-xs bg-surface border border-border rounded-full text-label-sm text-text-primary font-semibold">Verifikasi Instan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Steps */}
        <div className="lg:col-span-5 space-y-gutter">
          
          {/* Total Amount Card */}
          <div className="bg-primary border border-primary rounded-2xl p-xl text-white shadow-md relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <span className="text-label-sm text-white/80 uppercase tracking-widest block mb-xs">Total Pembayaran</span>
            <div className="flex items-center justify-between mt-sm relative z-10">
              <div className="font-headline-xl text-headline-xl">Rp 177.000</div>
              <button 
                onClick={() => handleCopy('177000', 'amount')}
                className="bg-white/20 hover:bg-white/30 px-lg py-sm rounded-lg backdrop-blur-md transition-all flex items-center gap-xs font-label-md"
              >
                <span className="material-symbols-outlined text-[18px]">{copiedAmount ? 'check' : 'content_copy'}</span>
                {copiedAmount ? 'Tersalin!' : 'Salin'}
              </button>
            </div>
            <div className="mt-lg pt-lg border-t border-white/20 flex justify-between items-center text-body-sm relative z-10">
              <span className="opacity-90 font-medium">Order ID: #CS-MERCH-88219</span>
              <span className="bg-white/20 px-md py-1 rounded-full text-xs font-bold uppercase tracking-wider">Merchandise</span>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-white border border-border rounded-2xl p-xl shadow-sm">
            <h2 className="font-headline-md text-headline-md text-text-primary mb-lg border-b border-border pb-sm">Instruksi Pembayaran</h2>
            <ul className="space-y-lg">
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
                <p className="text-body-md text-text-primary">Buka aplikasi <span className="font-semibold text-primary">Mobile Banking</span> atau E-Wallet Anda.</p>
              </li>
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
                <p className="text-body-md text-text-primary">Pilih menu <span className="font-semibold">Transfer</span>, lalu pilih <span class="font-semibold">Virtual Account</span> atau Bank Lainnya.</p>
              </li>
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
                <p className="text-body-md text-text-primary">Masukkan nomor virtual account dan pastikan <span className="font-semibold">nominal persis</span> seperti yang tertera di atas.</p>
              </li>
              <li className="flex gap-md items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">4</div>
                <p className="text-body-md text-text-primary">Verifikasi bahwa nama penerima adalah <span className="font-semibold">CampuSphere Merchandise</span> lalu konfirmasi pembayaran.</p>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-md pt-md">
            <button 
              onClick={handlePaid}
              className="w-full py-lg bg-primary text-white font-bold text-label-lg rounded-xl hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-md"
            >
              I Have Paid (Saya Sudah Bayar)
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="grid grid-cols-2 gap-md">
              <Link to="/history" className="py-md border border-border bg-white text-text-primary font-bold text-label-md rounded-xl hover:bg-surface transition-all flex items-center justify-center gap-sm shadow-sm">
                <span className="material-symbols-outlined text-[20px]">history</span>
                Riwayat
              </Link>
              <button className="py-md border border-border bg-white text-text-primary font-bold text-label-md rounded-xl hover:bg-surface transition-all flex items-center justify-center gap-sm shadow-sm">
                <span className="material-symbols-outlined text-[20px]">sync</span>
                Cek Status
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <section className="mb-3xl text-center max-w-2xl mx-auto bg-surface-container border border-border rounded-2xl p-xl">
        <h3 className="font-headline-sm text-headline-sm text-text-primary mb-xs">Butuh Bantuan?</h3>
        <p className="text-text-secondary text-body-sm mb-lg">Jika Anda mengalami kendala atau pembayaran Anda belum diverifikasi dalam 10 menit, silakan hubungi tim dukungan kampus kami.</p>
        <div className="flex flex-wrap justify-center items-center gap-md">
          <button className="inline-flex items-center gap-xs font-bold text-label-md text-primary hover:underline bg-primary/5 px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Live Chat
          </button>
          <span className="text-border hidden sm:inline">|</span>
          <a href="mailto:support@campusphere.edu" className="inline-flex items-center gap-xs font-bold text-label-md text-primary hover:underline bg-primary/5 px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            support@campusphere.edu
          </a>
        </div>
      </section>

    </div>
  );
};

export default MerchPaymentPage;
