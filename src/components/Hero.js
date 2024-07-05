import React from 'react';
import Reparasi from './assets/img/laptop-reparasi.png';

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-800 to-red-400 text-white px-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between max-w-7xl mx-auto py-12 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Mau Perbaiki Laptop</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Tapi Gatau Dimana?</h2>
          <p className="text-lg lg:text-xl mb-6">
            Ayo cari toko reparasi laptop di ReTop! Terpercaya dan harganya murah!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="/lokasi" className="text-lg flex justify-center items-center py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
              Cari Toko Terdekat
            </a>
            <a href="/blog" className="text-sm lg:text-base flex justify-center items-center py-2 px-4 bg-white text-blue-700 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
              Laptopmu rusak? Baca artikelnya yuk!
            </a>
          </div>
        </div>
        {/* Laptop picture */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md">
            <img src={Reparasi} alt='reparasi' className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
