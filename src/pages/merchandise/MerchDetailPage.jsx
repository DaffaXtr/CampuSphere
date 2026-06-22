import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import MerchCard from '../../components/merchandise/MerchCard';

const MerchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount or when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Mock product data based on ID
  // In a real app, you would fetch this data from an API
  const product = {
    id: parseInt(id) || 1,
    name: 'Official Campus Hoodie - Navy Blue',
    category: 'Apparel',
    price: 'Rp 150.000',
    description: 'Tunjukkan kebanggaan kampusmu dengan hoodie resmi ini! Terbuat dari bahan katun fleece premium yang lembut dan hangat, cocok untuk digunakan saat kuliah pagi atau bersantai di akhir pekan. Desain sablon berkualitas tinggi tidak mudah luntur meskipun dicuci berkali-kali.',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    rating: '4.8',
    reviewsCount: 120,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 25
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Minimalist Student T-Shirt',
      category: 'Apparel',
      price: 'Rp 65.000',
      imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
      rating: '4.5 (85 reviews)'
    },
    {
      id: 3,
      name: 'Premium Canvas Tote Bag',
      category: 'Accessories',
      price: 'Rp 45.000',
      imageSrc: 'https://images.unsplash.com/photo-1597484661643-2f5fef640df1?q=80&w=600&auto=format&fit=crop',
      rating: '4.9 (200 reviews)'
    },
    {
      id: 4,
      name: 'Campus Exclusive Tumbler',
      category: 'Accessories',
      price: 'Rp 85.000',
      imageSrc: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
      rating: '4.7 (150 reviews)'
    }
  ];

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (isAdding || isAdded) return;
    
    setIsAdding(true);
    
    // Simulate network request
    setTimeout(() => {
      const currentCount = parseInt(localStorage.getItem('cartCount') || '2');
      localStorage.setItem('cartCount', currentCount + quantity);
      window.dispatchEvent(new Event('cartUpdated'));
      
      setIsAdding(false);
      setIsAdded(true);
      
      // Reset back to normal after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
        setQuantity(1); // optional reset
      }, 2000);
    }, 600);
  };

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="mb-xl">
        <Breadcrumb items={[
          { label: 'Merchandise', path: '/merchandise' },
          { label: product.name }
        ]} />
      </div>

      {/* Product Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl md:gap-3xl mb-3xl">
        
        {/* Left Column: Image Gallery */}
        <div className="flex flex-col gap-sm">
          <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-surface-variant flex items-center justify-center border border-border relative">
            <img 
              src={product.imageSrc} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {/* Optional badge */}
            <div className="absolute top-md left-md bg-white px-3 py-1 rounded-full border border-border shadow-sm font-bold text-primary text-label-sm">
              Best Seller
            </div>
          </div>
          {/* Thumbnails placeholder for future if needed */}
          <div className="flex gap-sm">
            <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-primary cursor-pointer bg-surface-variant">
              <img src={product.imageSrc} alt="Thumbnail 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-border cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-text-secondary">photo_camera</span>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="flex flex-col">
          <span className="font-label-md text-text-secondary uppercase tracking-wider mb-xs">{product.category}</span>
          <h1 className="font-headline-xl text-[24px] md:text-headline-xl text-text-primary tracking-tight mb-sm">{product.name}</h1>
          
          <div className="flex items-center gap-md mb-lg border-b border-border pb-lg">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-warning text-[20px]">star</span>
              <span className="font-bold text-body-md text-text-primary">{product.rating}</span>
            </div>
            <span className="w-1 h-1 bg-border rounded-full"></span>
            <span className="font-body-sm text-text-secondary hover:text-primary cursor-pointer transition-colors underline">{product.reviewsCount} Ulasan</span>
            <span className="w-1 h-1 bg-border rounded-full"></span>
            <span className="font-body-sm text-success font-medium">Stok: {product.stock}</span>
          </div>

          <h2 className="font-headline-xl text-[28px] text-primary mb-xl">{product.price}</h2>

          <div className="mb-xl">
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-sm">Deskripsi Produk</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selector */}
          {product.category === 'Apparel' && (
            <div className="mb-xl">
              <div className="flex justify-between items-center mb-sm">
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Pilih Ukuran</h3>
                <span className="font-label-sm text-primary hover:underline cursor-pointer">Panduan Ukuran</span>
              </div>
              <div className="flex flex-wrap gap-sm">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-bold text-body-md transition-colors border ${
                      selectedSize === size 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-white text-text-primary border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-xl">
            <h3 className="font-headline-sm text-headline-sm text-text-primary mb-sm">Jumlah</h3>
            <div className="flex items-center gap-xs">
              <button 
                onClick={handleDecreaseQuantity}
                disabled={quantity <= 1}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-border text-text-secondary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <div className="w-16 h-10 flex items-center justify-center font-bold text-body-lg text-text-primary border border-border rounded-lg bg-surface-container-lowest">
                {quantity}
              </div>
              <button 
                onClick={handleIncreaseQuantity}
                disabled={quantity >= product.stock}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-border text-text-secondary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-sm mt-auto">
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-1 py-md border-2 rounded-xl font-bold text-label-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${
                isAdded 
                  ? 'bg-success border-success text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-70 disabled:cursor-wait'
              }`}
            >
              {isAdding ? (
                <>
                  <span className="material-symbols-outlined">sync</span>
                  Memproses...
                </>
              ) : isAdded ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Berhasil Ditambahkan
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                  Tambah ke Keranjang
                </>
              )}
            </button>
            <Link to={`/merchandise/${product.id}/checkout`} className="flex-1 py-md rounded-xl font-bold text-label-lg bg-primary text-white hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center">
              Beli Sekarang
            </Link>
          </div>
          
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-border pt-xl md:pt-3xl">
        <div className="flex items-center justify-between mb-lg">
          <h2 className="font-headline-md text-headline-md text-text-primary">Produk Terkait</h2>
          <Link to="/merchandise" className="text-primary font-label-md hover:underline">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-sm md:gap-lg">
          {relatedProducts.map((item) => (
            <MerchCard key={item.id} {...item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default MerchDetailPage;
