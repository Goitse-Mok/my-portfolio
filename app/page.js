import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-down">
              Goitsemodimo Gaone Mokgethi
            </h1>
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light drop-shadow-md animate-fade-in-up">
              Junior Software Developer | Tech Enthusiast
            </p>
            <div className="mt-8 space-x-4 animate-scale-in">
              <Link
                href="/projects"
                className="px-8 py-3 bg-cyan-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-cyan-600 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a passionate Junior Software Developer with a knack for building intuitive and efficient web applications.
              With a strong foundation in modern web technologies and a keen eye for detail, I strive to create seamless user experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in tech is driven by a continuous desire to learn and innovate, tackling new challenges with enthusiasm and a collaborative spirit.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="px-8 py-3 bg-gray-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 sm:px-10 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Frontend Development</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Backend & Databases</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Python (FastAPI)</li>
                  <li>Node.js, PHP, Java</li>
                  <li>MySQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Tools & Practices</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Agile Methodologies</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-6 sm:px-10 bg-cyan-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-xl leading-relaxed mb-8">
              I&apos;m always eager to take on new challenges and contribute to innovative projects. Let&apos;s build something amazing together!
            </p>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-cyan-600 text-xl font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Contact Me Today!
            </Link>
          </div>
        </section>

        {/* Testimonials or Quotes Section (Optional) */}
        <section className="py-16 px-6 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Others Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-700">&quot;Goitsemodimo&apos;s dedication to learning and problem-solving is truly impressive. A valuable asset to any team.&quot;</p>
                <p className="mt-4 text-right font-semibold text-gray-800">- Mentor Name</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-700">&quot;Highly collaborative and always brings fresh ideas to the table. It&apos;s a pleasure working with Goitsemodimo.&quot;</p>
                <p className="mt-4 text-right font-semibold text-gray-800">- Colleague Name</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}