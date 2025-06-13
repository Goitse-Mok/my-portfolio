import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-4xl font-bold text-[#054160]">Hi, I'm Goitsemotimo</h1>
        <p className="text-lg text-gray-600 mt-4">Junior Software Developer | Full-Stack Enthusiast</p>
      </main>
      <Footer />
    </>
  );
}
