// ===== Merchandise Categories & Filters =====
export const merchCategories = ['All Products', 'Apparel', 'Accessories', 'Stationery', 'Tumbler'];

export const merchPriceRanges = ['Any Price', 'Under Rp 50.000', 'Rp 50.000 - Rp 100.000', 'Over Rp 100.000'];

export const merchStores = [
  { name: 'Semua Store', logoText: 'CS', prodCount: '15 Store' },
  { name: 'HIMTI', logoText: 'HI', prodCount: '32 Produk' },
  { name: 'BEM FV', logoText: 'BF', prodCount: '28 Produk' },
  { name: 'HIMA Akuntansi', logoText: 'HA', prodCount: '24 Produk' },
  { name: 'UKM Creative', logoText: 'UC', prodCount: '18 Produk' },
  { name: 'HIMA Manajemen', logoText: 'HM', prodCount: '22 Produk' }
];

// ===== All Merchandise Products =====
export const allMerch = [
  {
    id: 1,
    name: 'Official Campus Hoodie Navy Blue',
    category: 'Apparel',
    price: 'Rp 150.000',
    numericPrice: 150000,
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.8,
    reviewsCount: 120,
    soldCount: 154,
    storeName: 'HIMTI Official Store',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Minimalist Student T-Shirt',
    category: 'Apparel',
    price: 'Rp 65.000',
    numericPrice: 65000,
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.5,
    reviewsCount: 85,
    soldCount: 98,
    storeName: 'BEM FV Official Store',
    tag: 'New Arrival'
  },
  {
    id: 3,
    name: 'Premium Canvas Tote Bag',
    category: 'Accessories',
    price: 'Rp 45.000',
    numericPrice: 45000,
    imageSrc: 'https://i.pinimg.com/webp/1200x/cf/8c/3a/cf8c3a3ac4a496028fc61a4d92fd8d1c.webp',
    ratingValue: 4.9,
    reviewsCount: 200,
    soldCount: 230,
    storeName: 'HIMTI Official Store',
    tag: 'Popular'
  },
  {
    id: 4,
    name: 'Campus Exclusive Tumbler',
    category: 'Tumbler',
    price: 'Rp 85.000',
    numericPrice: 85000,
    imageSrc: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.7,
    reviewsCount: 150,
    soldCount: 178,
    storeName: 'UKM Creative Official Store',
    tag: null
  },
  {
    id: 5,
    name: 'A5 Spiral Notebook - Edition 2026',
    category: 'Stationery',
    price: 'Rp 25.000',
    numericPrice: 25000,
    imageSrc: 'https://i.pinimg.com/webp/736x/f6/1f/0c/f61f0cb549b425e15036b5a04c101e5b.webp',
    ratingValue: 4.6,
    reviewsCount: 50,
    soldCount: 67,
    storeName: 'HIMA Akuntansi Store',
    tag: 'Limited'
  },
  {
    id: 6,
    name: 'Classic Enamel Pin Set',
    category: 'Accessories',
    price: 'Rp 35.000',
    numericPrice: 35000,
    imageSrc: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.9,
    reviewsCount: 90,
    soldCount: 122,
    storeName: 'UKM Creative Official Store',
    tag: null
  },
  {
    id: 7,
    name: 'Varsity Jacket - Premium Quality',
    category: 'Apparel',
    price: 'Rp 250.000',
    numericPrice: 250000,
    imageSrc: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.9,
    reviewsCount: 45,
    soldCount: 56,
    storeName: 'BEM FV Official Store',
    tag: null
  },
  {
    id: 8,
    name: 'Student Planner 2026-2027',
    category: 'Stationery',
    price: 'Rp 55.000',
    numericPrice: 55000,
    imageSrc: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.8,
    reviewsCount: 110,
    soldCount: 143,
    storeName: 'HIMA Manajemen Store',
    tag: 'New'
  },
  {
    id: 9,
    name: 'Campusphere Lanyard Edition',
    category: 'Accessories',
    price: 'Rp 20.000',
    numericPrice: 20000,
    imageSrc: 'https://images.unsplash.com/photo-1582214693766-9d56eb722cfa?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.7,
    reviewsCount: 80,
    soldCount: 205,
    storeName: 'Semua Store',
    tag: 'Best Seller'
  },
  {
    id: 10,
    name: 'Official Beanie Hat',
    category: 'Apparel',
    price: 'Rp 65.000',
    numericPrice: 65000,
    imageSrc: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.5,
    reviewsCount: 34,
    soldCount: 88,
    storeName: 'HIMTI',
    tag: null
  },
  {
    id: 11,
    name: 'Stainless Steel Tumbler Black',
    category: 'Tumbler',
    price: 'Rp 85.000',
    numericPrice: 85000,
    imageSrc: 'https://images.unsplash.com/photo-1517042533319-354eb611a21e?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.9,
    reviewsCount: 156,
    soldCount: 300,
    storeName: 'Semua Store',
    tag: 'Eco Friendly'
  },
  {
    id: 12,
    name: 'Campusphere Enamel Mug',
    category: 'Accessories',
    price: 'Rp 45.000',
    numericPrice: 45000,
    imageSrc: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.7,
    reviewsCount: 42,
    soldCount: 112,
    storeName: 'BEM FV Official Store',
    tag: null
  },
  {
    id: 13,
    name: 'Oversized Campus T-Shirt',
    category: 'Apparel',
    price: 'Rp 95.000',
    numericPrice: 95000,
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.8,
    reviewsCount: 89,
    soldCount: 154,
    storeName: 'UKM Creative Official Store',
    tag: 'Trending'
  },
  {
    id: 14,
    name: 'Premium Canvas Tote Bag',
    category: 'Accessories',
    price: 'Rp 60.000',
    numericPrice: 60000,
    imageSrc: 'https://images.unsplash.com/photo-1597820334272-b5ef81d6d2ce?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.6,
    reviewsCount: 75,
    soldCount: 210,
    storeName: 'HIMA Akuntansi Store',
    tag: null
  },
  {
    id: 15,
    name: 'Minimalist ID Card Holder',
    category: 'Accessories',
    price: 'Rp 30.000',
    numericPrice: 30000,
    imageSrc: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=600&auto=format&fit=crop',
    ratingValue: 4.9,
    reviewsCount: 22,
    soldCount: 65,
    storeName: 'HIMA Manajemen Store',
    tag: 'New'
  }
];
