import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/images/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Mettlestate Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-semibold">Mettlestate</span>
        </div>

        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-600 transition">
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mettlestate. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
