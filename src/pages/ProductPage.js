import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Icone de panier

import HeaderSite from '../components/HeaderSite';
import Footer from '../components/Footer';

const ProductPage = ({ products }) => {
  return (
<div>
<HeaderSite />

    <div className="container mx-auto mt-48">

      {/*tri */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <select className="border border-gray-300 p-2 rounded-lg text-gray-700">
            <option>Sort by: Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Contenu principal avec la barre latérale et la grille des produits */}
      <div className="flex">
        {/* Barre latérale */}
        <aside className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="font-bold text-lg mb-4">Filter by:</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Type</h4>
            <ul>
              <li><input type="checkbox" /> Basic</li>
              <li><input type="checkbox" /> Pattern</li>
              <li><input type="checkbox" /> Hoodie</li>
              <li><input type="checkbox" /> Zipper</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Colour</h4>
            <ul>
              <li><input type="checkbox" /> Black</li>
              <li><input type="checkbox" /> White</li>
              <li><input type="checkbox" /> Red</li>
              <li><input type="checkbox" /> Multicolour</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            <ul>
              <li><input type="checkbox" /> S</li>
              <li><input type="checkbox" /> M</li>
              <li><input type="checkbox" /> L</li>
              <li><input type="checkbox" /> XL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Price</h4>
            <input type="range" className="w-full" min="10" max="200" />
          </div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 w-full rounded-lg">
            Apply
          </button>
        </aside>

        {/* Grille des produits */}
        <main className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 m-2 rounded-md">
                    NEW
                  </div>
                )}
                {product.isHotPromo && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md">
                    HOT PROMO
                  </div>
                )}
              </div>
              <div className="p-4">
                <a className="font-semibold focus text-lg mb-2 hover:text-blue-500/75">{product.name}</a>
                <p className="text-gray-500 mb-2">Price: {product.price}€</p>
                {product.oldPrice && (
                  <p className="text-gray-400 line-through">{product.oldPrice}€</p>
                )}
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center w-full">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md mr-2">Previous</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md">1</button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md ml-2">Next</button>
      </div>
     </div>
     <Footer />

    </div>

  );
};

// Exemple de produits à afficher
const products = [
  { id: 2, name: 'Black Fantasy Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360', isHotPromo: true },

  { id: 4, name: 'Basic Orange Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360' },
  { id: 2, name: 'Black Fantasy Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360', isHotPromo: true },

  { id: 4, name: 'Basic Orange Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360' },
  { id: 2, name: 'Black Fantasy Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360', isHotPromo: true },
  { id: 4, name: 'Basic Orange Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360' },
  { id: 2, name: 'Black Fantasy Sweatshirt', price: 200, image: 'https://via.placeholder.com/600x360', isHotPromo: true },

];

export default function App() {
  return <ProductPage products={products} />;
}
