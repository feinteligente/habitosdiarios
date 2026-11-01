import React from 'react';
import { DollarSign, ArrowUpRight } from 'lucide-react';

export default function FinanceWidget() {
  return (
    <div className="bg-brand-card p-6 rounded-xl border border-brand-border h-full flex flex-col justify-between">
      <div>
        <p className="text-sm font-semibold text-white mb-1">Finanzas</p>
        <span className="text-xs text-brand-orange bg-brand-orange/20 px-2 py-1 rounded-full font-semibold">Patrimonio</span>
      </div>
      <div className="my-6">
        <p className="text-3xl font-bold text-white mb-2">USD ..,...</p>
        <div className="flex items-center text-emerald-500 text-xs font-semibold">
          <ArrowUpRight size={14} className="mr-1" />
          <span>Crecimiento mensual</span>
        </div>
      </div>
      <button className="w-full bg-brand-dark border border-brand-border text-white py-2.5 rounded-lg text-sm hover:border-brand-orange transition-colors">
        Ver detalles
      </button>
    </div>
  );
}
