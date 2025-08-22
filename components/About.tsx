import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Despre BuenoVita Care</h2>
            <p className="text-lg mb-6 text-brand-gray">
              La BuenoVita Care, misiunea noastră este să oferim servicii de recuperare medicală de excepție, centrate pe pacient. Credem într-o abordare holistică, combinând tehnici avansate de terapie cu o îngrijire plină de compasiune pentru a vă ajuta să vă atingeți potențialul maxim de recuperare.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p><span className="font-semibold">Planuri Personalizate:</span> Fiecare pacient este unic. Creăm programe de tratament adaptate nevoilor și obiectivelor individuale.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p><span className="font-semibold">Echipă de Experți:</span> Terapeuții noștri sunt licențiați și dedicați dezvoltării profesionale continue pentru a oferi cele mai bune practici.</p>
              </div>
               <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p><span className="font-semibold">Mediu Modern și Primitor:</span> Clinica noastră este dotată cu echipamente de ultimă generație într-un spațiu confortabil și încurajator.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cărare printr-o pădure verde, simbolizând calea spre recuperare" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;