// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from 'react';
// import '../styles/Layout.css';
import { Outlet } from 'react-router-dom';
// import Home from '../Home';

const Layout = () => {
  return (
      <main>
        <Outlet/>
      </main>
  );
};

export default Layout;
