import { useState } from 'react';
import { Factory, Cog, Building2, Mail, X } from 'lucide-react';
import Maintainance from '../components/Maintainance.tsx';
import MaintainanceBar from '../components/MaintainanceBar.tsx';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <div>
      <Maintainance />
      <MaintainanceBar />

      <section className="relative bg-linear-to-br from-blue-900 to-blue-700 text-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">
          Delivering Industrial Solutions by Precise Engineering
        </h1>
        <p className="text-2xl md:text-3xl mb-6 text-blue-200 font-semibold">
          Estd. 1921
        </p>
        <p className="text-sm md:text-base mb-6 text-blue-100 font-medium italic">
          An ISO 9001: 2015 certified company
        </p>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          We deliver innovative, durable, and precise engineering solutions built for excellence,
          ensuring high performance, reliability, and lasting success in every industrial application.
        </p>
        </div>
      </div>
      </section>

      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
        Welcome to Modoplast & Battey & Kemp
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
        <p>
          M/s MODOPLAST COMPANY is a century-old company (Estd. 1921) and a pioneer in manufacturing
          polymer components for railways and various engineering industries. Expanded in 1928 with
          M/s BATTEY & KEMP, we are committed to fulfilling industrial requirements under a single
          shed with a diverse range of products including Nylon, PP, PTFE, HDPE, PU, UHMWPE, and Rubber.
        </p>
        </div>
      </div>
      </section>

      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
          <Cog size={64} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-900">Products</h3>
          <p className="text-gray-700 text-center mb-4">
          A brief summary of product categories including Railway Couplers, Polymer Products,
          and Moulded Components.
          </p>
          <button
          onClick={() => onNavigate('Products')}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
          Learn More
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
          <Factory size={64} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-900">Infrastructure</h3>
          <p className="text-gray-700 text-center mb-4">
          Explore our in-house facilities including Injection Moulding, Compression Moulding,
          and a dedicated Tool Room.
          </p>
          <button
          onClick={() => onNavigate('Infrastructure')}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
          Learn More
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
          <Building2 size={64} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-900">Industries</h3>
          <p className="text-gray-700 text-center mb-4">
          We serve a wide range of sectors including Railways, Conveyor Systems, Fertilizer,
          and Cement.
          </p>
          <button
          onClick={() => onNavigate('Industries Served')}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
          Learn More
          </button>
        </div>
        </div>
      </div>
      </section>

      {/* ISO Certificate section */}
      <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">ISO Certificate</h2>
        <p className="text-sm text-gray-600 mt-2">ISO 9001:2015 Certification — Quality Management System</p>
        </div>

        <div className="flex justify-center">
        <a
          href={new URL('../assets/ISO.png', import.meta.url).href}
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-lg w-full"
        >
          <img
          src={new URL('../assets/ISO.png', import.meta.url).href}
          alt="ISO 9001:2015 Certificate"
          className="w-full h-auto rounded-lg shadow-md border"
          />
        </a>
        </div>
      </div>
      </section>

      {/* Floating "Get in touch" button */}
      <button
      onClick={() => setShowContactPopup(true)}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors"
      aria-label="Get in touch"
      >
      <Mail size={18} />
      <span className="hidden sm:inline font-medium">Get in touch</span>
      </button>

      {/* Contact popup modal */}
      {showContactPopup && (
      <div className="fixed inset-0 z-60 flex items-center justify-center">
        <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={() => setShowContactPopup(false)}
        />
        <div className="relative z-10 w-11/12 max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center space-x-3">
          <div className="bg-red-600 text-white p-2 rounded-md">
            <Mail size={18} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Get in touch</h3>
            <p className="text-sm text-gray-500">We're here to help — let's talk.</p>
          </div>
          </div>
          <button
          onClick={() => setShowContactPopup(false)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          aria-label="Close"
          >
          <X size={18} />
          </button>
        </div>

        <div className="px-4 py-5">
          <p className="text-sm text-gray-700 mb-4">
          For inquiries, quotes, or technical support, reach out to our team. Click below to go to the contact page.
          </p>
          <div className="flex space-x-3">
          <button
            onClick={() => {
            setShowContactPopup(false);
            onNavigate('Contact Us');
            }}
            className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            Contact Us
          </button>
          <button
            onClick={() => setShowContactPopup(false)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Maybe later
          </button>
          </div>
        </div>
        </div>
      </div>
      )}
    </div>
  );
}
