import { useEffect, useState } from 'react';
import { ChevronRight, Zap, Shield, Truck, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [topSellers, setTopSellers] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: 'Black Friday la VOLCO',
      subtitle: 'Reduceri de până la 50% la toate categoriile',
      discount: 'Oferte limitate',
      bg: 'from-red-900 via-red-800 to-red-900',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg'
    },
    {
      title: 'Telefoane iPhone & Samsung',
      subtitle: 'Cele mai noi modele la prețuri speciale',
      discount: 'Transport gratuit',
      bg: 'from-gray-900 via-gray-800 to-gray-900',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
    },
    {
      title: 'Parfumuri Premium',
      subtitle: 'Branduri de lux pentru tine și cei dragi',
      discount: 'Până la 30% reducere',
      bg: 'from-pink-900 via-purple-900 to-pink-900',
      image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg'
    },
    {
      title: 'Electrocasnice Smart',
      subtitle: 'Tehnologie inteligentă pentru casa ta',
      discount: 'Oferte exclusive',
      bg: 'from-blue-900 via-cyan-900 to-blue-900',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg'
    }
  ];

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const [featuredRes, newRes, topRes, categoriesRes] = await Promise.all([
      supabase
        .from('products')
        .select('*, brand:brands(*), category:categories(*)')
        .eq('is_featured', true)
        .eq('is_available', true)
        .limit(8),
      supabase
        .from('products')
        .select('*, brand:brands(*), category:categories(*)')
        .eq('is_new', true)
        .eq('is_available', true)
        .order('created_at', { ascending: false })
        .limit(8),
      supabase
        .from('products')
        .select('*, brand:brands(*), category:categories(*)')
        .eq('is_available', true)
        .order('sales_count', { ascending: false })
        .limit(8),
      supabase
        .from('categories')
        .select('*')
        .is('parent_id', null)
        .order('display_order')
    ]);

    if (featuredRes.data) setFeaturedProducts(featuredRes.data as unknown as Product[]);
    if (newRes.data) setNewProducts(newRes.data as unknown as Product[]);
    if (topRes.data) setTopSellers(topRes.data as unknown as Product[]);
    if (categoriesRes.data) setCategories(categoriesRes.data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px] md:h-[450px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.bg}`}>
              <div className="absolute inset-0 bg-black/30" />
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-40"
              />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold mb-4 animate-pulse">
                  {banner.discount}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{banner.title}</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-200">{banner.subtitle}</p>
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
                >
                  Descoperă Ofertele
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: '📦', title: 'Deschiderea coletului', desc: 'la livrare', page: 'feature-delivery' },
              { icon: '↩️', title: '30 de zile', desc: 'drept de retur', page: 'feature-returns' },
              { icon: '💳', title: 'Plata in rate', desc: 'fara dobanda', page: 'feature-installments' },
              { icon: '🛡️', title: 'Garantii', desc: 'si service', page: 'feature-warranty' }
            ].map((feature, index) => (
              <button
                key={index}
                onClick={() => onNavigate(feature.page)}
                className="flex items-center gap-3 hover:bg-gray-50 p-3 rounded-xl transition-all hover:shadow-md"
              >
                <div className="text-3xl md:text-4xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Categorii</h2>
            <button
              onClick={() => onNavigate('categories')}
              className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
            >
              Vezi toate <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('category', category.slug)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-red-200 group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {featuredProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Produse Recomandate</h2>
              <button
                onClick={() => onNavigate('products')}
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
              >
                Vezi toate <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}

        {newProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Produse Noi</h2>
              <button
                onClick={() => onNavigate('products')}
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
              >
                Vezi toate <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}

        {topSellers.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Cele Mai Vândute</h2>
              <button
                onClick={() => onNavigate('products')}
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
              >
                Vezi toate <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topSellers.map((product) => (
                <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}

        <div
          onClick={() => onNavigate('vendor-marketplace')}
          className="bg-gradient-to-r from-[#0A2540] via-blue-700 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl mb-12 cursor-pointer hover:shadow-3xl transition-all hover:scale-[1.02]"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="font-bold text-lg">VOLCO Marketplace</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-center">
              Crește-ți afacerea!
            </h2>
            <p className="text-2xl mb-6 text-center">
              Acces instant la <span className="font-bold">sute de mii de clienți unici</span>, zilnic
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-lg">Înregistrarea afacerii tale este <strong>gratuită</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-lg">Ești la doar <strong>câteva click-uri</strong> de vânzări spectaculoase</span>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-[#0A2540] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl inline-flex items-center gap-2">
                Vreau să vând pe VOLCO
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Abonează-te la Newsletter VOLCO</h2>
          <p className="text-xl mb-8 text-red-100">
            Primește oferte exclusive și noutăți despre cele mai noi produse
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Abonează-te
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
