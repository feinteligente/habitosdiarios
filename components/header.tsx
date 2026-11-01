"use client";

import React from 'react';
import { Bell, Search, Plus, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-zinc-800 rounded-lg">
          <Menu className="w-6 h-6 text-zinc-400" />
        </button>
        <h1 className="text-xl font-bold text-white">Hábitos Diarios</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-zinc-800 rounded-lg relative">
          <Bell className="w-6 h-6 text-zinc-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5733] rounded-full"></span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 bg-[#FF5733] text-white rounded-full hover:bg-[#E04826]">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
