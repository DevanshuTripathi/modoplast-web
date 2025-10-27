import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">MODOPLAST COMPANY / BATTEY & KEMP</p>
                    <p className="text-gray-700">60, Lenin Sarani</p>
                    <p className="text-gray-700">Kolkata-700013, West Bengal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                    <p className="text-blue-600">www.modoplast.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Contacts</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Mr. Bajrang Lal Gupta</h3>
                  <p className="text-sm text-gray-600 mb-2">Managing Director</p>
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>+91 98301 65910</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>+91 76252 51175</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">batteykemp@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">modoplast@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Mr. Yash Gupta</h3>
                  <p className="text-sm text-gray-600 mb-2">Manager</p>
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>+91 84202 58811</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">batteykemp@yahoo.in</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">modoplastcompany@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Form</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm">We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
