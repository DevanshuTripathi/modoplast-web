import { History, Target, MapPin, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">
          About Our Company
        </h1>

        <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <History size={32} className="text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Our History</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              M/s MODOPLAST COMPANY is an Ex. British firm founded by the European Engineer,
              Mr. W. K. Battey in 1921, making it the first Polymer industry in Eastern India.
              The company was expanded in 1928 by founding M/s BATTEY & KEMP.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Users size={32} className="text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Our Leadership</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              The company was acquired by Mr. R.S. Gupta in 1971 and subsequently expanded by his son,
              Mr. Bajrang L. Gupta (current proprietor), and grandson Yash Gupta.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target size={32} className="text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              MODOPLAST COMPANY is continuously striving to upgrade and diversify its product range and
              technology. Through our strong design and manufacturing facility and experienced technical staff,
              we supply products to leading public and private sector companies. Quality, innovation,
              consistency and dedication are the hallmarks of our company.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <MapPin size={32} className="text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Our Location</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are located in central KOLKATA (WB).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
