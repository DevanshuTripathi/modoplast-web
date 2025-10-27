import { Factory, Cog, Building2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">
              Delivering Industrial Solutions by Precise Engineering
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-200 font-semibold">
              Estd. 1921
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
    </div>
  );
}
