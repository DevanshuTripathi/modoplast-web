import { Train, Package, Settings } from 'lucide-react';
// Import all asset images (works with Vite). Adjust if you're using CRA/webpack.
const importedImages: Record<string, string> = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' }) as Record<string, string>;
const imageMap: Record<string, string> = Object.entries(importedImages).reduce((acc, [path, src]) => {
  const fileName = decodeURIComponent(path.split('/').pop() || '');
  const name = fileName.replace(/\.(png|jpg|jpeg|svg)$/i, '');
  acc[name] = src;
  return acc;
}, {} as Record<string, string>);

function getImageSrc(productName: string): string | undefined {
  // Look up exact name (images are named exactly the same as requested)
  return imageMap[productName];
}

export default function Products() {
  const products: string[] = [
    "SCHAKU COUPLER (RAILWAY)",
    "PTFE Machined Products",
    "PP, HDPE, UHMWPE",
    "MICA Insulators",
    "Cast Nylon Pulley",
    "Cast Nylon",
    "Epoxy Sheet, Rod & Tube",
    "Silicon Rubber",
    "Rubber Products",
    "Anti-Skid Insulating Mats",
    "HYLAM Fabric Base",
    "SMC Insulators",
    "PP Strainer",
    "PU Casted",
    "Fork Lift Tyre",
    "Nylon Pad",
    "PU Seal",
    "POM Sheet & Rod",
    "Rubber Buffer",
    "HDPE Pipe Fittings",
    "PP Grids"
  ];

  const uhmwpeProducts: string[] = [
    "Pressure Pad",
    "Wear Strip",
    "Sleeper Pad",
    "Pad",
    "Seal Strip",
    "Pillow Block Bearing",
    "Sheet",
    "Liner",
    "Fender Pad",
    "Centri Cleaner Cone",
    "Conveyor Roller",
    "UHMWPE Half Bush"
  ];

  return (
    <div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">
            Our Product Range
          </h1>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Over the years, we have developed a wide range of products as per customer's requirements and drawings.
          </p>

          <div className="space-y-12">
            <section className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Train size={40} className="text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">Schaku Couplers & Railway Components</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We specialize in the Design, Development, Manufacture, Supply, and Maintenance of Draft Gears,
                Buffers, and Scharfenberg (SCHAKU) semi-permanent couplers for DEMU, EMU, and MEMU trains.
                We are registered with RDSO for these products.
              </p>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Package size={40} className="text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">Polymer Products by Material</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">UHMWPE Products</h3>
                  <p className="text-gray-700">Liners, Pads, Wear Strips, Fender Pads, Seal Strips</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Nylon Products</h3>
                  <p className="text-gray-700">Cast Nylon Pulleys, Pads, Bushes, Liners, and Wheels</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">PTFE Products</h3>
                  <p className="text-gray-700">Machined Products</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">PU (Polyurethane) Products</h3>
                  <p className="text-gray-700">PU Casted items, PU Seals, Bushes, and Vibrating Screens</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Rubber Products</h3>
                  <p className="text-gray-700">
                    Moulded components, Forklift Tyres, Buffers, Diaphragms, Gaskets, Seals, and O-Rings
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">PP & HDPE Products</h3>
                  <p className="text-gray-700">PP Tanks, PP Grids, PP Filters, and HDPE Pipes & Fittings</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Settings size={40} className="text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">Products by Process</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Injection Moulded Products</h3>
                  <p className="text-gray-700">
                    Nylon Bushes, PP Grids, HDPE Pipe Fittings, ABS/PC Moulded Products
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Compression Moulded Products</h3>
                  <p className="text-gray-700">
                    SMC, DMC & Epoxy Insulators, Hylam Moulded Products, MICA Moulded Products
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Fabrication</h3>
                  <p className="text-gray-700">PP Chemical Tanks, PP Scrubbers & Filters, PVC Laterals</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Ferrous & Non-Ferrous</h3>
                  <p className="text-gray-700">Slip Rings, Carbon Holders, Electrical Contacts</p>
                </div>
              </div>
            </section>

            {/* New: Render product lists with images (label below image) */}
            <section className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">All Products</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((prod) => {
                  const src = getImageSrc(prod);
                  return (
                    <div key={prod} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg text-center">
                      {src ? (
                        <img src={src} alt={prod} className="w-24 h-24 object-contain mb-3" />
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-sm text-gray-600 mb-3">
                          No image
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-blue-800">{prod}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">UHMWPE Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {uhmwpeProducts.map((prod) => {
                  const src = getImageSrc(prod);
                  return (
                    <div key={prod} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg text-center">
                      {src ? (
                        <img src={src} alt={prod} className="w-24 h-24 object-contain mb-3" />
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-sm text-gray-600 mb-3">
                          No image
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-blue-800">{prod}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
