import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';

const dummyCartItems = [
  {
    id: 1,
    name: 'Official Campus Hoodie - Navy',
    variant: 'Size: L',
    price: 150000,
    priceLabel: 'Rp 150.000',
    quantity: 1,
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Classic Enamel Pin Set',
    variant: 'Edition: 2026',
    price: 35000,
    priceLabel: 'Rp 35.000',
    quantity: 2,
    imageSrc: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=600&auto=format&fit=crop'
  }
];

const MerchCartPage = () => {
  const [cartItems, setCartItems] = useState(dummyCartItems);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
  };

  const handleCheckout = () => {
    // In a real app, we would proceed to checkout with the whole cart.
    // For now, we simulate going to checkout page for a dummy item id=1.
    navigate('/merchandise/1/checkout');
  };

  return (
    <div className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <div className="mb-xl">
        <Breadcrumb items={[
          { label: 'Merchandise', path: '/merchandise' },
          { label: 'Keranjang Belanja' }
        ]} />
      </div>

      <h1 className="font-headline-lg text-headline-lg text-text-primary mb-xl">Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-3xl bg-surface border border-border rounded-2xl flex flex-col items-center">
          <span className="material-symbols-outlined text-[64px] text-outline-variant mb-md">shopping_cart</span>
          <h2 className="font-headline-md text-text-primary mb-sm">Keranjang Anda Kosong</h2>
          <p className="text-text-secondary mb-lg">Ayo temukan merchandise kampus favorit Anda!</p>
          <Link to="/merchandise" className="bg-primary text-white px-lg py-sm rounded-full font-bold hover:bg-primary-hover transition-colors">
            Mulai Belanja
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-md">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row bg-white border border-border rounded-xl p-md sm:p-lg gap-md sm:gap-lg items-start sm:items-center relative shadow-sm">
                
                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                  <img src={item.imageSrc} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline-sm text-text-primary mb-1 truncate">{item.name}</h3>
                  <p className="text-body-sm text-text-secondary mb-md">{item.variant}</p>
                  <p className="font-headline-md text-primary">{item.priceLabel}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-md sm:gap-lg mt-sm sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                  {/* Quantity */}
                  <div className="flex items-center border border-border rounded-lg bg-surface">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={item.quantity <= 1}
                      className="p-sm text-text-secondary hover:text-primary hover:bg-surface-container disabled:opacity-50 transition-colors rounded-l-lg"
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <span className="w-10 text-center font-bold text-text-primary">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="p-sm text-text-secondary hover:text-primary hover:bg-surface-container transition-colors rounded-r-lg"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="p-sm text-error hover:bg-error/10 rounded-full transition-colors flex items-center justify-center sm:absolute sm:top-md sm:right-md"
                    title="Hapus dari keranjang"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-border rounded-xl p-xl shadow-sm sticky top-24">
              <h2 className="font-headline-md text-text-primary mb-lg border-b border-border pb-sm">Ringkasan Belanja</h2>
              
              <div className="space-y-md mb-lg">
                <div className="flex justify-between text-body-md text-text-secondary">
                  <span>Total Barang</span>
                  <span>{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} Items</span>
                </div>
                <div className="flex justify-between text-headline-sm text-text-primary font-bold">
                  <span>Subtotal</span>
                  <span>{formatCurrency(calculateSubtotal())}</span>
                </div>
              </div>

              <div className="bg-surface-container-low border border-border rounded-lg p-md mb-xl flex gap-sm items-start">
                <span className="material-symbols-outlined text-outline text-[20px]">info</span>
                <p className="text-body-sm text-text-secondary">Biaya pengiriman dan pajak akan dihitung pada saat checkout.</p>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-primary text-white py-lg rounded-xl font-bold text-label-lg hover:bg-primary-hover active:scale-[0.98] transition-all flex justify-center items-center gap-sm shadow-md"
              >
                Lanjut ke Checkout
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>

              <div className="mt-md text-center">
                <Link to="/merchandise" className="text-primary hover:underline text-label-md font-bold">
                  Kembali Belanja
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchCartPage;
