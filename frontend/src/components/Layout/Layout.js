import React from 'react';
import Header from '../Header/Header';

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main className="container">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
