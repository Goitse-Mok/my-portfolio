'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#054160] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Goitsemodimo</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
