import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    'Home',
    'About Us',
    'Products',
    'Industries Served',
    'Infrastructure',
    'Quality',
    'Our Clients',
    'Contact Us'
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-evenly items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold">
              <div>MODOPLAST COMPANY and BATTEY & KEMP</div>
              {/* <div>BATTEY & KEMP</div> */}
            </div>
          </div>

          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === link
                    ? 'bg-red-600 text-white'
                    : 'text-white hover:bg-red-600'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  onNavigate(link);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === link
                    ? 'bg-red-600 text-white'
                    : 'text-white hover:bg-red-600'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
