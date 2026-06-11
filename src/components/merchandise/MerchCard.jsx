import { Link, useNavigate } from 'react-router-dom';

const MerchCard = ({ id = 1, name, category, price, imageSrc, rating }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Mencegah pindah ke halaman detail
    // Simulasi penambahan barang ke keranjang
    navigate('/merchandise/cart');
  };

  return (
    <Link to={`/merchandise/${id}`} className="bg-white border border-border rounded-xl p-sm md:p-md hover:border-primary transition-colors flex flex-col gap-2 md:gap-md group relative cursor-pointer">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-lg mb-1 md:mb-sm bg-surface-variant flex items-center justify-center relative">
        <img 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={imageSrc} 
        />
        {/* Hover overlay for quick action - optional */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-label-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
            Quick View
          </button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-bold text-[13px] md:text-body-md text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h4>
        </div>
        
        <p className="text-text-secondary text-[10px] md:text-label-sm mb-2">{category}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-auto">
          <span className="material-symbols-outlined text-warning text-[14px]">star</span>
          <span className="font-label-sm text-text-secondary text-[10px] md:text-label-sm">{rating}</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border border-dashed">
          <span className="font-bold text-primary text-[14px] md:text-headline-sm">{price}</span>
          <button 
            onClick={handleAddToCart}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-highest hover:bg-primary text-text-secondary hover:text-white transition-colors flex items-center justify-center"
            title="Tambah ke Keranjang"
          >
            <span className="material-symbols-outlined text-[16px] md:text-[20px]">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MerchCard;
