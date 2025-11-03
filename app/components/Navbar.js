// components/Navbar.js
'use client'; // This is necessary for using hooks like usePathname
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="bg-gradient-to-r from-pink-600 via-purple-600 to-fuchsia-600 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Wrapper div for the circular ring effect */}
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-pink-300 ring-offset-2 ring-offset-purple-600 transition-all duration-300 hover:ring-offset-4 hover:ring-pink-200 overflow-hidden animate-tilt-3d">
        <Image
          src="/logo2.png" // Make sure your logo2.png is in the public folder
          alt="Goitsemodimo Company Logo"
          width={100} // Retaining original width to ensure logo visibility
          height={30}  // Retaining original height
          className="object-contain" // Ensures the entire image fits within its bounds
          priority
        />
      </div>
      <div className="flex space-x-8">
        {/* Dynamic styling for active link */}
        <Link
          href="/"
          className={`
            ${pathname === '/' ? 'font-bold text-pink-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-pink-200 hover:scale-110 transition-all duration-300 text-lg
          `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`
            ${pathname === '/about' ? 'font-bold text-pink-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-pink-200 hover:scale-110 transition-all duration-300 text-lg
          `}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`
            ${pathname === '/projects' ? 'font-bold text-pink-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-pink-200 hover:scale-110 transition-all duration-300 text-lg
          `}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`
            ${pathname === '/contact' ? 'font-bold text-pink-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-pink-200 hover:scale-110 transition-all duration-300 text-lg
          `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}