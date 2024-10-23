import React, { useEffect, useRef, useState } from 'react';

// Composant Offre Flash avec défilement horizontal et compteur
const OfferFlash = ({ products }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300, // Ajuster la valeur en fonction de la largeur des cartes
          behavior: 'smooth',
        });
      }
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-5">
      <h2 className="text-4xl text-orange-500 font-bold mb-6 text-center">Offre Flash</h2>
      <div className="flex justify-center">
        {/* Conteneur de la grille avec défilement horizontal */}
        <div ref={scrollRef} className="flex overflow-x-auto space-x-6 snap-x snap-mandatory">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div> 
      </div> 
    </section>
  );
};

// Composant de carte produit avec compteur
const ProductCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 heures en secondes (24 * 60 * 60)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fonction pour formater le temps restant en hh:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-[200px] p-2 snap-center flex-shrink-0">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Image produit */}
        <div className="relative">
          <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
          {/* Label Offre Flash */}
          <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-2 py-1 m-2 rounded-md">
            Offre Flash
          </div>
        </div>

        {/* Détails du produit */}
        <div className="p-4 text-center">
          <div className="text-lg font-medium text-gray-800 mb-2">{product.title}</div>
          {/* Prix actuel et ancien prix barré */}
          <p className="text-gray-600 font-bold text-xl">{product.newPrice}€</p>
          <p className="text-gray-400 line-through text-sm">{product.oldPrice}€</p>

          {/* Compteur de temps restant */}
          <div className="mt-2 text-sm text-red-500 font-bold">Temps restant : {formatTime(timeLeft)}</div>
        </div>
      </div>
    </div>
  );
};

export default OfferFlash;
