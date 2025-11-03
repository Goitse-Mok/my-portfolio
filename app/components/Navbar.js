// components/Navbar.js
'use client'; // This is necessary for using hooks like usePathname
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white px-6 py-2 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Wrapper div for the circular ring effect */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-blue-300 ring-offset-2 ring-offset-blue-800 transition-all duration-300 hover:ring-offset-3 hover:ring-blue-200 overflow-hidden animate-tilt-3d">
        <Image
          src="/logo2.png"
          alt="Goitsemodimo Company Logo"
          width={70}
          height={25}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex space-x-8">
        {/* Dynamic styling for active link */}
        <Link
          href="/"
          className={`
            ${pathname === '/' ? 'font-bold text-blue-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-blue-200 hover:scale-110 transition-all duration-300 text-base
          `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`
            ${pathname === '/about' ? 'font-bold text-blue-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-blue-200 hover:scale-110 transition-all duration-300 text-base
          `}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`
            ${pathname === '/projects' ? 'font-bold text-blue-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-blue-200 hover:scale-110 transition-all duration-300 text-base
          `}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`
            ${pathname === '/contact' ? 'font-bold text-blue-200 underline decoration-2 underline-offset-4' : 'text-white'}
            hover:text-blue-200 hover:scale-110 transition-all duration-300 text-base
          `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}