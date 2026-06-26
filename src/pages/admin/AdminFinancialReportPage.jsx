import { useEffect, useMemo } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
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
    <div className="min-h-screen bg-background flex flex-col xl:flex-row w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB]">
        <AdminTopbar />
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-bold text-2xl text-text-primary flex items-center gap-2">
                Laporan Keuangan
              </h1>
              <p className="text-text-secondary text-xs mt-1">Ringkasan transaksi dan pendapatan dari data transaksi</p>
            </div>
            <button
              onClick={handleDownloadPdf}
              className="bg-[#1E5EF3] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download PDF
            </button>
          </div>

          {/* 4-Column Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#1E5EF3] bg-[#EBF3FF] border-[#D0E2FF] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Transaksi</p>
                <p className="text-2xl font-black text-[#1F2937] mt-1 leading-none">{summary.totalTransactions}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#10B981] bg-[#E6F4EA] border-[#D1FAE5] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Berhasil</p>
                <p className="text-2xl font-black text-[#10B981] mt-1 leading-none">{summary.successTransactions}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Pending</p>
                <p className="text-2xl font-black text-[#F59E0B] mt-1 leading-none">{summary.pendingTransactions}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#8B5CF6] bg-[#F5F3FF] border-[#E9D5FF] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">payments</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Pendapatan</p>
                <p className="text-2xl font-black text-[#8B5CF6] mt-1 leading-none">{formatRupiah(summary.totalRevenue)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 md:p-5 border-b border-border">
              <h2 className="font-bold text-sm text-text-primary uppercase tracking-wider">Detail Transaksi</h2>
              <p className="text-[10px] text-text-secondary mt-1 font-bold">Data ini digunakan saat export laporan PDF.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-[10px] font-bold text-text-secondary uppercase">
                    <th className="px-4 md:px-5 pb-3 pt-4">Invoice</th>
                    <th className="px-4 md:px-5 pb-3 pt-4">Tanggal</th>
                    <th className="px-4 md:px-5 pb-3 pt-4">Pembeli</th>
                    <th className="px-4 md:px-5 pb-3 pt-4 hidden lg:table-cell">Barang</th>
                    <th className="px-4 md:px-5 pb-3 pt-4 text-center">Status</th>
                    <th className="px-4 md:px-5 pb-3 pt-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-[11px]">
                  {transactionsData.map((trx) => (
                    <tr key={trx.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 md:px-5 py-2.5 font-bold text-[#1E5EF3]">{trx.invoiceCode}</td>
                      <td className="px-4 md:px-5 py-2.5 text-text-secondary font-medium">{trx.createdAt}</td>
                      <td className="px-4 md:px-5 py-2.5 text-text-secondary font-bold">{trx.buyerName}</td>
                      <td className="px-4 md:px-5 py-2.5 text-text-secondary font-medium hidden lg:table-cell truncate max-w-[320px]">{trx.itemName}</td>
                      <td className="px-4 md:px-5 py-2.5 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${
                          trx.status === 'Berhasil'
                            ? 'bg-[#E6F4EA] text-[#10B981] border-[#D1FAE5]'
                            : trx.status === 'Pending'
                              ? 'bg-[#FFFBEB] text-[#F59E0B] border-[#FEF3C7]'
                              : 'bg-[#FEE2E2] text-[#EF4444] border-[#FECACA]'
                        }`}>
                          {trx.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-5 py-2.5 text-right font-bold text-[#1F2937]">{trx.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-[10px] font-bold text-text-secondary">
            <p>© 2025 CampuSphere • Fakultas Universitas Airlangga</p>
            <p>v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFinancialReportPage;
