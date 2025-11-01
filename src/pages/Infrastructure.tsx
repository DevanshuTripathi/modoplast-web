import { Factory, FlaskConical } from 'lucide-react';
// import MaintainanceBar from '../components/MaintainanceBar.tsx';

export default function Infrastructure() {
  return (
    <div>
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">
          Our Manufacturing & Testing Facilities
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Our manufacturing facility and process ensure that we always stay ahead. Every facility is in-house,
          including moulding, fabricating, welding, and a tool room.
        </p>

        <div className="space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Factory size={40} className="text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-blue-900">Major Machineries</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Injection Moulding Division</h3>
                <p className="text-gray-700 text-lg">
                  Machines with capacities ranging from 50 GMS to 2 KGS
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Compression Moulding Division</h3>
                <p className="text-gray-700 text-lg">
                  Hydraulic Presses ranging from 60 TONS to 300 TONS (up to 4FT x 4FT)
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Machine Shop</h3>
                <p className="text-gray-700 text-lg">
                  Multiple Lathe Machines (up to 6.5 FT)
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <FlaskConical size={40} className="text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-blue-900">Testing Facilities</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We ensure product reliability with our in-house testing facilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">UTM Testing (250 TONS)</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Tup Hammer (2 TONS)</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Dielectric Testing (40 KV)</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Welding Machine & Air Compressor</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
}
