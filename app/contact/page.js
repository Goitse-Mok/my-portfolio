import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-[#054160]">Contact Me</h2>
        <p>Let&apos;s get in touch! You can reach me via email or phone:</p>

        <ul className="text-lg space-y-2">
          <li><strong>Email:</strong> goitsemok29@gmail.com</li>
          <li><strong>Phone:</strong> +267 74872298</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
