'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Hastane
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition text-gray-600">Anasayfa</Link>
          <Link href="/clinics" className="hover:text-blue-600 transition text-gray-600">Klinikler</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-blue-600 text-gray-600">Home</Link>
          <Link href="/clinics" className="block py-2 hover:text-blue-600 text-gray-600">Clinics</Link>
        </div>
      )}
    </header>
  );
}
