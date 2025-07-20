import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hastane. Her hakkı saklıdır.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-600 transition">Anasayfa</Link>
          <Link href="/clinics" className="hover:text-blue-600 transition">Klinikler</Link>
        </div>
      </div>
    </footer>
  );
}
