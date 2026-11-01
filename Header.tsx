import React from 'react';
import { Bell, Search, Plus, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-brand-dark border-b border-brand-card">
      <div>
        <p className="text-sm text-brand-muted">¡Hola, Seba!</p>
        <p className="text-xl font-bold text-white">Martes {'<'} 18:00</p>
        <p className="text-xs text-zinc-500 italic">Vivo Sebas Spa...</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-brand-muted hover:text-brand-orange transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 text-brand-muted hover:text-brand-orange transition-colors">
          <Bell size={20} />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white rounded-full hover:bg-opacity-90 transition-all">
          <Plus size={20} />
          <span>Agregar tarea</span>
        </button>
      </div>
    </header>
  );
}
