import React from 'react';

// Composant CategoryProducts (réutilisable)
const CategoryProducts = ({ title, products }) => {
  return (
    <section className="py-10">
      {/* Titre et lien "Voir plus" alignés horizontalement */}
      <div className="justify-around flex  bg-orange-500 p-4">
        <h2 className="text-xl text-white font-bold">{title}</h2>
        <button 
          className="text-white  hover:text-gray-200"
          
        >
          Voir plus
        </button>
      </div>

      {/* Liste des produits */}
      <div className="flex justify-center">
        <div className="flex overflow-x-auto space-x-4 mt-4 scroll-smooth snap-x snap-mandatory">
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant de carte produit réutilisable
const ProductCard = ({ title, price }) => (
  <div className="bg-white shadow-md rounded-lg w-[150px] p-2 snap-center flex-shrink-0">
    <img src="https://via.placeholder.com/150" alt={title} className="mb-2 mx-auto" />
    <h3 className="text-lg font-semibold text-center">{title}</h3>
    <p className="text-gray-600 text-center mb-2">{price}</p>
  </div>
);

export default CategoryProducts;
