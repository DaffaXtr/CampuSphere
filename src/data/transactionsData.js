import { allMerch } from './merchandiseData';

const formatRupiah = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;

const createTransaction = ({
  id,
  merchandiseId,
  buyerName,
  quantity,
  paymentMethod,
  status,
  createdAt
}) => {
  const merch = allMerch.find((item) => item.id === merchandiseId) || allMerch[0];
  const numericTotal = Number(merch.numericPrice) * Number(quantity);

  return {
    id,
    invoiceCode: `TRX-${String(id).padStart(4, '0')}`,
    merchandiseId: merch.id,
    itemName: merch.name,
    itemImage: merch.imageSrc,
    storeName: merch.storeName,
    buyerName,
    quantity,
    unitPrice: formatRupiah(merch.numericPrice),
    totalPrice: formatRupiah(numericTotal),
    numericTotal,
    paymentMethod,
    status,
    createdAt
  };
};

export const transactionsData = [
  createTransaction({
    id: 1,
    merchandiseId: 1,
    buyerName: 'Raka Pradana',
    quantity: 1,
    paymentMethod: 'Transfer Bank',
    status: 'Berhasil',
    createdAt: '2026-06-10'
  }),
  createTransaction({
    id: 2,
    merchandiseId: 3,
    buyerName: 'Nabila Ayu',
    quantity: 2,
    paymentMethod: 'E-Wallet',
    status: 'Berhasil',
    createdAt: '2026-06-12'
  }),
  createTransaction({
    id: 3,
    merchandiseId: 11,
    buyerName: 'Dimas Alfi',
    quantity: 1,
    paymentMethod: 'Virtual Account',
    status: 'Pending',
    createdAt: '2026-06-14'
  }),
  createTransaction({
    id: 4,
    merchandiseId: 8,
    buyerName: 'Salsa Putri',
    quantity: 3,
    paymentMethod: 'Transfer Bank',
    status: 'Berhasil',
    createdAt: '2026-06-16'
  }),
  createTransaction({
    id: 5,
    merchandiseId: 7,
    buyerName: 'Ahmad Firdaus',
    quantity: 1,
    paymentMethod: 'E-Wallet',
    status: 'Dibatalkan',
    createdAt: '2026-06-18'
  })
];
