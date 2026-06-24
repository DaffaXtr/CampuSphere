import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MerchCard = ({ 
  id = 1, 
  name, 
  category, 
  price, 
  imageSrc, 
  ratingValue = 4.8, 
  reviewsCount = 120, 
  soldCount = 150, 
  storeName = 'HIMTI Official Store', 
  tag = null 
}) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); // Mencegah event click merambat ke Link induk
    navigate('/merchandise/cart');
  };

  const handleLikeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const getTagBgColor = (tagText) => {
    const text = tagText.toUpperCase();
    if (text === 'BEST SELLER' || text === 'NEW ARRIVAL' || text === 'NEW') {
      return 'bg-primary-yellow text-text-primary font-bold'; // Yellow is bright, so use dark text
    }
    if (text === 'POPULAR') {
      return 'bg-orange-500 text-white';
    }
    return 'bg-primary-blue text-white'; // default
  };

  return (
    <Link 
      to={`/merchandise/${id}`} 
      className="bg-white border border-border rounded-2xl p-md hover:border-primary-blue/50 hover:shadow-md transition-all duration-300 flex flex-col gap-sm group relative cursor-pointer text-left"
    >
      {/* Product Image Area */}
      <div className="aspect-square overflow-hidden rounded-xl bg-surface-container-high flex items-center justify-center relative">
        <img 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={imageSrc} 
        />

        {/* Top-Left Tag Badge */}
        {tag && (
          <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase ${getTagBgColor(tag)}`}>
            {tag}
          </span>
        )}

        {/* Top-Right Favorite Button */}
        <button 
          onClick={handleLikeToggle}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-text-secondary hover:text-primary-yellow shadow-sm flex items-center justify-center transition-all"
        >
          <span className={`material-symbols-outlined text-[18px] ${isLiked ? 'fill-primary-yellow text-primary-yellow' : 'text-text-secondary'}`}>
            favorite
          </span>
        </button>
      </div>
      
      {/* Product Details */}
      <div className="flex flex-col flex-1 gap-1">
        {/* Title */}
        <h4 className="font-bold text-sm text-text-primary line-clamp-2 group-hover:text-primary-blue transition-colors leading-snug">
          {name}
        </h4>
        
        {/* Organization Official Store */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-text-secondary font-semibold text-[11px] truncate">
            {storeName}
          </span>
          <span className="material-symbols-outlined text-[14px] text-primary-blue fill-primary-blue">
            verified
          </span>
        </div>
        
        {/* Rating & Sold Social Proof */}
        <div className="flex items-center gap-1.5 mt-1 text-[11px] text-text-secondary">
          <div className="flex items-center gap-0.5 text-warning">
            <span className="material-symbols-outlined text-[13px] fill-current">star</span>
            <span className="font-bold text-text-primary">{ratingValue}</span>
            <span className="text-text-secondary text-[10px]">({reviewsCount})</span>
          </div>
          <span className="text-border/80">|</span>
          <span>Terjual {soldCount}</span>
        </div>

        {/* Price & Cart CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
          <span className="font-extrabold text-primary-blue text-sm md:text-base">{price}</span>
          
          <button 
            onClick={handleAddToCart}
            className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-primary-blue hover:bg-secondary-blue text-white transition-all shadow-sm flex items-center justify-center active:scale-95 group-hover:shadow"
            title="Tambah ke Keranjang"
          >
            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MerchCard;
