import { FileText, ShoppingCart, CreditCard, Package, RotateCcw, AlertCircle } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <FileText size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Termeni și Condiții</h1>
          </div>
          <p className="text-xl text-blue-100">
            Ultima actualizare: 27 Februarie 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Bine ai venit la VOLCO! Folosind site-ul nostru, ești de acord cu acești termeni și condiții.
              Te rugăm să îi citești cu atenție.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informații generale</h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    VOLCO este o platformă de comerț electronic administrată de SC VOLCO SRL,
                    înregistrată în România cu sediul în București, Str. Exemplu nr. 123.
                  </p>
                  <p>
                    Acești termeni și condiții reglementează utilizarea site-ului www.volco.ro și
                    achiziționarea de produse prin intermediul platformei noastre.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Procesul de comandă</h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p><strong>2.1. Plasarea comenzii</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Adaugă produsele dorite în coș</li>
                    <li>Completează datele de livrare și facturare</li>
                    <li>Alege metoda de plată și livrare</li>
                    <li>Confirmă comanda</li>
                  </ul>

                  <p className="mt-4"><strong>2.2. Confirmarea comenzii</strong></p>
                  <p>
                    Vei primi un email de confirmare cu detaliile comenzii. Comanda este considerată
                    finalizată doar după primirea acestui email.
                  </p>

                  <p className="mt-4"><strong>2.3. Disponibilitatea produselor</strong></p>
                  <p>
                    Ne rezervăm dreptul de a anula comenzile pentru produse care nu mai sunt disponibile.
                    Vei fi notificat imediat și suma va fi rambursată integral.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Prețuri și plată</h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p><strong>3.1. Prețuri</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Toate prețurile sunt exprimate în RON și includ TVA</li>
                    <li>Prețurile pot fi modificate fără notificare prealabilă</li>
                    <li>Prețul aplicat este cel valabil la momentul plasării comenzii</li>
                  </ul>

                  <p className="mt-4"><strong>3.2. Metode de plată</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Card bancar (Visa, Mastercard)</li>
                    <li>Ramburs la livrare</li>
                    <li>Transfer bancar</li>
                    <li>Plata în rate (prin partenerii noștri)</li>
                  </ul>

                  <p className="mt-4"><strong>3.3. Facturare</strong></p>
                  <p>
                    Fiecare comandă vine cu factură fiscală. Pentru persoane juridice, te rugăm să
                    completezi datele companiei la pasul de facturare.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Package className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Livrare</h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p><strong>4.1. Zone de livrare</strong></p>
                  <p>Livrăm în toată România, inclusiv în zonele izolate.</p>

                  <p className="mt-4"><strong>4.2. Termene de livrare</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Zone urbane: 24-48 ore</li>
                    <li>Zone rurale: 2-4 zile lucrătoare</li>
                    <li>Produse voluminoase: 3-7 zile lucrătoare</li>
                  </ul>

                  <p className="mt-4"><strong>4.3. Costuri de transport</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>GRATUIT pentru comenzi peste 500 RON</li>
                    <li>20-30 RON pentru comenzi sub 500 RON (variază în funcție de zonă)</li>
                  </ul>

                  <p className="mt-4"><strong>4.4. Deschiderea coletului</strong></p>
                  <p>
                    Ai dreptul să deschizi coletul în prezența curierului și să verifici produsele.
                    Dacă produsele sunt deteriorate, poți refuza coletul fără costuri suplimentare.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <RotateCcw className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Drept de returnare</h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p><strong>5.1. Perioada de returnare</strong></p>
                  <p>
                    Ai la dispoziție 30 de zile de la primirea produsului pentru a-l returna,
                    fără a fi necesar să justifici decizia.
                  </p>

                  <p className="mt-4"><strong>5.2. Condiții de returnare</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Produsul trebuie să fie în stare perfectă, nefolosit</li>
                    <li>Ambalajul original trebuie să fie intact</li>
                    <li>Toate accesoriile și documentele trebuie incluse</li>
                    <li>Eticheta și sigiliile să nu fie deteriorate</li>
                  </ul>

                  <p className="mt-4"><strong>5.3. Procesul de returnare</strong></p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contactează serviciul clienți pentru a solicita returnarea</li>
                    <li>Vei primi un număr de autorizare (RMA)</li>
                    <li>Ambalează produsul și trimite-l la adresa indicată</li>
                    <li>Vei primi rambursarea în 14 zile de la primirea produsului</li>
                  </ol>

                  <p className="mt-4"><strong>5.4. Costuri de returnare</strong></p>
                  <p>
                    Costurile de returnare sunt suportate de client, cu excepția cazurilor în care
                    produsul este defect sau a fost livrat greșit.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="text-red-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Garanție</h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p><strong>6.1. Garanția legală</strong></p>
                  <p>
                    Toate produsele beneficiază de garanție conform legislației în vigoare
                    (minimum 24 luni pentru produse noi).
                  </p>

                  <p className="mt-4"><strong>6.2. Garanția extinsă</strong></p>
                  <p>
                    Poți achiziționa garanție extinsă pentru anumite produse. Detaliile sunt
                    disponibile pe pagina produsului.
                  </p>

                  <p className="mt-4"><strong>6.3. Service autorizat</strong></p>
                  <p>
                    Lucrăm cu service-uri autorizate ale producătorilor pentru a asigura cea mai
                    bună calitate a reparațiilor.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Proprietate intelectuală</h2>
                <div className="text-gray-700">
                  <p>
                    Tot conținutul site-ului (texte, imagini, logo-uri, design) este proprietatea
                    VOLCO și este protejat de legile privind proprietatea intelectuală.
                    Reproducerea fără acordul nostru este interzisă.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitarea răspunderii</h2>
                <div className="text-gray-700">
                  <p>
                    VOLCO nu este responsabil pentru:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Întârzieri cauzate de forță majoră</li>
                    <li>Utilizarea incorectă a produselor</li>
                    <li>Daune indirecte sau consecințe ale utilizării produselor</li>
                    <li>Probleme cauzate de furnizori terți (curierat, bănci)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificări ale termenilor</h2>
                <div className="text-gray-700">
                  <p>
                    Ne rezervăm dreptul de a modifica acești termeni și condiții oricând.
                    Modificările vor fi publicate pe site și vor intra în vigoare imediat.
                    Continuarea utilizării site-ului după modificări înseamnă acceptarea noilor termeni.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legea aplicabilă</h2>
                <div className="text-gray-700">
                  <p>
                    Acești termeni sunt guvernați de legea română. Orice litigiu va fi soluționat
                    de instanțele competente din România.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
                <div className="text-gray-700">
                  <p>Pentru orice întrebări despre termenii și condițiile noastre:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Email: legal@volco.ro</li>
                    <li>Telefon: 0800 123 456</li>
                    <li>Adresă: Str. Exemplu nr. 123, București, România</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <FileText size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Transparent și corect</h3>
          <p className="text-blue-100">
            Ne angajăm să oferim cea mai bună experiență de cumpărături, în condiții clare și
            corecte pentru toți clienții noștri. Satisfacția ta este prioritatea noastră!
          </p>
        </div>
      </div>
    </div>
  );
}
