"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import HabitCard from '@/components/HabitCard';
import MoodTracker from '@/components/MoodTracker';
import FinanceWidget from '@/components/FinanceWidget';
import { Flame, Moon, Edit3, Pill, Activity, Dumbbell, Droplets } from 'lucide-react';

export default function Dashboard() {
  const [habits, setHabits] = useState([
    { id: 1, title: 'Dormir 8h', icon: Moon, done: false },
    { id: 2, title: 'Escribir', icon: Edit3, done: false },
    { id: 3, title: 'Melena de León', icon: Pill, done: true },
    { id: 4, title: 'Omega 3', icon: Pill, done: false },
    { id: 5, title: 'Creatina', icon: Activity, done: false },
    { id: 6, title: 'Meditación', icon: Activity, done: false },
    { id: 7, title: 'Ejercicio', icon: Dumbbell, done: false },
    { id: 8, title: 'Beber Agua', icon: Droplets, done: false },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  return (
    <div className="flex min-h-screen bg-brand-dark text-white font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-card p-4 rounded-xl flex items-center gap-4 border border-brand-border">
              <Flame className="text-brand-orange" size={28} />
              <div>
                <p className="text-2xl font-bold">49</p>
                <p className="text-xs text-brand-textMuted">Racha de Hábitos</p>
              </div>
            </div>
            <div className="bg-brand-card p-4 rounded-xl flex items-center gap-4 border border-brand-border">
              <Flame className="text-brand-orange" size={28} />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-xs text-brand-textMuted">Racha de Ritual</p>
              </div>
            </div>
            <div className="bg-brand-card p-4 rounded-xl flex items-center gap-4 border border-brand-border">
              <Flame className="text-brand-orange" size={28} />
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-brand-textMuted">Racha de Entrenamiento</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Hábitos de hoy</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {habits.map((habit) => (
                <HabitCard 
                  key={habit.id} 
                  title={habit.title} 
                  icon={habit.icon} 
                  done={habit.done} 
                  onToggle={() => toggleHabit(habit.id)} 
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <MoodTracker />
            </div>
            <div className="lg:col-span-2">
              <FinanceWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
