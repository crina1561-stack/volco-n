import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Politica de Confidențialitate</h1>
          </div>
          <p className="text-xl text-green-100">
            Ultima actualizare: 27 Februarie 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              La VOLCO, confidențialitatea datelor tale personale este o prioritate absolută.
              Această politică explică ce informații colectăm, cum le folosim și cum le protejăm.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Informații pe care le colectăm</h2>
                </div>
                <div className="ml-15 space-y-3 text-gray-700">
                  <p><strong>Informații de identificare:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nume și prenume</li>
                    <li>Adresă de email</li>
                    <li>Număr de telefon</li>
                    <li>Adresă de livrare și facturare</li>
                  </ul>

                  <p className="mt-4"><strong>Informații de comandă:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Istoric de comenzi</li>
                    <li>Produse vizualizate</li>
                    <li>Preferințe de cumpărare</li>
                    <li>Informații de plată (procesate securizat)</li>
                  </ul>

                  <p className="mt-4"><strong>Informații tehnice:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Adresă IP</li>
                    <li>Tip de browser și dispozitiv</li>
                    <li>Cookie-uri și date de navigare</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Cum folosim informațiile</h2>
                </div>
                <div className="ml-15 text-gray-700">
                  <p>Folosim datele tale personale pentru:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Procesarea și livrarea comenzilor tale</li>
                    <li>Comunicarea despre statusul comenzii</li>
                    <li>Oferirea de asistență clienți</li>
                    <li>Îmbunătățirea experienței de cumpărături</li>
                    <li>Personalizarea ofertelor și recomandărilor</li>
                    <li>Trimiterea de newsletters (doar cu acordul tău)</li>
                    <li>Prevenirea fraudelor și asigurarea securității</li>
                    <li>Respectarea obligațiilor legale</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Lock className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Protecția datelor</h2>
                </div>
                <div className="ml-15 text-gray-700">
                  <p>Implementăm măsuri de securitate stricte:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Criptare SSL pentru toate tranzacțiile</li>
                    <li>Servere securizate și protejate</li>
                    <li>Acces restricționat la datele personale</li>
                    <li>Monitorizare continuă a sistemelor</li>
                    <li>Conformitate GDPR completă</li>
                    <li>Audituri de securitate regulate</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Drepturile tale</h2>
                </div>
                <div className="ml-15 text-gray-700">
                  <p>În conformitate cu GDPR, ai următoarele drepturi:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Dreptul de acces:</strong> Poți solicita o copie a datelor tale</li>
                    <li><strong>Dreptul de rectificare:</strong> Poți corecta date incorecte</li>
                    <li><strong>Dreptul la ștergere:</strong> Poți solicita ștergerea datelor</li>
                    <li><strong>Dreptul la portabilitate:</strong> Poți transfera datele către alt furnizor</li>
                    <li><strong>Dreptul la opoziție:</strong> Poți refuza anumite procesări</li>
                    <li><strong>Dreptul la restricționare:</strong> Poți limita folosirea datelor</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-red-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Partajarea datelor</h2>
                </div>
                <div className="ml-15 text-gray-700">
                  <p>Partajăm datele tale doar cu:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Furnizorii de servicii de livrare (pentru livrarea comenzilor)</li>
                    <li>Procesatori de plăți (pentru tranzacții securizate)</li>
                    <li>Furnizori de servicii IT (pentru mentenanță și hosting)</li>
                    <li>Autorități legale (când este necesar legal)</li>
                  </ul>
                  <p className="mt-3 font-semibold">
                    Nu vindem niciodată datele tale personale către terți!
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie-uri</h2>
                <div className="text-gray-700">
                  <p>
                    Folosim cookie-uri pentru a îmbunătăți experiența ta pe site. Cookie-urile
                    esențiale sunt necesare pentru funcționarea site-ului, în timp ce cookie-urile
                    opționale ne ajută să personalizăm conținutul și să analizăm traficul.
                  </p>
                  <p className="mt-3">
                    Poți gestiona preferințele de cookie-uri oricând din setările browser-ului tău.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retenția datelor</h2>
                <div className="text-gray-700">
                  <p>
                    Păstrăm datele tale personale atât timp cât este necesar pentru îndeplinirea
                    scopurilor pentru care au fost colectate, conform obligațiilor legale și fiscale
                    (de obicei 5 ani pentru datele financiare).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
                <div className="text-gray-700">
                  <p>Pentru orice întrebări despre politica de confidențialitate:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Email: privacy@volco.ro</li>
                    <li>Telefon: 0800 123 456</li>
                    <li>Adresă: Str. Exemplu nr. 123, București, România</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <Shield size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Datele tale sunt în siguranță</h3>
          <p className="text-green-100">
            Ne angajăm să protejăm confidențialitatea și securitatea informațiilor tale personale
            în conformitate cu cele mai înalte standarde de siguranță și reglementările GDPR.
          </p>
        </div>
      </div>
    </div>
  );
}
