import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HabitCardProps {
  title: string;
  icon: LucideIcon;
  done: boolean;
  onToggle: () => void;
}

export default function HabitCard({ title, icon: Icon, done, onToggle }: HabitCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-xl flex flex-col items-center justify-between h-28 border transition ${
        done
          ? 'bg-brand-orange border-brand-orange text-white'
          : 'bg-brand-card border-brand-border text-zinc-300 hover:border-zinc-700'
      }`}
    >
      <Icon size={22} />
      <span className="text-xs font-medium text-center">{title}</span>
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
        done ? 'bg-white border-white text-brand-orange' : 'border-zinc-600'
      }`}>
        {done && <span className="text-[10px] font-bold">✓</span>}
      </div>
    </button>
  );
}
