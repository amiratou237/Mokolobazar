import React, { useEffect, useRef } from 'react';

// Composant PopularProducts (Carrousel) avec un titre et des produits dynamiques
const PopularProducts = ({ title, products }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300, // Ajuster la valeur en fonction de la largeur des cartes
          behavior: "smooth",
        });
      }
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl text-center text-white font-bold mb-6 bg-orange-500">{title}</h2>
      <div className="flex justify-center">
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory">
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} />
          ))}
        </div>
      </div>

        <button className="mt-4 bg-orange-500 text-white px-6 py-2 font-semibold rounded-md">Voir Plus</button>
    </section>
  );
};

// Composant de carte produit
const ProductCard = ({ title, price }) => (
  <div className="bg-white shadow-md rounded-lg w-[150px] p-2 snap-center flex-shrink-0">
    <img src="https://via.placeholder.com/150" alt={title} className="mb-2 mx-auto" />
    <h3 className="text-lg font-semibold text-center">{title}</h3>
    <p className="text-gray-600 text-center mb-2">{price}</p>
  </div>
);

export default PopularProducts;
