
import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    imageUrl: 'https://picsum.photos/400/400?image=669',
    name: 'Dr. Ana Popescu',
    specialty: 'Medic Primar Recuperare Medicală',
    bio: 'Cu peste 15 ani de experiență, Dr. Popescu este specializată în recuperarea post-traumatică și afecțiuni neurologice.'
  },
  {
    imageUrl: 'https://picsum.photos/400/400?image=684',
    name: 'Mihai Ionescu',
    specialty: 'Kinetoterapeut Principal',
    bio: 'Expert în terapie manuală și programe de exerciții personalizate, Mihai ajută pacienții să-și recapete mobilitatea.'
  },
  {
    imageUrl: 'https://picsum.photos/400/400?image=778',
    name: 'Elena Radu',
    specialty: 'Terapeut Ocupațional',
    bio: 'Elena este dedicată reintegrării pacienților în activitățile cotidiene, crescând autonomia și calitatea vieții.'
  },
   {
    imageUrl: 'https://picsum.photos/400/400?image=836',
    name: 'Dr. Cristian Vasilescu',
    specialty: 'Psiholog Clinician',
    bio: 'Oferă suport psihologic esențial pacienților și familiilor acestora pe parcursul procesului de recuperare.'
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center group">
        <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
            <p className="text-brand-teal font-medium mb-3">{member.specialty}</p>
            <p className="text-brand-gray text-sm">{member.bio}</p>
        </div>
    </div>
);


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue">Echipa Noastră Dedicată</h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
            Faceți cunoștință cu profesioniștii pasionați care vă vor ghida pe drumul spre recuperare.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
