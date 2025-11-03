import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-pink-50 via-purple-50/30 to-fuchsia-50 py-12 px-6 sm:px-10 min-h-screen">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-10">

          {/* Profile Photo Header */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-500 ring-offset-8 ring-offset-white transform hover:scale-105 transition-transform duration-300 pulse-glow animate-float animate-tilt-3d">
              <Image
                src="/profile-photo.jpg"
                alt="Goitsemodimo Gaone Mokgethi"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
          </div>

          {/* About Me Introduction */}
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-center">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              I am a motivated and results-driven frontend and backend developer currently working at{' '}
              <span className="font-semibold text-pink-600">Techno Fairy</span>. I successfully graduated
              with a Bachelor of Science in Computing with Finance from the University of Botswana in{' '}
              <span className="font-semibold text-purple-700">October 2024</span>.
              Currently, I am expanding my expertise by pursuing a short course in Cybersecurity Technician.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Adept at building responsive and user-focused applications using modern tools such as{' '}
              <span className="font-semibold text-fuchsia-700">Next.js, Tailwind CSS, FastAPI, and MySQL</span>.
              I am proficient in Microsoft Word, Excel, and Visual Studio Code (VS Code),
              enabling efficient delivery of both technical and documentation-based tasks. I am a fast learner
              with a passion for innovation, collaboration, and solving real-world problems through technology.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-6 md:p-8 rounded-xl border-l-4 border-pink-500 shadow-md card-hover animate-slide-in-left delay-200">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="gradient-text">Professional Summary</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Selected for the upcoming <span className="font-semibold text-pink-600">BTC Graduate Tech Cohort 2025</span>, demonstrating dedication to continuous growth.
              I am highly adaptable, team-oriented, and eager to contribute meaningfully in dynamic ICT and regulatory environments.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-100 perspective-card">
                <div className="text-3xl mb-3 animate-bounce-slow">💻</div>
                <h4 className="font-semibold text-pink-700 mb-3 text-lg">Programming & Development</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Backend: FastAPI (Python), Node.js, PHP, Java</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-250 perspective-card">
                <div className="text-3xl mb-3 animate-bounce-slow">🗄️</div>
                <h4 className="font-semibold text-purple-700 mb-3 text-lg">Databases & Version Control</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>Databases: MySQL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>Version Control: Git & GitHub</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-300 card-hover animate-flip-in delay-400 perspective-card">
                <div className="text-3xl mb-3 animate-bounce-slow">🛠️</div>
                <h4 className="font-semibold text-fuchsia-700 mb-3 text-lg">Tools & General IT Skills</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-fuchsia-500 mr-2 mt-1">✓</span>
                    <span>Microsoft Word, Excel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-500 mr-2 mt-1">✓</span>
                    <span>Visual Studio Code (VS Code)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-500 mr-2 mt-1">✓</span>
                    <span>Technical support for hardware/software issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-500 mr-2 mt-1">✓</span>
                    <span>Basic networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fuchsia-500 mr-2 mt-1">✓</span>
                    <span>Class B Driver's License</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Work Experience</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-l-4 border-pink-500 card-hover animate-slide-in-right delay-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl animate-bounce-slow">💼</div>
                  <div>
                    <h4 className="font-bold text-pink-700 text-xl">Frontend and Backend Developer</h4>
                    <p className="text-gray-700 text-base font-semibold">Techno Fairy</p>
                    <p className="text-gray-500 text-sm">July 2024 to Present</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm ml-11">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Contribute to full-stack software development using FastAPI, Next.js, and MySQL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Collaborate on cross-functional teams for project delivery and UI/UX updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Assist in integration and maintenance of client-facing digital services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">✓</span>
                    <span>Perform troubleshooting, testing, and deployment of new features</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-400 card-hover animate-slide-in-right delay-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl animate-bounce-slow">🖥️</div>
                  <div>
                    <h4 className="font-bold text-gray-700 text-xl">IT Officer Attaché</h4>
                    <p className="text-gray-700 text-base font-semibold">Shashe River School</p>
                    <p className="text-gray-500 text-sm">June to July 2022</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm ml-11">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">✓</span>
                    <span>Provided basic IT support for students and staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">✓</span>
                    <span>Maintained hardware and assisted with software installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">✓</span>
                    <span>Supported digital learning tools and platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Projects</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-100 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">🤖</div>
                  <div>
                    <h4 className="font-semibold text-pink-700 text-lg">AI Health Coach (Hackathon Project)</h4>
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-base">
                  Designed and prototyped an AI assistant to support physical and mental health wellness using
                  machine learning models and conversational UIs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-250 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">🌾</div>
                  <div>
                    <h4 className="font-semibold text-purple-700 text-lg">Real-Time e-Agriculture Knowledge Platform</h4>
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-base">
                  Developing a data-driven platform for sustainability and productivity in agriculture using
                  real-time knowledge sharing solutions.
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link href="/projects" className="text-fuchsia-500 hover:underline text-base font-medium">
                  View All My Projects &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Education & Certifications</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-100 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">🎓</div>
                  <div>
                    <h4 className="font-semibold text-pink-700 text-lg">University of Botswana</h4>
                    <p className="text-gray-800 text-base">Bachelor of Science in Computing with Finance</p>
                    <p className="text-gray-600 text-base">Graduated: October 2024</p>
                    <p className="text-gray-600 text-base">CGPA: 3.3</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-250 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">📚</div>
                  <div>
                    <h4 className="font-semibold text-purple-700 text-lg">St. Joseph's College</h4>
                    <p className="text-gray-800 text-base">Botswana General Certificate of Secondary Education (BGCSE)</p>
                    <p className="text-gray-600 text-base">Year of Completion: 2018</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-300 card-hover animate-flip-in delay-400 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">🚀</div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-700 text-lg">Selected Participant – BTC Graduate Tech Cohort 2025</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                      <li>Accepted into upcoming BTC cohort program focused on:</li>
                      <li>ICT infrastructure and digital transformation</li>
                      <li>Software development best practices</li>
                      <li>Mentorship and professional growth opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-500 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">🔐</div>
                  <div>
                    <h4 className="font-semibold text-pink-700 text-lg">Cybersecurity Technician Short Course</h4>
                    <p className="text-gray-600 text-base">Currently pursuing to enhance cybersecurity knowledge and skills.</p>
                  </div>
                </div>
              </div>

              {/* NEW CERTIFICATIONS WITH LINKS */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-600 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">📜</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-700 text-lg">Getting Started with Azure DevOps Boards</h4>
                    <p className="text-gray-800 text-base">Coursera Project Network</p>
                    <p className="text-gray-600 text-base">Issued: August 2024</p>
                    <p className="text-gray-600 text-base mb-2">Credential ID: HHDNXEYCUKXP</p>
                    <Link
                      href="https://www.coursera.org/account/accomplishments/verify/HHDNXEYCUKXP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:underline text-sm flex items-center"
                    >
                      Show Credential
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-300 card-hover animate-flip-in delay-600 perspective-card">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl animate-bounce-slow">📜</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-fuchsia-700 text-lg">Linux: I/O Redirection for DevOps</h4>
                    <p className="text-gray-800 text-base">Coursera Project Network</p>
                    <p className="text-gray-600 text-base">Issued: August 2024</p>
                    <p className="text-gray-600 text-base mb-2">Credential ID: Y6RHET0D7MKZ</p>
                    <Link
                      href="https://www.coursera.org/account/accomplishments/verify/Y6RHET0D7MKZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fuchsia-500 hover:underline text-sm flex items-center"
                    >
                      Show Credential
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END NEW CERTIFICATIONS */}

            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Soft Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-100 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">💬</div>
                  <div className="text-gray-700 text-base">Excellent written and verbal communication</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-250 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">🤝</div>
                  <div className="text-gray-700 text-base">Strong teamwork and collaboration</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-300 card-hover animate-flip-in delay-400 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">💡</div>
                  <div className="text-gray-700 text-base">Critical and creative thinking</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md border-2 border-pink-100 hover:border-pink-300 card-hover animate-flip-in delay-500 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">⏰</div>
                  <div className="text-gray-700 text-base">Time management and prioritization</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border-2 border-purple-100 hover:border-purple-300 card-hover animate-flip-in delay-600 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">⭐</div>
                  <div className="text-gray-700 text-base">High integrity and work ethic</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md border-2 border-fuchsia-100 hover:border-fuchsia-300 card-hover animate-flip-in delay-600 perspective-card">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl animate-bounce-slow">📈</div>
                  <div className="text-gray-700 text-base">Fast learner with a strong desire to improve</div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
