import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { NAV_ITEMS, APP_NAME, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-secondary" /> {PHONE_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-secondary" />  Near City Square, Samakhusi, Kathmandu, Nepal
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none tracking-tight">
                {APP_NAME.split(' ')[0]} <span className="text-secondary">Language Institute and Consultancy</span>
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-widest">We Support Your Dream</span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary transition-colors py-2">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium transition-colors py-2 border-b-2 ${
                        isActive ? 'text-secondary border-secondary' : 'text-gray-700 border-transparent hover:text-primary hover:border-primary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {item.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary transition-colors border-b border-gray-100 last:border-none"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <NavLink
              to="/contact"
              className="bg-secondary hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Apply Now
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t absolute w-full left-0 transition-all duration-300 ease-in-out shadow-xl ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex justify-between items-center w-full py-3 text-gray-700 font-medium border-b border-gray-100"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`pl-4 bg-gray-50 overflow-hidden transition-all duration-300 ${
                        openSubmenu === item.label ? 'max-h-96 py-2' : 'max-h-0'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-secondary"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 font-medium border-b border-gray-100 ${
                        isActive ? 'text-secondary' : 'text-gray-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-4 pb-6">
              <NavLink
                to="/contact"
                className="block w-full text-center bg-primary text-white py-3 rounded-md font-bold"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;