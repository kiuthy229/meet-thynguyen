import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  { path: '/', display: 'Home' },
  { path: '/members', display: 'Members' },
  { path: '/request', display: 'Request' },
  { path: '/contact', display: 'Contact Us' },
  { path: '/your-meetings', display: 'Your Meetings' },
];

const Header = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId') || '';
  const userRole = localStorage.getItem('userRole') || ''; // Retrieve user role
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, []);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add('sticky');
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove('sticky');
        }
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show__menu'); // Toggle visibility
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Clear userId
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* =================logo================= */}
          <div>
            <img src={logo} className='w-[100px]' alt='logo' />
          </div>

          {/* ====================menu================= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks
                .filter((link) => {
                  if (userRole === 'client') {
                    return link.path === '/' || link.path === '/request' || link.path === '/contact';
                  } else if (userRole === 'member') {
                    return link.path === '/' || link.path === '/your-meetings';
                  }
                  return link.path === '/';
                })
                .map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-primaryColor text-[16px] leading-7 font-[500]'
                          : ''
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          {/* ====================nav right================= */}
          <div className='nav-right flex items-center gap-4'>
            {isLoggedIn ? (
              <>
                <Link to={`/profile/${userId}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={userImg} className='w-full rounded-full' alt='' />
                  </figure>
                </Link>
                <button
                  onClick={handleLogout}
                  className='bg-none py-2 px-6 text-black font-[600] h-[44px] flex items-center justify-center rounded-[50px]'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                    Login
                  </button>
                </Link>
                <Link to='/register'>
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                    Register
                  </button>
                </Link>
              </>
            )}

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
