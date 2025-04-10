'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';

// Category images mapping
const categoryImages: Record<string, string> = {
  electronics: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  jewelery: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  "men's clothing": 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  "women's clothing": 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  all: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

export default function CatalogPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Catalog</h1>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* All Categories Card */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-80">
                <img 
                  src={categoryImages.all} 
                  alt="All Categories"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">All Categories</h2>
                  <Link
                    href="/catalog/all"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition"
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              {/* Individual Category Cards */}
              {categories.map((category) => (
                <div 
                  key={category} 
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-80"
                >
                  <img 
                    src={categoryImages[category] || categoryImages.all} 
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4 capitalize">
                      {category}
                    </h2>
                    <Link
                      href={`/catalog/${encodeURIComponent(category)}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition"
                    >
                      View Catalog
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}