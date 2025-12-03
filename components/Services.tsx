import React from 'react';
import { Wrench, Zap, Droplet, PaintBucket, Hammer, Home } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Elétrica Residencial',
    description: 'Instalação de chuveiros, troca de tomadas, disjuntores, luminárias e ventiladores de teto.',
    iconName: 'zap'
  },
  {
    id: '2',
    title: 'Hidráulica',
    description: 'Conserto de vazamentos, troca de torneiras, reparos em descargas, instalação de máquinas de lavar.',
    iconName: 'droplet'
  },
  {
    id: '3',
    title: 'Montagem de Móveis',
    description: 'Montagem e desmontagem de guarda-roupas, armários, estantes, camas e móveis de escritório.',
    iconName: 'hammer'
  },
  {
    id: '4',
    title: 'Pintura',
    description: 'Pintura de paredes, tetos, portas, janelas e pequenos retoques. Acabamento fino e limpeza.',
    iconName: 'paint-bucket'
  },
  {
    id: '5',
    title: 'Instalações Gerais',
    description: 'Instalação de cortinas, persianas, prateleiras, suportes de TV, quadros e espelhos.',
    iconName: 'wrench'
  },
  {
    id: '6',
    title: 'Manutenção Predial',
    description: 'Pequenos reparos em pisos, rejuntes, maçanetas, fechaduras e ajustes de portas.',
    iconName: 'home'
  }
];

const IconMap = {
  'zap': Zap,
  'droplet': Droplet,
  'hammer': Hammer,
  'paint-bucket': PaintBucket,
  'wrench': Wrench,
  'home': Home
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que sua casa precisa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Resolvemos desde o pingo na torneira até a renovação da pintura da sua sala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = IconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100">
                <div className="p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors duration-300 mb-5">
                    <IconComponent className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <a href="#contact" className="text-orange-600 font-medium hover:text-orange-800 text-sm flex items-center">
                    Solicitar este serviço &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
