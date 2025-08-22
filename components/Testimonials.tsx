import React, { useState } from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "Echipa de la BuenoVita Care mi-a redat speranța și mobilitatea după un accident complicat. Profesionalism, empatie și rezultate extraordinare. Le mulțumesc din suflet!",
        author: "Andrei V.",
        relation: "Pacient, Recuperare post-chirurgicală"
    },
    {
        quote: "Nu am crezut că voi putea să merg din nou fără durere. Terapeuții de aici sunt adevărați magicieni. Recomand cu toată încrederea!",
        author: "Maria S.",
        relation: "Pacientă, Afecțiuni ale coloanei"
    },
    {
        quote: "Atmosfera este una caldă și primitoare, iar dotările sunt de top. Fiecare ședință a fost un pas înainte. Sunteți minunați!",
        author: "Ioan D.",
        relation: "Pacient, Recuperare sportivă"
    },
    {
        quote: "După operația la umăr, credeam că nu voi mai putea picta niciodată. Datorită programului de terapie ocupațională și răbdării terapeuților, acum pot să-mi reiau pasiunea.",
        author: "Laura G.",
        relation: "Pacientă, Terapie Ocupațională"
    },
    {
        quote: "Am venit demoralizat și copleșit de durere cronică. Suportul psihologic, combinat cu fizioterapia, a făcut minuni. Am învățat să-mi gestionez durerea și am găsit o echipă care înțelege.",
        author: "Marius P.",
        relation: "Pacient, Managementul Durerii Cronice"
    },
    {
        quote: "Serviciul de îngrijire la domiciliu a fost un colac de salvare pentru mama mea. Terapeuții au fost punctuali, extrem de profesioniști și plini de compasiune. O experiență excelentă!",
        author: "Alexandra T.",
        relation: "Fiica unei paciente, Îngrijire la domiciliu"
    }
];

const Testimonials: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

    return (
        <section id="testimonials" className="py-20 bg-brand-blue text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Ce spun pacienții noștri</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto mt-4">
                        Poveștile lor de succes sunt cea mai mare realizare a noastră.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg flex flex-col">
                            <svg className="w-12 h-12 text-brand-teal mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a1 1 0 000-2H4a1 1 0 000 2zm12 0h-3a1 1 0 100 2h3a1 1 0 100-2zM4 9a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1H4zm0-3a1 1 0 00-1 1v1a1 1 0 102 0V7a1 1 0 00-1-1zm12 0a1 1 0 00-1 1v1a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <p className="italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-xl">{testimonial.author}</p>
                                <p className="opacity-80">{testimonial.relation}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {testimonials.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-white hover:bg-gray-200 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                        >
                            {showAll ? 'Vezi mai puține' : 'Vezi mai multe'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;