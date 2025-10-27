interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              {['Home', 'About Us', 'Products', 'Contact Us'].map((link) => (
                <button
                  key={link}
                  onClick={() => onNavigate(link)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">60, Lenin Sarani, Kolkata-700013</p>
            <p className="text-gray-300">batteykemp@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © 2025 Modoplast Company & Battey & Kemp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
