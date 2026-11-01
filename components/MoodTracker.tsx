"use client";

import React, { useState } from 'react';
import { Smile, Meh, Frown, Sun, CloudRain } from 'lucide-react';

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: 'great', label: 'Excelente', icon: Sun, color: 'text-amber-400' },
    { id: 'good', label: 'Bien', icon: Smile, color: 'text-emerald-400' },
    { id: 'neutral', label: 'Normal', icon: Meh, color: 'text-zinc-400' },
    { id: 'bad', label: 'Malo', icon: Frown, color: 'text-orange-400' },
    { id: 'down', label: 'Bajo', icon: CloudRain, color: 'text-blue-400' },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
      <h3 className="text-lg font-bold text-white">¿Cómo te sientes hoy?</h3>
      <div className="grid grid-cols-5 gap-2">
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-zinc-800 border-[#FF5733]'
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <Icon className={`w-6 h-6 ${mood.color}`} />
              <span className="text-xs font-medium text-zinc-300">{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
