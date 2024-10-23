import React from 'react';
import PopularProducts from '../components/PopularProducts';
import CategoryProducts from '../components/CategoryProducts';
import BestSellers from '../components/BestSellers';
import TestimonialClients from '../components/TestimonialClients';
import OfferFlash from '../components/OfferFlash';
import CategorySection from '../components/CategorySection';
import HeaderSite from '../components/HeaderSite';
import Footer from '../components/Footer';

const Home = () => {
  const popularProducts = [
    { title: "Produit 1", price: "€29.99" },
    { title: "Produit 2", price: "€39.99" },
    { title: "Produit 3", price: "€19.99" },
    { title: "Produit 4", price: "€25.99" },
    { title: "Produit 5", price: "€49.99" },
  ];
  const testimonials = [
    { name: 'Client 1', feedback: 'Très bon service, rapide et fiable.' },
    { name: 'Client 2', feedback: 'Une expérience formidable, je recommande.' },
    { name: 'Client 3', feedback: 'Livraison rapide et produits de qualité.' },
    { name: 'Client 2', feedback: 'Une expérience formidable, je recommande.' },

  ];
  
  
  const sellers = [
    {
      name: 'Vendeur 1',
      product: {
        title: 'Produit 1',
        price: '€29.99',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      name: 'Vendeur 2',
      product: {
        title: 'Produit 2',
        price: '€39.99',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      name: 'Vendeur 3',
      product: {
        title: 'Produit 3',
        price: '€89.99',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      name: 'Vendeur 3',
      product: {
        title: 'Produit 3',
        price: '€89.99',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      name: 'Vendeur 3',
      product: {
        title: 'Produit 3',
        price: '€89.99',
        image: 'https://via.placeholder.com/150'
      }
    },
  ];
  const products = [
    {
      title: 'Produit 1',
      newPrice: '29.99',
      oldPrice: '49.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
    
    {
      title: 'Produit 3',
      newPrice: '19.99',
      oldPrice: '34.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 1',
      newPrice: '29.99',
      oldPrice: '49.99',
      image: 'https://via.placeholder.com/600x360',
    },
    {
      title: 'Produit 2',
      newPrice: '39.99',
      oldPrice: '59.99',
      image: 'https://via.placeholder.com/600x360',
    },
  ];
  const categories = ['All', 'Boots', 'Shoes', 'Sandals', 'Slippers', 'Jogging'];
    
  


  return (
    <div className="bg-white text-gray-900">
      <HeaderSite />
      <main className="mt-32">
        <HeroSection />
        {/* Utilisation du composant PopularProducts avec différents titres et produits */}
        <PopularProducts title="Produits Populaires" products={popularProducts} />
        <BannerCTA />
        <PopularProducts title="Nos meilleurs offres" products={popularProducts} />
        <CategoryProducts title="TELEPHONE DISPO" products={popularProducts} />
        <OfferFlash products={products} />;
        <AboutSection />
        <CategorySection categories={categories} products={products} />
        <TutorialSection />
        <BestSellers title="Nos meilleurs vendeurs" sellers={sellers} />
        <TestimonialClients testimonials={testimonials}/>
      </main>
      <Footer />
    </div>
  );
};





// Composant HeroSection
const HeroSection = () => (
  <section className="py-12 px-8 text-center">
    <h1 className="text-2xl font-bold leading-none tracking-tighter text-blue-600 md:text-5xl lg:text-6xl">
      Le marketplace des jeunes entrepreneurs
    </h1>
    <p className="mt-8 text-base text-black-500">
    Votre marketplace dédiée aux jeunes entrepreneurs africains, où innovation et qualité se rencontrent. Explorez une variété de produits et soutenez les talents locaux.    </p>
  </section>
);






// Composant Banner avec Call to Action
const BannerCTA = () => (
  <section className="my-10 bg-blue-500 text-white text-center p-10 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold">Profitez de nos meilleures offres</h2>
    <p className="mt-2 text-lg">Achetez maintenant et économisez gros !</p>
    <button className="mt-4 bg-orange-500 text-white px-6 py-2 font-semibold rounded-md">Voir les offres</button>
  </section>
);

// Composant About Us
const AboutSection = () => (
  <section id="about" className="container mx-auto py-10">
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://img.freepik.com/vecteurs-libre/ecommerce-campagne-promotion-achats-internet_335657-2977.jpg?t=st=1727633622~exp=1727637222~hmac=d36d00d4613a5cfe03c02d294e9c176212d75ef4b2183fb332924eaba25f8435&w=900" alt="aboutsection"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-blue-600 uppercase">A propos</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">A propos de <span class="text-blue-600">MokoloBazar</span>
            </h2>
            <p class="text-gray-700">
            MokoloBazar est bien plus qu'une simple marketplace. C'est une plateforme dédiée à la promotion et au soutien des jeunes entrepreneurs africains. Notre mission est de créer un pont entre les talents locaux et une clientèle globale en offrant un espace sûr et convivial pour acheter, vendre, et découvrir des produits uniques. Nous croyons en l'innovation, la qualité, et la richesse des savoir-faire africains, et nous nous engageons à accompagner les créateurs dans leur réussite en ligne. Sur MokoloBazar, chaque achat soutient une histoire, un rêve, et une ambition.
            </p>
        </div>
    </div>
</div>
  </section>
);

// Composant Tutorial
const TutorialSection = () => (
  <section id="tutorial" className="py-10 my-10 bg-orange-500 text-white text-center">
    <h2 className=" text-2xl font-bold mb-6">Comment acheter sur MokoloBazar en 3 étapes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
      <TutorialStep title="1. Choisissez vos articles" />
      <TutorialStep title="2. Commander en ligne" />
      <TutorialStep title="3. Faites vous livrez" />
    </div>
  </section>
);

const TutorialStep = ({ title }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center text-gray-600">
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);











export default Home;
