import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-12 px-6 sm:px-10 min-h-screen">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Page Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-600 leading-tight mb-8 text-center">
            Contact Me
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat!
            Feel free to reach out using the options below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Direct Contact</h3>
              <ul className="text-base space-y-4">
                <li>
                  <strong className="text-gray-800">Email:</strong>{' '}
                  <a
                    href="mailto:goitsemok29@gmail.com"
                    className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300 flex items-center justify-center text-base"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    goitsemok29@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-gray-800">Phone:</strong>{' '}
                  <a
                    href="tel:+26774872298"
                    className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300 flex items-center justify-center text-base"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +267 74872298
                  </a>
                </li>
                {/* New LinkedIn Profile Link */}
                <li>
                  <strong className="text-gray-800">LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/goitsemodimo-mokgethi-241779248/"
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Recommended for security with target="_blank"
                    className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300 flex items-center justify-center text-base"
                  >
                    {/* Simple LinkedIn icon SVG */}
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.56L16.892 11.2C16.892 9.07 15.116 7.6 12.836 7.6c-1.85 0-3.076 1.02-3.642 2.015h.03c-.015-.005-.03-.01-.045-.015v-.015h-.005L8.784 7.6H5.215v12.852h3.56V14.1c0-1.87.973-2.617 2.215-2.617 1.242 0 1.948.882 1.948 2.617v6.353h3.51V13.88c.002-3.155-1.92-5.462-4.996-5.462-2.585 0-4.136 1.745-4.82 2.875h-.03v-.015L7.962 7.6H4.215c-.015-.005-.03-.01-.045-.015h.03V20.452H.671V6.993h3.56v1.46c.015.005.03.01.045.015h-.03c.67-1.13 2.22-2.875 4.805-2.875 3.076 0 5.006 2.307 4.996 5.462v6.557h3.51V13.88c.002-3.155-1.92-5.462-4.996-5.462-2.585 0-4.136 1.745-4.82 2.875h-.03v-.015L7.962 7.6H4.215c-.015-.005-.03-.01-.045-.015h.03V20.452zM2.003 4.452A2.453 2.453 0 012.453 2h-.03c.45-.45 1.1-.71 1.75-.71s1.3.26 1.75.71a2.453 2.453 0 010 3.535 2.453 2.453 0 01-3.535 0A2.453 2.453 0 012.003 4.452z"/>
                    </svg>
                    My LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Placeholder for a Contact Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4 text-center">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-base text-left">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-base text-left">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-base text-left">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Regarding..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-base text-left">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-y"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cyan-500 text-white text-base font-medium rounded-full shadow-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                (Note: This form is for styling purposes only and requires backend integration to send emails.)
              </p>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}