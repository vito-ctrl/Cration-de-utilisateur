import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductList = () => {

  useEffect(() => {
    fetch('https://api.monsite.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  


  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // Simuler un appel API pour récupérer les produits
  useEffect(() => {
    // Exemple de données produits
    const fetchedProducts = [
      { id: 1, name: 'Produit 1', price: 59.99, image: '/api/placeholder/200/200', category: 'cat1', stock: 5 },
      { id: 2, name: 'Produit 2', price: 69.99, image: '/api/placeholder/200/200', category: 'cat2', stock: 0 },
      { id: 3, name: 'Produit 3', price: 49.99, image: '/api/placeholder/200/200', category: 'cat1', stock: 10 },
      { id: 4, name: 'Produit 4', price: 89.99, image: '/api/placeholder/200/200', category: 'cat3', stock: 3 },
    ];
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts); // Initialement, tous les produits sont affichés
  }, []);

  // Filtrer les produits par recherche ou catégorie
  useEffect(() => {
    let result = products;

    if (search) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      result = result.filter(product => product.category === category);
    }

    setFilteredProducts(result);
  }, [search, category, products]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Barre de recherche et filtres */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Toutes les catégories</option>
          <option value="cat1">Catégorie 1</option>
          <option value="cat2">Catégorie 2</option>
          <option value="cat3">Catégorie 3</option>
        </select>
      </div>

      {/* Liste des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 text-center hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-blue-600">{product.price.toFixed(2)} €</p>
            <p className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {product.stock > 0 ? 'En stock' : 'Rupture de stock'}
            </p>
            <button
              className={`mt-2 w-full ${product.stock > 0 ? 'bg-green-500' : 'bg-gray-300'} text-white py-2 rounded hover:bg-green-600`}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
