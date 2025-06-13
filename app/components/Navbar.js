// components/Navbar.js
'use client'; // This is necessary for using hooks like usePathname
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="bg-[#054160] text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Wrapper div for the circular ring effect */}
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-transparent ring-2 ring-cyan-300 ring-offset-2 ring-offset-[#054160] transition-all duration-300 hover:ring-offset-4 overflow-hidden">
        <Image
          src="/logo2.png" // Make sure your logo2.png is in the public folder
          alt="Goitsemodimo Company Logo"
          width={100} // Retaining original width to ensure logo visibility
          height={30}  // Retaining original height
          className="object-contain" // Ensures the entire image fits within its bounds
        />
      </div>
      <div className="flex space-x-8">
        {/* Dynamic styling for active link */}
        <Link
          href="/"
          className={`
            ${pathname === '/' ? 'font-bold text-cyan-200' : 'text-white'}
            hover:text-cyan-300 transition-colors duration-300 text-lg
          `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`
            ${pathname === '/about' ? 'font-bold text-cyan-200' : 'text-white'}
            hover:text-cyan-300 transition-colors duration-300 text-lg
          `}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`
            ${pathname === '/projects' ? 'font-bold text-cyan-200' : 'text-white'}
            hover:text-cyan-300 transition-colors duration-300 text-lg
          `}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`
            ${pathname === '/contact' ? 'font-bold text-cyan-200' : 'text-white'}
            hover:text-cyan-300 transition-colors duration-300 text-lg
          `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}