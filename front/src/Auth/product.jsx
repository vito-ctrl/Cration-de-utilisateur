import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Produits similaires (simulés)
  const similarProducts = [
    { id: 1, name: 'Produit Connexe 1', price: 59.99, image: '/api/placeholder/200/200' },
    { id: 2, name: 'Produit Connexe 2', price: 69.99, image: '/api/placeholder/200/200' },
    { id: 3, name: 'Produit Connexe 3', price: 49.99, image: '/api/placeholder/200/200' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Section Image Produit */}
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <img 
            src={product.image || '/api/placeholder/400/400'} 
            alt={product.name} 
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Détails Produit */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < product.rating ? 'fill-current' : 'stroke-current'}`} 
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviewCount} avis)</span>
          </div>

          <p className="text-2xl font-semibold text-blue-600 mb-4">
            {product.price.toFixed(2)} €
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Détails Techniques</h2>
            <ul className="list-disc list-inside text-gray-700">
              {product.technicalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="flex items-center bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      {/* Produits Similaires */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Produits Similaires</h2>
        <div className="grid grid-cols-3 gap-4">
          {similarProducts.map((similar) => (
            <div 
              key={similar.id} 
              className="border rounded-lg p-4 text-center hover:shadow-lg transition"
            >
              <img 
                src={similar.image} 
                alt={similar.name} 
                className="mx-auto mb-4 h-32 object-contain"
              />
              <h3 className="font-semibold">{similar.name}</h3>
              <p className="text-blue-600">{similar.price.toFixed(2)} €</p>
              <button className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Voir le produit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exemple d'utilisation
const App = () => {
  const exampleProduct = {
    name: "Smartphone Ultra Pro",
    price: 799.99,
    description: "Un smartphone de dernière génération avec des fonctionnalités avancées.",
    rating: 4,
    reviewCount: 128,
    image: '/api/placeholder/400/400',
    technicalDetails: [
      "Écran OLED 6.7 pouces",
      "Processeur Octa-core 3.2 GHz",
      "Appareil photo 108 MP",
      "Batterie 5000 mAh"
    ]
  };

  return <ProductDetail product={exampleProduct} />;
};

export default App;