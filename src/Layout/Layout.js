import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

function Layout(props) {
  return (
    <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
  )
}

export default Layout