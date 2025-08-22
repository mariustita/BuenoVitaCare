
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue">Contactați-ne</h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
            Suntem aici pentru a vă răspunde la întrebări. Faceți primul pas spre recuperare astăzi.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Trimite-ne un mesaj</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brand-gray font-medium mb-2">Nume</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-gray font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-gray font-medium mb-2">Mesaj</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-teal hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Trimite Mesajul
              </button>
            </form>
          </div>
          <div>
            <div className="bg-brand-light p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Informații de Contact</h3>
                <div className="space-y-4 text-brand-gray">
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Bulevardul Tudor Vladimirescu 22, București 050883</p>
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> (+40) 749 213 663</p>
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> contact@buenovitacare.ro</p>
                </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.526219353982!2d26.07632627685657!3d44.42512190209428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff531a722923%3A0x83e2b2023a1a09d!2sBulevardul%20Tudor%20Vladimirescu%2022%2C%20Bucure%C8%99ti%20050883%2C%20Romania!5e0!3m2!1sen!2sus"
                    width="100%" 
                    height="400" 
                    style={{ border:0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locația clinicii BuenoVita Care"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;