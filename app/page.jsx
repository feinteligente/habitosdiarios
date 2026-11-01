import Header from '@/components/Header';
// Importá acá tus otros componentes como HabitCard, Sidebar, etc.

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <Header />
      <h1 className="text-2xl font-bold mt-4">Mis Hábitos Diarios</h1>
    </main>
  );
}
