import React from 'react';
import type { Service } from '../types';
import DumbbellIcon from './icons/DumbbellIcon';
import StethoscopeIcon from './icons/StethoscopeIcon';
import HeartbeatIcon from './icons/HeartbeatIcon';
import WaterIcon from './icons/WaterIcon';
import BrainIcon from './icons/BrainIcon';
import ChatIcon from './icons/ChatIcon';
import HomeIcon from './icons/HomeIcon';
import ElectrotherapyIcon from './icons/ElectrotherapyIcon';

const services: Service[] = [
  {
    icon: <DumbbellIcon />,
    title: 'Kinetoterapie',
    description: 'Programe de exerciții terapeutice pentru refacerea mobilității, forței și funcționalității articulare și musculare.',
  },
  {
    icon: <StethoscopeIcon />,
    title: 'Terapie Ocupațională',
    description: 'Ajutăm pacienții să-și recapete independența în activitățile de zi cu zi, de la auto-îngrijire la sarcini profesionale.',
  },
  {
    icon: <WaterIcon />,
    title: 'Hidroterapie',
    description: 'Utilizarea apei în scopuri terapeutice pentru a reduce durerea și a facilita mișcarea într-un mediu cu impact redus.',
  },
  {
    icon: <HeartbeatIcon />,
    title: 'Masaj Terapeutic',
    description: 'Tehnici specializate de masaj pentru a reduce tensiunea musculară, a îmbunătăți circulația și a promova relaxarea.',
  },
  {
    icon: <BrainIcon />,
    title: 'Consiliere Psihologică',
    description: 'Suport emoțional și strategii de coping pentru a gestiona impactul psihologic al afecțiunilor medicale.',
  },
  {
    icon: <ChatIcon />,
    title: 'Logopedie',
    description: 'Terapie pentru tulburările de vorbire, limbaj, voce și deglutiție, adresată atât copiilor, cât și adulților.',
  },
  {
    icon: <HomeIcon />,
    title: 'Îngrijire la domiciliu',
    description: 'Oferim servicii medicale și de recuperare direct la confortul casei dumneavoastră, pentru pacienții cu mobilitate redusă.',
  },
  {
    icon: <ElectrotherapyIcon />,
    title: 'Fizioterapie',
    description: 'Tratamente cu curenți de joasă și medie frecvență, ultrasunete și laserterapie pentru a reduce durerea și inflamația.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col">
    <div className="bg-brand-teal text-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center flex-shrink-0">
      {service.icon}
    </div>
    <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
        <p className="text-brand-gray flex-grow">{service.description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue">Serviciile Noastre</h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
            Oferim o gamă completă de servicii de recuperare, concepute pentru a vă oferi cea mai bună îngrijire posibilă.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;