import React from 'react';
import { 
  Home, 
  Sun, 
  CheckSquare, 
  Calendar, 
  BookOpen, 
  Target, 
  Briefcase, 
  PieChart, 
  DollarSign, 
  Dumbbell, 
  Bot, 
  HelpCircle, 
  ShieldCheck 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-brand-card border-r border-brand-border p-5 flex flex-col justify-between min-h-screen text-white text-sm">
      <div>
        {/* Logo & Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-bold text-white">
            HD
          </div>
          <span className="font-bold text-lg tracking-wide">Hábitos diarios</span>
        </div>

        <div className="text-xs text-brand-textMuted mb-6">
          <p className="font-semibold text-white">29 de octubre, 2026</p>
          <p>Construyendo tu mejor versión</p>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {/* Tu Día */}
          <div>
            <p className="text-xs uppercase text-brand-textMuted mb-2 px-2 font-semibold">Tu día</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-3 px-3 py-2 bg-brand-cardLight text-brand-orange rounded-lg font-medium cursor-pointer">
                <Home size={18} /> Inicio
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <Sun size={18} /> Ritual Matutino
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <CheckSquare size={18} /> Panel de Hábitos
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <Calendar size={18} /> Planificador semanal
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <BookOpen size={18} /> Anotaciones
              </li>
            </ul>
          </div>

          {/* Tu Rumbo */}
          <div>
            <p className="text-xs uppercase text-brand-textMuted mb-2 px-2 font-semibold">Tu rumbo</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <Target size={18} /> Objetivos y metas
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <Briefcase size={18} /> Proyectos
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <PieChart size={18} /> Rueda de la vida
              </li>
            </ul>
          </div>

          {/* Áreas */}
          <div>
            <p className="text-xs uppercase text-brand-textMuted mb-2 px-2 font-semibold">Áreas</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <DollarSign size={18} /> Finanzas
              </li>
              <li className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
                <Dumbbell size={18} /> Entrenamiento
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Asistencia */}
      <div className="pt-4 border-t border-brand-border space-y-1">
        <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
          <Bot size={18} /> Asistente IA
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition">
          <HelpCircle size={18} /> Tutoriales
        </div>
      </div>
    </aside>
  );
}
