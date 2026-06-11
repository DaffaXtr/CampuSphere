
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
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
