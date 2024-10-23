import React, { useEffect, useRef } from 'react';

// Composant BestSellers (Carrousel) avec un titre et des produits dynamiques
const BestSellers = ({ title, sellers }) => {
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
        <h2 className="text-2xl text-center text-white font-bold mb-6 bg-blue-500">{title}</h2>
        <div className="flex justify-center">
            <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory">
            {sellers.map((seller, index) => (
                <SellerCard key={index} sellerName={seller.name} product={seller.product} />
            ))}
            </div>
        </div>
        <button className="mt-4 bg-orange-500 text-white px-6 py-2 font-semibold rounded-md">Voir Plus</button>
    </section>

  );
};

// Composant de carte vendeur + produit
const SellerCard = ({ sellerName, product }) => (
  <div className="bg-white shadow-md rounded-lg w-[200px] p-2 snap-center flex-shrink-0">
    <h3 className="text-lg font-semibold text-center text-blue-600 mb-2">{sellerName}</h3>
    <img src={product.image} alt={product.title} className="mb-2 mx-auto w-[150px] h-[150px] object-cover" />
    <h4 className="text-md font-semibold text-center">{product.title}</h4>
    <p className="text-gray-600 text-center mb-2">{product.price}</p>
  </div>
);

export default BestSellers;
