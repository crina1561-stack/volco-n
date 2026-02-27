import { Store, Users, TrendingUp, Award, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Despre VOLCO</h1>
          <p className="text-xl text-blue-100">
            Liderul pieței de e-commerce din România
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Povestea Noastră</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              VOLCO este cel mai mare magazin online din România, oferind o gamă completă de produse
              din toate categoriile: electronice, electrocasnice, fashion, cosmetice, rechizite și multe altele.
            </p>
            <p className="text-lg">
              Fondată cu viziunea de a transforma experiența de cumpărare online, VOLCO a devenit
              destinația preferată a milioane de români care caută calitate, preț competitiv și servicii
              de încredere.
            </p>
            <p className="text-lg">
              Ne mândrim cu o selecție vastă de peste 100.000 de produse de la branduri de renume
              internațional și local, livrare rapidă în toată țara și un serviciu clienți dedicat
              satisfacției tale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100.000+</h3>
            <p className="text-gray-600">Produse disponibile</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2M+</h3>
            <p className="text-gray-600">Clienți mulțumiți</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-orange-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Ani de experiență</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">De ce VOLCO?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calitate Garantată</h3>
                <p className="text-gray-600">
                  Toate produsele sunt originale, verificate și vin cu garanție extinsă.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="text-green-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Siguranță Maximă</h3>
                <p className="text-gray-600">
                  Plăți securizate, date protejate și conformitate GDPR.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-orange-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Livrare Rapidă</h3>
                <p className="text-gray-600">
                  Livrare în 24-48h în toată România și deschiderea coletului la livrare.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-red-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Servicii Cliente</h3>
                <p className="text-gray-600">
                  Echipă dedicată, disponibilă 24/7 pentru asistență și suport.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Alătură-te Comunității VOLCO</h2>
          <p className="text-xl text-blue-100 mb-6">
            Peste 2 milioane de români au ales deja VOLCO pentru experiența de cumpărături online.
          </p>
          <p className="text-lg text-blue-50">
            Descoperă ofertele noastre exclusive, beneficiază de reduceri speciale și bucură-te
            de cea mai bună experiență de shopping online din România!
          </p>
        </div>
      </div>
    </div>
  );
}
