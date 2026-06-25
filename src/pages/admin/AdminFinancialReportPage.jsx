import { useEffect, useMemo } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import AdminSidebar from './AdminSidebar';
import { transactionsData } from '../../data/transactionsData';

const formatRupiah = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;

const AdminFinancialReportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const summary = useMemo(() => {
    const totalTransactions = transactionsData.length;
    const successTransactions = transactionsData.filter((trx) => trx.status === 'Berhasil').length;
    const pendingTransactions = transactionsData.filter((trx) => trx.status === 'Pending').length;
    const cancelledTransactions = transactionsData.filter((trx) => trx.status === 'Dibatalkan').length;
    const totalRevenue = transactionsData
      .filter((trx) => trx.status === 'Berhasil')
      .reduce((sum, trx) => sum + Number(trx.numericTotal || 0), 0);

    return {
      totalTransactions,
      successTransactions,
      pendingTransactions,
      cancelledTransactions,
      totalRevenue
    };
  }, []);

  const handleDownloadPdf = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const exportDate = new Date().toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    doc.setFontSize(16);
    doc.text('Laporan Keuangan CampuSphere', 14, 16);
    doc.setFontSize(10);
    doc.text(`Tanggal Export: ${exportDate}`, 14, 22);

    doc.setFontSize(11);
    doc.text(`Total Transaksi: ${summary.totalTransactions}`, 14, 31);
    doc.text(`Transaksi Berhasil: ${summary.successTransactions}`, 14, 37);
    doc.text(`Transaksi Pending: ${summary.pendingTransactions}`, 14, 43);
    doc.text(`Transaksi Dibatalkan: ${summary.cancelledTransactions}`, 14, 49);
    doc.text(`Total Pendapatan: ${formatRupiah(summary.totalRevenue)}`, 14, 55);

    autoTable(doc, {
      startY: 62,
      head: [['Invoice', 'Tanggal', 'Pembeli', 'Barang', 'Qty', 'Metode', 'Status', 'Total']],
      body: transactionsData.map((trx) => ([
        trx.invoiceCode,
        trx.createdAt,
        trx.buyerName,
        trx.itemName,
        String(trx.quantity),
        trx.paymentMethod,
        trx.status,
        trx.totalPrice
      ])),
      styles: {
        fontSize: 8,
        cellPadding: 2
      },
      headStyles: {
        fillColor: [9, 105, 218]
      }
    });

    doc.save(`laporan-keuangan-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background py-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-lg items-start">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
            <div>
              <h1 className="font-headline-lg text-2xl md:text-[32px] text-text-primary">Laporan Keuangan</h1>
              <p className="text-text-secondary text-sm mt-1">Ringkasan transaksi dan pendapatan dari data transaksi</p>
            </div>
            <button
              onClick={handleDownloadPdf}
              className="bg-primary-blue hover:bg-secondary-blue text-white font-bold text-sm px-lg py-3 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md mb-lg">
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Total Transaksi</p>
              <p className="mt-2 text-3xl font-black text-text-primary">{summary.totalTransactions}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Berhasil</p>
              <p className="mt-2 text-3xl font-black text-success">{summary.successTransactions}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Pending</p>
              <p className="mt-2 text-3xl font-black text-secondary-yellow">{summary.pendingTransactions}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-md shadow-sm">
              <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Pendapatan</p>
              <p className="mt-2 text-2xl font-black text-primary-blue">{formatRupiah(summary.totalRevenue)}</p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-md md:p-lg border-b border-border">
              <h2 className="font-bold text-text-primary">Detail Transaksi</h2>
              <p className="text-xs text-text-secondary mt-1">Data ini digunakan saat export laporan PDF.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
                    <th className="px-md md:px-lg py-3 font-semibold">Invoice</th>
                    <th className="px-md md:px-lg py-3 font-semibold">Tanggal</th>
                    <th className="px-md md:px-lg py-3 font-semibold">Pembeli</th>
                    <th className="px-md md:px-lg py-3 font-semibold hidden lg:table-cell">Barang</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-center">Status</th>
                    <th className="px-md md:px-lg py-3 font-semibold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {transactionsData.map((trx) => (
                    <tr key={trx.id} className="hover:bg-surface/60 transition-colors">
                      <td className="px-md md:px-lg py-3 font-semibold text-text-primary">{trx.invoiceCode}</td>
                      <td className="px-md md:px-lg py-3 text-text-secondary">{trx.createdAt}</td>
                      <td className="px-md md:px-lg py-3 text-text-secondary">{trx.buyerName}</td>
                      <td className="px-md md:px-lg py-3 text-text-secondary hidden lg:table-cell truncate max-w-[320px]">{trx.itemName}</td>
                      <td className="px-md md:px-lg py-3 text-center">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                          trx.status === 'Berhasil'
                            ? 'bg-success/10 text-success border-success/20'
                            : trx.status === 'Pending'
                              ? 'bg-secondary-yellow/15 text-secondary-yellow border-secondary-yellow/30'
                              : 'bg-error/10 text-error border-error/20'
                        }`}>
                          {trx.status}
                        </span>
                      </td>
                      <td className="px-md md:px-lg py-3 text-right font-semibold text-text-primary">{trx.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFinancialReportPage;
