import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = ({ heroRef, serviceRef, reviewsRef, galleryRef, blogRef }) => {
  const [nav, setNav] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    setNav(false); // Close the menu after clicking
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      <a href="/" className="cursor-pointer text-lg lg:text-white md:text-white sm:text-slate-950 hover:text-blue-500">Home</a>
      <a onClick={() => scrollToSection(serviceRef)} className="cursor-pointer text-lg lg:text-white sm:text-slate-950 hover:text-blue-500">Services</a>
      {!window.location.pathname.startsWith('/blog') && (
        <a onClick={() => scrollToSection(reviewsRef)} className="cursor-pointer text-lg  lg:text-white md:text-white sm:text-slate-950 hover:text-blue-500">Reviews</a>
      )}
      <a onClick={() => scrollToSection(galleryRef)} className="cursor-pointer text-lg  lg:text-white md:text-white sm:text-slate-950 hover:text-blue-500">Gallery</a>
      {token && <a href="/blog" className="cursor-pointer text-lg text-white hover:text-blue-500">Blog</a>}
     
      {mobile && (
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center space-x-4">
            <FaFacebook className="text-slate-600 hover:text-blue-500 text-lg" />
            <FaTwitter className="text-gray-600 hover:text-blue-500 text-lg" />
            <FaYoutube className="text-gray-600 hover:text-blue-500 text-lg" />
            <FaPinterest className="text-gray-600 hover:text-blue-500 text-lg" />
          </div>
        </div>
      )}
    </>
  );

  return (
    <nav className="absolute top-0 z-50 flex w-full justify-between items-center mx-auto h-24 px-6 md:px-10 py-4 bg-transparent text-white">
      <div className="flex items-center cursor-pointer">
        <a href="/" className="text-3xl font-bold cursor-pointer">ReTop</a>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={handleNav}>
          {nav ? <AiOutlineClose className='text-white' size={24} /> : <HiOutlineMenuAlt4 className='text-white' size={24} />}
        </button>
      </div>
      {nav && (
        <div className="absolute top-20 left-0 w-full bg-black shadow-md py-4 z-50">
          <ul className="flex flex-col items-center space-y-4">
            <NavLinks mobile />
          </ul>
        </div>
      )}
      {nav && (
        <div onClick={handleNav} className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
    </nav>
  );
};

export default Navbar;
