import React, { useState } from 'react';
import { Smile, Frown, Meh, Send } from 'lucide-react';

export default function MoodTracker() {
  const [note, setNote] = useState('');

  return (
    <div className="bg-brand-card p-6 rounded-xl border border-brand-border h-full flex flex-col justify-between">
      <p className="text-sm font-semibold mb-4 text-white">¿Cómo estuvo tu día?</p>
      <div className="flex gap-6 mb-6">
        <button className="text-zinc-400 hover:text-brand-orange transition-colors">
          <Frown size={32} />
        </button>
        <button className="text-zinc-400 hover:text-brand-orange transition-colors">
          <Meh size={32} />
        </button>
        <button className="text-zinc-400 hover:text-brand-orange transition-colors">
          <Smile size={32} />
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Palabra o frase que refleje tu día..."
          className="w-full bg-brand-dark border border-brand-border rounded-lg p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange transition-colors"
        />
        <button className="absolute right-3 top-3 text-zinc-500 hover:text-brand-orange transition-colors">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
