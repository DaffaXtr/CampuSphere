
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="font-body-md text-body-md min-h-screen bg-background flex flex-col">
        {children}
      </div>
    );
  }

  return (
    <div className="font-body-md text-body-md min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
