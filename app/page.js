import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-10">
        <h1 className="text-4xl font-bold text-[#054160]">Goitsemodimo Gaone Mokgethi</h1>
        <p className="text-xl text-gray-700 mt-4">
          Junior Software Developer | Full Stack Enthusiast | Techno Fairy
        </p>
      </main>
      <Footer />
    </>
  );
}
