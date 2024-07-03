import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import { main } from './index.module.scss';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
