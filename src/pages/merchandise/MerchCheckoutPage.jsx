import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';

const MerchCheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [deliveryMethod, setDeliveryMethod] = useState('campus');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // Dummy product data (should be fetched from state or API in real app)
  const product = {
    id: parseInt(id) || 1,
    name: 'Official Campus Hoodie - Navy Blue',
    price: 150000,
    priceFormatted: 'Rp 150.000',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    size: 'M',
    quantity: 1
  };

  // Pricing calculations
  const subtotal = product.price * product.quantity;
  const shippingFee = deliveryMethod === 'campus' ? 0 : 25000;
  const serviceFee = 2000;
  const total = subtotal + shippingFee + serviceFee;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Pilih metode pembayaran terlebih dahulu!');
      return;
    }
    // Redirect to payment page instead of direct success
    navigate(`/merchandise/${id || 1}/payment`);
  };

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col bg-surface-container-lowest">
      
      {/* Header & Breadcrumb */}
      <header className="mb-xl">
        <Breadcrumb items={[
          { label: 'Merchandise', path: '/merchandise' },
          { label: product.name, path: `/merchandise/${id}` },
          { label: 'Checkout' }
        ]} />
        <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-md mb-2">Checkout</h1>
        <p className="font-body-md text-text-secondary">Silakan lengkapi detail pengiriman dan pembayaran Anda.</p>
      </header>

      <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-3 gap-xl lg:gap-3xl items-start">
        
        {/* Left Column: Form Details (Takes up 2 cols on large screens) */}
        <div className="lg:col-span-2 flex flex-col gap-xl">
          
          {/* Section 1: Contact Info */}
          <section className="bg-white border border-border rounded-2xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm text-text-primary mb-md border-b border-border pb-sm">1. Informasi Kontak</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-text-secondary">Nama Lengkap</label>
                <input type="text" required placeholder="John Doe" className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-text-secondary">Nomor Telepon (WhatsApp)</label>
                <input type="tel" required placeholder="081234567890" className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="font-label-sm text-text-secondary">Email</label>
                <input type="email" required placeholder="student@campus.edu" className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>
          </section>

          {/* Section 2: Delivery Method */}
          <section className="bg-white border border-border rounded-2xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm text-text-primary mb-md border-b border-border pb-sm">2. Metode Pengiriman</h2>
            <div className="flex flex-col sm:flex-row gap-md mb-lg">
              <label className={`flex-1 flex items-start gap-sm p-md border rounded-xl cursor-pointer transition-all ${deliveryMethod === 'campus' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="campus" 
                  checked={deliveryMethod === 'campus'} 
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="mt-1 text-primary focus:ring-primary"
                />
                <div>
                  <h4 className="font-bold text-label-lg text-text-primary mb-1">Ambil di Kampus</h4>
                  <p className="font-body-sm text-text-secondary mb-1">Gedung Pusat Kegiatan Mahasiswa, Lt. 1</p>
                  <span className="font-bold text-success text-label-sm">Gratis Ongkir</span>
                </div>
              </label>

              <label className={`flex-1 flex items-start gap-sm p-md border rounded-xl cursor-pointer transition-all ${deliveryMethod === 'home' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="home" 
                  checked={deliveryMethod === 'home'} 
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="mt-1 text-primary focus:ring-primary"
                />
                <div>
                  <h4 className="font-bold text-label-lg text-text-primary mb-1">Kirim ke Rumah</h4>
                  <p className="font-body-sm text-text-secondary mb-1">Pengiriman reguler (2-3 hari kerja)</p>
                  <span className="font-bold text-primary text-label-sm">Rp 25.000</span>
                </div>
              </label>
            </div>

            {/* Home Address Form */}
            {deliveryMethod === 'home' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md animate-fade-in-down">
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="font-label-sm text-text-secondary">Alamat Lengkap</label>
                  <textarea required rows="3" placeholder="Jl. Contoh No. 123..." className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-text-secondary">Kota / Kabupaten</label>
                  <input type="text" required placeholder="Jakarta Selatan" className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-text-secondary">Kode Pos</label>
                  <input type="text" required placeholder="12345" className="w-full bg-surface-container-lowest border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
              </div>
            )}
          </section>

          {/* Section 3: Payment Method */}
          <section className="bg-white border border-border rounded-2xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm text-text-primary mb-md border-b border-border pb-sm">3. Metode Pembayaran</h2>
            <div className="flex flex-col gap-sm">
              {['QRIS', 'GoPay', 'OVO', 'Transfer Bank (BCA)', 'Transfer Bank (Mandiri)'].map(method => (
                <label key={method} className={`flex items-center gap-sm p-sm border rounded-lg cursor-pointer transition-all ${paymentMethod === method ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value={method} 
                    checked={paymentMethod === method} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="font-body-md text-text-primary">{method}</span>
                </label>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Order Summary (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-24 flex flex-col gap-md">
          <div className="bg-white border border-border rounded-2xl p-lg shadow-sm">
            <h2 className="font-headline-sm text-headline-sm text-text-primary mb-md border-b border-border pb-sm">Ringkasan Pesanan</h2>
            
            {/* Product Item */}
            <div className="flex gap-md mb-lg">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-label-md text-text-primary line-clamp-2 mb-1">{product.name}</h4>
                <p className="text-label-sm text-text-secondary mb-1">Ukuran: {product.size} | Qty: {product.quantity}</p>
                <span className="font-bold text-primary text-label-md">{product.priceFormatted}</span>
              </div>
            </div>

            {/* Price Details */}
            <div className="flex flex-col gap-sm mb-lg border-t border-b border-dashed border-border py-md">
              <div className="flex justify-between items-center">
                <span className="font-body-sm text-text-secondary">Subtotal Produk</span>
                <span className="font-body-sm text-text-primary">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-sm text-text-secondary">Biaya Pengiriman</span>
                <span className="font-body-sm text-text-primary">{shippingFee === 0 ? 'Gratis' : formatRupiah(shippingFee)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-sm text-text-secondary">Biaya Layanan</span>
                <span className="font-body-sm text-text-primary">{formatRupiah(serviceFee)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-xl">
              <span className="font-headline-sm text-text-primary">Total Pembayaran</span>
              <span className="font-headline-md text-primary">{formatRupiah(total)}</span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-md rounded-xl font-bold text-label-lg bg-primary text-white hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">lock</span>
              Bayar Sekarang
            </button>
          </div>
          
          <div className="text-center font-label-sm text-text-secondary flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            Pembayaran dijamin aman dan terenkripsi.
          </div>
        </div>

      </form>
    </div>
  );
};

export default MerchCheckoutPage;
