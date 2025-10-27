import { Handshake } from 'lucide-react';

export default function OurClients() {
  const clients = [
    'Indian Railways',
    'Metro Railway, Kolkata',
    'VIZAG STEEL',
    'UCIL',
    'Aditya Birla',
    'UltraTech',
    'IFFCO',
    'Jindal',
    'Escorts Kubota Limited',
    'Shyam Metalics',
    'IREL (India) Limited',
    'Paradeep Phosphates',
    'SPIC',
    'Sona Comstar',
    'Westinghouse Saxby Farmer Limited',
    'Tata Steel',
    'SAIL',
    'Hindalco Industries',
    'Vedanta Limited',
    'National Aluminium Company (NALCO)',
    'Rashtriya Chemicals & Fertilizers (RCF)',
    'Coromandel International',
    'ACC Cement',
    'Ambuja Cement',
    'Larsen & Toubro (L&T)',
    'BHEL',
    'Crompton Greaves',
    'Siemens India',
    'ABB India'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">
          Our Major Customers
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We are proud to serve leading companies across India in both the public and private sectors.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300"
              >
                <div className="text-center">
                  <Handshake size={32} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium text-sm">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">
            And many more prestigious organizations across India
          </p>
        </div>
      </div>
    </div>
  );
}
