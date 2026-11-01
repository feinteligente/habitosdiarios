"use client";

import React from 'react';
import { DollarSign, TrendingUp, CreditCard, ArrowUpRight } from 'lucide-react';

export default function FinanceWidget() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Resumen Financiero</h3>
        </div>
        <button className="text-xs text-[#FF5733] hover:underline font-medium flex items-center gap-1">
          Ver detalles <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-zinc-800/40 border border-zinc-800 rounded-xl space-y-1">
          <p className="text-xs text-zinc-400">Ahorro Mensual</p>
          <p className="text-xl font-bold text-emerald-400">$1,250.00</p>
          <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-medium">
            <TrendingUp className="w-3 h-3" /> +12% este mes
          </div>
        </div>

        <div className="p-3 bg-zinc-800/40 border border-zinc-800 rounded-xl space-y-1">
          <p className="text-xs text-zinc-400">Presupuesto</p>
          <p className="text-xl font-bold text-white">$800.00</p>
          <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-medium">
            <CreditCard className="w-3 h-3" /> 65% utilizado
          </div>
        </div>
      </div>
    </div>
  );
}
