//Layout.js
import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src='/img/logoRebuild.png' className='logo-layout' alt='Imagen'/>
      <div className="content">{children}</div>
    </div>
  );
};
export default Layout;

