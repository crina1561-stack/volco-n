import { Package, RotateCcw, CreditCard, Shield, Truck, Clock, Award, HeadphonesIcon } from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
  feature?: 'delivery' | 'returns' | 'installments' | 'warranty';
}

export default function FeaturesPage({ onNavigate, feature = 'delivery' }: FeaturesPageProps) {
  const features = {
    delivery: {
      icon: Package,
      title: 'Deschiderea coletului la livrare',
      subtitle: 'Verifică produsul înainte de plată',
      description: 'La VOLCO, transparența și încrederea sunt prioritățile noastre. De aceea, îți oferim posibilitatea de a deschide și verifica coletul în prezența curierului, înainte de a finaliza plata.',
      color: 'from-blue-600 to-cyan-600',
      benefits: [
        {
          icon: Package,
          title: 'Verificare Completă',
          description: 'Deschide coletul și verifică produsul în detaliu înainte de a-l accepta'
        },
        {
          icon: Shield,
          title: 'Siguranță Maximă',
          description: 'Asigură-te că produsul corespunde exact cu ceea ce ai comandat'
        },
        {
          icon: Clock,
          title: 'Fără Grăbire',
          description: 'Ia-ți timpul necesar pentru a inspecta produsul în prezența curierului'
        },
        {
          icon: Award,
          title: 'Calitate Garantată',
          description: 'Verifică integritatea produsului și a ambalajului'
        }
      ],
      steps: [
        'Curierul va suna la ușa ta cu coletul',
        'Cere curierului să deschizi coletul pentru verificare',
        'Inspectează produsul, verifică dacă este complet și nedeteriorate',
        'Dacă totul este în regulă, finalizează plata și semnează de primire',
        'Dacă există probleme, refuză coletul fără nicio taxă'
      ]
    },
    returns: {
      icon: RotateCcw,
      title: '30 de zile drept de retur',
      subtitle: 'Returnează orice produs în 30 de zile',
      description: 'Ai la dispoziție 30 de zile pentru a returna orice produs achiziționat de pe VOLCO, fără a fi nevoie să oferi explicații. Procesul este simplu, rapid și gratuit.',
      color: 'from-green-600 to-emerald-600',
      benefits: [
        {
          icon: Clock,
          title: '30 de Zile',
          description: 'Perioadă generoasă pentru a te decide dacă produsul îți place'
        },
        {
          icon: Truck,
          title: 'Ridicare Gratuită',
          description: 'Curierul va prelua produsul direct de la adresa ta, fără costuri'
        },
        {
          icon: CreditCard,
          title: 'Rambursare Rapidă',
          description: 'Banii îți vor fi returnați în maximum 14 zile lucrătoare'
        },
        {
          icon: HeadphonesIcon,
          title: 'Suport Dedicat',
          description: 'Echipa noastră te va ajuta la fiecare pas al procesului'
        }
      ],
      steps: [
        'Contactează-ne prin email sau telefon pentru a inițializa returul',
        'Primești un cod de retur și instrucțiuni detaliate',
        'Ambalează produsul în ambalajul original, cu toate accesoriile',
        'Curierul va ridica coletul de la adresa ta, fără costuri',
        'După verificarea produsului, primești banii înapoi în 14 zile'
      ]
    },
    installments: {
      icon: CreditCard,
      title: 'Plata în rate fără dobândă',
      subtitle: 'Împarte plata în rate convenabile',
      description: 'La VOLCO, îți oferim posibilitatea de a achiziționa produsele tale preferate prin plata în rate, fără dobândă și fără comisioane ascunse. Bucură-te de produsele tale acum și plătește confortabil.',
      color: 'from-purple-600 to-pink-600',
      benefits: [
        {
          icon: CreditCard,
          title: 'Fără Dobândă',
          description: 'Zero dobândă la plata în rate pentru carduri participante'
        },
        {
          icon: Shield,
          title: 'Fără Comisioane',
          description: 'Nu există taxe sau comisioane ascunse'
        },
        {
          icon: Award,
          title: 'Până la 24 de Rate',
          description: 'Flexibilitate maximă în alegerea perioadei de plată'
        },
        {
          icon: Clock,
          title: 'Aprobare Instant',
          description: 'Află în câteva secunde dacă ești eligibil pentru plata în rate'
        }
      ],
      steps: [
        'Alege produsele pe care le dorești și adaugă-le în coș',
        'La finalizarea comenzii, selectează opțiunea "Plata în Rate"',
        'Introdu datele cardului tău de credit sau debit participante',
        'Alege numărul de rate dorit (3, 6, 12, sau 24 luni)',
        'Confirmă comanda și primește produsele imediat'
      ]
    },
    warranty: {
      icon: Shield,
      title: 'Garanții și service',
      subtitle: 'Protecție completă pentru achiziția ta',
      description: 'La VOLCO, toate produsele beneficiază de garanție oficială de la producător. În plus, îți oferim posibilitatea de a extinde garanția și acces la service autorizat pentru orice problemă.',
      color: 'from-orange-600 to-red-600',
      benefits: [
        {
          icon: Shield,
          title: 'Garanție Oficială',
          description: 'Toate produsele au garanție oficială de la producător'
        },
        {
          icon: Award,
          title: 'Garanție Extinsă',
          description: 'Extinde garanția până la 5 ani pentru protecție maximă'
        },
        {
          icon: HeadphonesIcon,
          title: 'Service Autorizat',
          description: 'Rețea națională de service-uri autorizate'
        },
        {
          icon: Package,
          title: 'Înlocuire Rapidă',
          description: 'Produs de rezervă pe perioada reparației'
        }
      ],
      steps: [
        'Păstrează factura și certificatul de garanție',
        'În caz de problemă, contactează-ne imediat',
        'Trimite produsul la service-ul autorizat indicat',
        'Primești un produs de rezervă pe perioada reparației (unde este posibil)',
        'Produsul tău va fi reparat sau înlocuit în termenul legal'
      ]
    }
  };

  const currentFeature = features[feature];
  const FeatureIcon = currentFeature.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${currentFeature.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <FeatureIcon size={80} className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">{currentFeature.title}</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">{currentFeature.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {currentFeature.description}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beneficii</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFeature.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentFeature.color} rounded-full flex items-center justify-center mb-4`}>
                    <BenefitIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cum funcționează?</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {currentFeature.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${currentFeature.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => onNavigate('feature-delivery')}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center ${
              feature === 'delivery' ? 'ring-4 ring-blue-500' : ''
            }`}
          >
            <Package size={48} className="mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold text-gray-900">Deschiderea coletului</h3>
          </button>

          <button
            onClick={() => onNavigate('feature-returns')}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center ${
              feature === 'returns' ? 'ring-4 ring-green-500' : ''
            }`}
          >
            <RotateCcw size={48} className="mx-auto mb-3 text-green-600" />
            <h3 className="font-bold text-gray-900">30 zile retur</h3>
          </button>

          <button
            onClick={() => onNavigate('feature-installments')}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center ${
              feature === 'installments' ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <CreditCard size={48} className="mx-auto mb-3 text-purple-600" />
            <h3 className="font-bold text-gray-900">Plata în rate</h3>
          </button>

          <button
            onClick={() => onNavigate('feature-warranty')}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center ${
              feature === 'warranty' ? 'ring-4 ring-orange-500' : ''
            }`}
          >
            <Shield size={48} className="mx-auto mb-3 text-orange-600" />
            <h3 className="font-bold text-gray-900">Garanții</h3>
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('products')}
            className={`px-8 py-4 bg-gradient-to-r ${currentFeature.color} text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105`}
          >
            Descoperă Produsele Noastre
          </button>
        </div>
      </div>
    </div>
  );
}
