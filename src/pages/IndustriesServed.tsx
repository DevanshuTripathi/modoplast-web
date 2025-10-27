import { Building2 } from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      name: 'Railways',
      description: 'Scharfenberg semi-permanent couplers, Rubber and Plastic parts'
    },
    {
      name: 'Conveyor & Ropeway System',
      description: 'Nylon & Rubber Tyre, Liners, Wheel Assembly'
    },
    {
      name: 'Copper Industry',
      description: 'Underground Loco parts, Insulating parts, Refinery parts'
    },
    {
      name: 'Fertilizer Industry',
      description: 'PP Filters, PP scrubbers, PP headers, UHMWPE liners, PTFE parts'
    },
    {
      name: 'Cement Industry',
      description: 'Nylon half bush, Rubber gasket, UHMWPE liners'
    },
    {
      name: 'Switch Gears',
      description: 'Epoxy, SMC, DMC Insulators, Terminals, Busbar support'
    },
    {
      name: 'Hydraulic Manufacturers',
      description: 'Rubber, PU, Teflon seals, Nylon bushes'
    },
    {
      name: 'Rayon Industry',
      description: 'Specialized polymer components'
    },
    {
      name: 'Rolling Mill',
      description: 'Industrial components and parts'
    },
    {
      name: 'Pellet Division',
      description: 'Custom polymer solutions'
    },
    {
      name: 'Rare Earth',
      description: 'Specialized manufacturing components'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">
          Industries Where We Have Established Our Excellence
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <Building2 size={32} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-700">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
