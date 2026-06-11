import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MerchSuccessPage = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dummy receipt data
  const orderId = 'ORD-2026-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  const product = {
    name: 'Official Campus Hoodie - Navy Blue',
    price: 150000,
    size: 'M',
    quantity: 1
  };

  const shippingFee = 0; // Assuming campus pickup for dummy display
  const serviceFee = 2000;
  const total = (product.price * product.quantity) + shippingFee + serviceFee;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  return (
    <div className="py-xl md:py-3xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto min-h-[80vh] flex flex-col items-center justify-center bg-surface-container-lowest">
      
      {/* Success Icon & Header */}
      <div className="flex flex-col items-center text-center mb-xl animate-fade-in-down">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-success/10 rounded-full flex items-center justify-center mb-md border-4 border-success/20">
          <span className="material-symbols-outlined text-[48px] md:text-[60px] text-success">check_circle</span>
        </div>
        <h1 className="font-headline-xl text-[28px] md:text-headline-xl text-text-primary tracking-tight mb-xs">Pembayaran Berhasil!</h1>
        <p className="font-body-md text-text-secondary max-w-md">Terima kasih atas pesanan Anda. Kami sedang memproses merchandise pilihan Anda dan akan segera mengirimkannya.</p>
      </div>

      {/* Receipt Card */}
      <div className="w-full max-w-lg bg-white border border-border rounded-2xl p-lg md:p-xl shadow-lg relative overflow-hidden mb-xl">
        {/* Decorative receipt zig-zag top/bottom edges could go here via CSS, but using clean rounded borders is more modern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-tertiary"></div>
        
        {/* Receipt Header */}
        <div className="flex justify-between items-start mb-md border-b border-dashed border-border pb-md">
          <div>
            <span className="font-label-sm text-text-secondary uppercase tracking-wider block mb-1">Order ID</span>
            <span className="font-bold text-body-lg text-text-primary">{orderId}</span>
          </div>
          <div className="text-right">
            <span className="font-label-sm text-text-secondary uppercase tracking-wider block mb-1">Tanggal</span>
            <span className="font-body-sm text-text-primary">{date}</span>
          </div>
        </div>

        {/* Item List */}
        <div className="mb-md border-b border-dashed border-border pb-md">
          <span className="font-label-sm text-text-secondary uppercase tracking-wider block mb-md">Item Pesanan</span>
          <div className="flex justify-between items-start mb-sm">
            <div className="flex-1 pr-md">
              <h4 className="font-bold text-body-md text-text-primary">{product.name}</h4>
              <p className="font-body-sm text-text-secondary">Ukuran: {product.size} x {product.quantity}</p>
            </div>
            <span className="font-bold text-body-md text-text-primary">{formatRupiah(product.price)}</span>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mb-md border-b border-dashed border-border pb-md">
          <span className="font-label-sm text-text-secondary uppercase tracking-wider block mb-xs">Metode Pengiriman</span>
          <h4 className="font-bold text-body-md text-text-primary mb-1">Ambil di Kampus</h4>
          <p className="font-body-sm text-text-secondary">Gedung Pusat Kegiatan Mahasiswa, Lt. 1</p>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-sm mb-lg">
          <div className="flex justify-between items-center">
            <span className="font-body-sm text-text-secondary">Subtotal Produk</span>
            <span className="font-body-sm text-text-primary">{formatRupiah(product.price * product.quantity)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-sm text-text-secondary">Biaya Pengiriman</span>
            <span className="font-body-sm text-text-primary">Gratis</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-sm text-text-secondary">Biaya Layanan</span>
            <span className="font-body-sm text-text-primary">{formatRupiah(serviceFee)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center bg-surface-container p-md rounded-xl">
          <span className="font-headline-sm text-text-primary">Total Bayar</span>
          <span className="font-headline-md text-primary">{formatRupiah(total)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row w-full max-w-lg gap-md">
        <Link to="/history" className="flex-1 py-md rounded-xl font-bold text-label-lg bg-primary text-white hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center">
          Riwayat Transaksi
        </Link>
        <Link to="/merchandise" className="flex-1 py-md rounded-xl font-bold text-label-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors flex items-center justify-center">
          Lanjut Belanja
        </Link>
      </div>

    </div>
  );
};

export default MerchSuccessPage;
