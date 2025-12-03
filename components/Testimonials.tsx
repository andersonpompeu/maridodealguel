import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Cláudia Silva',
    role: 'Dona de Casa',
    content: 'O Sr. Resolve foi fantástico! Trocou meu chuveiro e instalou as prateleiras da cozinha em menos de uma hora. Super recomendo pela agilidade.',
    rating: 5
  },
  {
    id: '2',
    name: 'Roberto Mendes',
    role: 'Empresário',
    content: 'Precisei de pintura no meu escritório e montagem de mesas novas. O serviço ficou impecável e deixaram tudo limpo depois. Profissionalismo puro.',
    rating: 5
  },
  {
    id: '3',
    name: 'Carla Dias',
    role: 'Arquiteta',
    content: 'Como arquiteta, sou exigente. Contratei para instalar luminárias complexas e o resultado foi perfeito. Virei cliente fiel para meus projetos.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            A confiança é nossa ferramenta mais importante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800 rounded-2xl p-8 relative">
              {/* Quote icon decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-orange-500 opacity-20 font-serif">"</div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
