import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-[#054160] mb-4">About Me</h2>
        <p>
          I am a Junior Software Developer at Techno Fairy, with a Bachelor of Science in Computing with Finance from the University of Botswana (awaiting graduation October 2024).
        </p>
        <p>
          Passionate about building clean, scalable, and user-friendly solutions using technologies like Next.js, Tailwind CSS, FastAPI, MySQL, and more.
        </p>
        <p>
          Currently accepted into the BTC Graduate Tech Cohort 2025 and actively working on real-time, data-driven applications that impact lives.
        </p>
      </main>
      <Footer />
    </>
  );
}
