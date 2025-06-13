'use client'; // This is important for using useState

import { useState } from 'react'; // Import useState for modal
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 sm:p-10 bg-gray-50">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#054160] leading-tight mb-4 animate-fade-in-down">
            Goitsemodimo Gaone Mokgethi
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 font-semibold animate-fade-in-up">
            Junior Software Developer | Full Stack Enthusiast | Techno Fairy
          </p>
          <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto animate-fade-in-up delay-100">
            A motivated and results-driven developer with a strong foundation in frontend and backend development,
            adept at building responsive and user-focused applications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-200">
            {/* "View My Projects" button styled to match "Get In Touch" */}
            <Link href="/projects" className="px-6 py-2 border-2 border-cyan-500 text-cyan-500 text-base font-medium rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105">
              View My Projects
            </Link>
            {/* "Get In Touch" button (already matching) */}
            <Link href="/contact" className="px-6 py-2 border-2 border-cyan-500 text-cyan-500 text-base font-medium rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105">
              Get In Touch
            </Link>
            {/* "Quick Connect" button styled to match "Get In Touch" */}
            <button
              onClick={openModal}
              className="px-6 py-2 border-2 border-cyan-500 text-cyan-500 text-base font-medium rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105"
            >
              Quick Connect
            </button>
          </div>
        </section>

        {/* About Snippet Section */}
        <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-6">About Me</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            I am passionate about innovation, collaboration, and solving real-world problems through technology.
            With expertise in modern tools like Next.js, Tailwind CSS, FastAPI, and MySQL,
            I strive to deliver efficient and user-friendly solutions. I am also a selected participant
            in the upcoming BTC Graduate Tech Cohort 2025, demonstrating my commitment to continuous growth.
          </p>
          <div className="mt-6">
            <Link href="/about" className="text-cyan-500 hover:underline text-base font-medium">
              Read More About Me &rarr;
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-6">My Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Frontend</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Backend</h3>
              <p className="text-gray-600 text-sm">FastAPI (Python), Node.js, PHP, Java</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Databases</h3>
              <p className="text-gray-600 text-sm">MySQL</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Version Control</h3>
              <p className="text-gray-600 text-sm">Git & GitHub</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Tools</h3>
              <p className="text-gray-600 text-sm">VS Code, Microsoft Office</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm group hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-cyan-700 text-lg">Development Practices</h3>
              <p className="text-gray-600 text-sm">Responsive & User-Focused Applications</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal / Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] animate-fade-in">
          <div className="bg-white p-8 rounded-lg shadow-xl relative max-w-md w-11/12 transform scale-95 animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-cyan-600 mb-4 text-center">Let's Connect!</h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              I'd love to hear from you. Feel free to reach out directly:
            </p>
            <ul className="text-center space-y-3 mb-6">
              <li>
                <a href="mailto:goitsemok29@gmail.com" className="text-cyan-600 hover:text-cyan-800 text-lg font-medium transition-colors duration-300">
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    goitsemok29@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+26774872298" className="text-cyan-600 hover:text-cyan-800 text-lg font-medium transition-colors duration-300">
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +267 74872298
                  </span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              {/* Button inside modal also matching the style */}
              <Link href="/contact" className="px-6 py-2 border-2 border-cyan-500 text-cyan-500 text-base font-medium rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition duration-300">
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}