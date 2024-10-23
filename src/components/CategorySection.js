import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg min-w-[180px] sm:min-w-[200px]">
      <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-base md:text-lg text-white">{product.title}</h3>
        <p className="text-orange-500 font-bold">{product.newPrice} Fcfa</p>
        <p className="text-gray-400">{product.category}</p>
        <button className="mt-4 bg-orange-500 text-black py-2 px-4 rounded">Buy Now</button>
      </div>
    </div>
  );
};

const CategorySection = ({ categories, products }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="py-8 px-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-orange-500 font-bold mb-6 text-center">Vente Flash</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-500 mb-2 sm:mb-0">
            {category}
          </button>
        ))}
      </div>

      {/* Products with Horizontal Scroll */}
      <div className="relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Chevron Buttons Below the Product Cards */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={scrollLeft}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
