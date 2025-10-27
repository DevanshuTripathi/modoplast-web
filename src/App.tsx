import { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Products from './pages/Products.tsx';
import IndustriesServed from './pages/IndustriesServed.tsx';
import Infrastructure from './pages/Infrastructure.tsx';
import Quality from './pages/Quality.tsx';
import OurClients from './pages/OurClients.tsx';
import ContactUs from './pages/ContactUs.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'About Us':
        return <AboutUs />;
      case 'Products':
        return <Products />;
      case 'Industries Served':
        return <IndustriesServed />;
      case 'Infrastructure':
        return <Infrastructure />;
      case 'Quality':
        return <Quality />;
      case 'Our Clients':
        return <OurClients />;
      case 'Contact Us':
        return <ContactUs />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
