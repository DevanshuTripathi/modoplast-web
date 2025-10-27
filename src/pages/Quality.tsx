import { Award, CheckCircle } from 'lucide-react';

export default function Quality() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">
          Our Commitment to Quality
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle size={40} className="text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Quality Statement</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Others trust us for our unwavering commitment to quality, honesty, and transparency.
            We believe that trust is earned through consistent actions, not just words.
          </p>
        </div>

        <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Award size={64} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            ISO 9001:2015 Certification
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Certified Company</p>
                  <p className="text-lg text-blue-900 font-bold">M/S BATTEY & KEMP</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Standard</p>
                  <p className="text-lg text-blue-900 font-bold">ISO 9001:2015</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Certificate No</p>
                  <p className="text-lg text-blue-900 font-bold">22IQLH30/R2</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Valid Until</p>
                  <p className="text-lg text-blue-900 font-bold">03/11/2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm font-semibold text-gray-600 mb-2">Scope of Certification</p>
              <p className="text-gray-700 leading-relaxed">
                Design, Development, Manufacture, Supply and Maintenance of Draft Gears, Buffers and
                Semi-Permanent Type Coupler Assemblies for Diesel Electric Multiple Units (DEMU),
                Electric Multiple Units (EMU) and Mainline Electric Multiple Units (MEMU) and various
                polymer products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
