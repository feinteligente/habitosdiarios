"use client";

import React from 'react';
import { Home, Calendar, Award, Settings, BarChart2, Flame, Heart } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Inicio', active: true },
    { icon: Calendar, label: 'Hábitos', active: false },
    { icon: BarChart2, label: 'Estadísticas', active: false },
    { icon: Award, label: 'Logros', active: false },
    { icon: Settings, label: 'Ajustes', active: false },
  ];

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between h-screen p-4">
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-[#FF5733] rounded-lg flex items-center justify-center text-white font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <span className="font-bold text-white text-lg">Hábitos Diarios</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  item.active
                    ? 'bg-[#FF5733] text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-3 bg-zinc-800/50 rounded-xl border border-zinc-800 text-center space-y-2">
        <div className="flex items-center justify-center gap-1 text-[#FF5733]">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-xs font-semibold uppercase tracking-wider">Racha Activa</span>
        </div>
        <p className="text-2xl font-black text-white">12 Días</p>
      </div>
    </aside>
  );
}
