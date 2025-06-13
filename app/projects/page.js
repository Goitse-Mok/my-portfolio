import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-12 px-6 sm:px-10 min-h-screen">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Page Heading */}
          {/* Decreased h2 font size */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-600 leading-tight mb-8 text-center">
            My Projects
          </h2>

          <div className="space-y-10"> {/* Spacing between project cards */}
            {/* New Project: Blood Donation Mobile App (Final Year Project) */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Decreased h3 font size */}
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">Blood Donation Mobile App</h3>
              {/* Text size for tag remains sm */}
              <p className="text-sm font-semibold text-[#054160] mb-4">Final Year Project</p>
              {/* Decreased p font size */}
              <p className="text-base text-gray-700 leading-relaxed">
                Developed as my final year project, this mobile application was designed to streamline and simplify
                the blood donation process. It aimed to connect potential blood donors with those in need,
                facilitate blood drive scheduling, and manage donor records efficiently. The app focused on
                creating a user-friendly experience to encourage regular donations and save lives.
              </p>
            </div>

            {/* Project 1: AI Health Coach (Hackathon Project) */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Decreased h3 font size */}
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">AI Health Coach</h3>
              <p className="text-sm font-semibold text-[#054160] mb-4">Hackathon Project</p>
              {/* Decreased p font size */}
              <p className="text-base text-gray-700 leading-relaxed">
                Designed and prototyped an AI assistant to support physical and mental health wellness using
                machine learning models and conversational UIs. This project showcased rapid prototyping and
                innovative problem-solving within a limited timeframe.
              </p>
            </div>

            {/* Project 2: Real-Time e-Agriculture Knowledge Platform */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Decreased h3 font size */}
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">Real-Time e-Agriculture Knowledge Platform</h3>
              {/* Decreased p font size */}
              <p className="text-base text-gray-700 leading-relaxed">
                Developing a data-driven platform for sustainability and productivity in agriculture using
                real-time knowledge sharing solutions. This project aims to empower farmers with timely and
                relevant information to improve their practices.
              </p>
            </div>

            {/* Call to action or more info */}
            <div className="text-center mt-12">
              {/* Decreased p font size */}
              <p className="text-lg text-gray-700 mb-4">
                Interested in learning more about my work or collaborating on a project?
              </p>
              {/* Decreased Link button font size */}
              <Link href="/contact" className="px-6 py-2 border-2 border-cyan-500 text-cyan-500 text-base font-medium rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105">
                Contact Me
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}