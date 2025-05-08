import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Thy Nguyen. All rights reserved.</p>
      <nav>
        <a href="/about" style={{ margin: '0 1rem' }}>About</a>
        <a href="/contact" style={{ margin: '0 1rem' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 1rem' }}>Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
