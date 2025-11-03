// app/page.js
'use client'; // This is important for using useState

import { useState } from 'react'; // Import useState for modal
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar'; // Corrected path
import Footer from './components/Footer'; // Corrected path

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 sm:p-10 bg-gradient-to-br from-pink-50 via-purple-50/30 to-fuchsia-50">
        {/* Hero Section with Photo */}
        <section className="max-w-6xl mx-auto my-12 p-8 md:p-12 bg-white rounded-2xl shadow-2xl card-hover animate-scale-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:order-1 animate-slide-in-left">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-500 ring-offset-8 ring-offset-white transform hover:scale-105 transition-transform duration-300 animate-float pulse-glow animate-tilt-3d">
                <Image
                  src="/profile-photo.jpg"
                  alt="Goitsemodimo Gaone Mokgethi - Graduate Photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:order-2 text-center md:text-left space-y-6">
              <div className="animate-fade-in-down">
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-2">
                  <span className="gradient-text">Goitsemodimo</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent">Gaone Mokgethi</span>
                </h1>
              </div>
              <div className="animate-fade-in-up delay-100">
                <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                  Frontend and Backend Developer
                </p>
                <p className="text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  Full Stack Enthusiast | Techno Fairy
                </p>
              </div>
              <p className="text-base text-gray-600 leading-relaxed animate-fade-in-up delay-200">
                A motivated and results-driven developer with a strong foundation in frontend and backend development,
                adept at building responsive and user-focused applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-slide-in-right delay-400">
                <Link href="/projects" className="relative px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-110 hover:rotate-2 overflow-hidden group">
                  <span className="relative z-10">View My Projects</span>
                  <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"></span>
                </Link>
                <Link href="/contact" className="relative px-8 py-3 border-2 border-pink-500 text-pink-600 text-base font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-2 overflow-hidden group">
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
                <button
                  onClick={openModal}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-full shadow-lg hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-110"
                >
                  Quick Connect
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Snippet Section */}
        <section className="max-w-4xl mx-auto my-12 p-8 md:p-10 bg-white rounded-2xl shadow-xl card-hover">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            I am passionate about innovation, collaboration, and solving real-world problems through technology.
            With expertise in modern tools like <span className="font-semibold text-pink-600">Next.js, Tailwind CSS, FastAPI, and MySQL</span>,
            I strive to deliver efficient and user-friendly solutions. I am also a selected participant
            in the upcoming <span className="font-semibold text-purple-600">BTC Graduate Tech Cohort 2025</span>, demonstrating my commitment to continuous growth.
          </p>
          <div className="mt-6">
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              Read More About Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-5xl mx-auto my-12 p-8 md:p-10 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-400 card-hover group animate-flip-in delay-100 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">💻</div>
              <h3 className="font-bold text-pink-700 text-xl mb-3 group-hover:text-purple-600 transition-colors">Frontend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-400 card-hover group animate-flip-in delay-200 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">⚙️</div>
              <h3 className="font-bold text-purple-700 text-xl mb-3 group-hover:text-fuchsia-600 transition-colors">Backend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">FastAPI (Python), Node.js, PHP, Java</p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-400 card-hover group animate-flip-in delay-300 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">🗄️</div>
              <h3 className="font-bold text-fuchsia-700 text-xl mb-3 group-hover:text-pink-600 transition-colors">Databases</h3>
              <p className="text-gray-600 text-sm leading-relaxed">MySQL</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-400 card-hover group animate-flip-in delay-400 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">🔀</div>
              <h3 className="font-bold text-pink-700 text-xl mb-3 group-hover:text-purple-600 transition-colors">Version Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Git & GitHub</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-400 card-hover group animate-flip-in delay-500 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">🛠️</div>
              <h3 className="font-bold text-purple-700 text-xl mb-3 group-hover:text-fuchsia-600 transition-colors">Tools</h3>
              <p className="text-gray-600 text-sm leading-relaxed">VS Code, Microsoft Office</p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-400 card-hover group animate-flip-in delay-600 perspective-card">
              <div className="text-3xl mb-3 animate-bounce-slow">🎯</div>
              <h3 className="font-bold text-fuchsia-700 text-xl mb-3 group-hover:text-pink-600 transition-colors">Development Practices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Responsive & User-Focused Applications</p>
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
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">Let's Connect!</h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              I&apos;d love to hear from you. Feel free to reach out directly:
            </p>
            <ul className="text-center space-y-3 mb-6">
              <li>
                <a href="mailto:goitsemok29@gmail.com" className="text-pink-600 hover:text-purple-600 text-lg font-medium transition-colors duration-300">
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
                <a href="tel:+26774872298" className="text-pink-600 hover:text-purple-600 text-lg font-medium transition-colors duration-300">
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
              <Link href="/contact" className="px-6 py-2 border-2 border-pink-500 text-pink-500 text-base font-medium rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition duration-300">
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}