import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-12 px-6 sm:px-10 min-h-screen">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Profile Photo Header */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500 ring-offset-4">
              <Image
                src="/profile-photo.jpg"
                alt="Goitsemodimo Gaone Mokgethi"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* About Me Introduction */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-600 leading-tight mb-6 text-center">
              About Me
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              I am a motivated and results-driven junior software developer currently working at{' '}
              <span className="font-semibold text-[#054160]">Techno Fairy</span>. I successfully graduated
              with a Bachelor of Science in Computing with Finance from the University of Botswana in{' '}
              <span className="font-semibold text-cyan-700">October 2024</span>.
              Currently, I am expanding my expertise by pursuing a short course in Cybersecurity Technician.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Adept at building responsive and user-focused applications using modern tools such as{' '}
              <span className="font-semibold text-cyan-700">Next.js, Tailwind CSS, FastAPI, and MySQL</span>.
              I am proficient in Microsoft Word, Excel, and Visual Studio Code (VS Code),
              enabling efficient delivery of both technical and documentation-based tasks. I am a fast learner
              with a passion for innovation, collaboration, and solving real-world problems through technology.
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Professional Summary</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Selected for the upcoming BTC Graduate Tech Cohort 2025, demonstrating dedication to continuous growth.
              I am highly adaptable, team-oriented, and eager to contribute meaningfully in dynamic ICT and regulatory environments.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 mb-2 text-lg">Programming & Development</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</li>
                  <li>Backend: FastAPI (Python), Node.js, PHP, Java</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 mb-2 text-lg">Databases & Version Control</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Databases: MySQL</li>
                  <li>Version Control: Git & GitHub</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 mb-2 text-lg">Tools & General IT Skills</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Microsoft Word, Excel</li>
                  <li>Visual Studio Code (VS Code)</li>
                  <li>Technical support for hardware/software issues</li>
                  <li>Basic networking</li>
                  <li>Class B Driver’s License</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Work Experience</h3>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Junior Software Developer</h4>
                <p className="text-gray-800 text-base">Techno Fairy — July 2024 to Present</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                  <li>Contribute to full-stack software development using FastAPI, Next.js, and MySQL</li>
                  <li>Collaborate on cross-functional teams for project delivery and UI/UX updates</li>
                  <li>Assist in integration and maintenance of client-facing digital services</li>
                  <li>Perform troubleshooting, testing, and deployment of new features</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">IT Officer Attaché</h4>
                <p className="text-gray-800 text-base">Shashe River School — June to July 2022</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                  <li>Provided basic IT support for students and staff</li>
                  <li>Maintained hardware and assisted with software installations</li>
                  <li>Supported digital learning tools and platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Projects</h3>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">AI Health Coach (Hackathon Project)</h4>
                <p className="text-gray-600 mt-2 text-base">
                  Designed and prototyped an AI assistant to support physical and mental health wellness using
                  machine learning models and conversational UIs.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Real-Time e-Agriculture Knowledge Platform</h4>
                <p className="text-gray-600 mt-2 text-base">
                  Developing a data-driven platform for sustainability and productivity in agriculture using
                  real-time knowledge sharing solutions.
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link href="/projects" className="text-cyan-500 hover:underline text-base font-medium">
                  View All My Projects &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Education & Certifications</h3>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">University of Botswana</h4>
                <p className="text-gray-800 text-base">Bachelor of Science in Computing with Finance</p>
                <p className="text-gray-600 text-base">Graduated: October 2024</p>
                <p className="text-gray-600 text-base">CGPA: 3.3</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">St. Joseph’s College</h4>
                <p className="text-gray-800 text-base">Botswana General Certificate of Secondary Education (BGCSE)</p>
                <p className="text-gray-600 text-base">Year of Completion: 2018</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Selected Participant – BTC Graduate Tech Cohort 2025</h4>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                  <li>Accepted into upcoming BTC cohort program focused on:</li>
                  <li>ICT infrastructure and digital transformation</li>
                  <li>Software development best practices</li>
                  <li>Mentorship and professional growth opportunities</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Cybersecurity Technician Short Course</h4>
                <p className="text-gray-600 text-base">Currently pursuing to enhance cybersecurity knowledge and skills.</p>
              </div>

              {/* NEW CERTIFICATIONS WITH LINKS */}
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Getting Started with Azure DevOps Boards</h4>
                <p className="text-gray-800 text-base">Coursera Project Network</p>
                <p className="text-gray-600 text-base">Issued: August 2024</p>
                <p className="text-gray-600 text-base mb-2">Credential ID: HHDNXEYCUKXP</p>
                <Link
                  href="https://www.coursera.org/account/accomplishments/verify/HHDNXEYCUKXP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline text-sm flex items-center"
                >
                  Show Credential
                  {/* External link icon */}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </Link>
              </div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-cyan-700 text-lg">Linux: I/O Redirection for DevOps</h4>
                <p className="text-gray-800 text-base">Coursera Project Network</p>
                <p className="text-gray-600 text-base">Issued: August 2024</p>
                <p className="text-gray-600 text-base mb-2">Credential ID: Y6RHET0D7MKZ</p>
                <Link
                  href="https://www.coursera.org/account/accomplishments/verify/Y6RHET0D7MKZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline text-sm flex items-center"
                >
                  Show Credential
                  {/* External link icon */}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </Link>
              </div>
              {/* END NEW CERTIFICATIONS */}

            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">Excellent written and verbal communication</div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">Strong teamwork and collaboration</div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">Critical and creative thinking</div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">Time management and prioritization</div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">High integrity and work ethic</div>
              <div className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-700 text-base">Fast learner with a strong desire to improve</div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}