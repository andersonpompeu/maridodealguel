import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-slate-900 pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/175/1920/1080" 
          alt="Ferramentas e reparos" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Disponível em toda a região
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Sua casa precisa de reparos? <span className="text-orange-500">Nós resolvemos.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Profissionais qualificados para elétrica, hidráulica, montagens e pequenos reparos. Serviço rápido, limpo e com garantia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#contact" 
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-orange-600 hover:bg-orange-700 md:text-lg transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Agendar Visita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-200 bg-slate-800/50 hover:bg-slate-700 md:text-lg backdrop-blur-sm transition-all"
            >
              Ver Serviços
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Orçamento Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Profissionais Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Garantia de Serviço</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 transform rotate-2 hover:rotate-0 transition-all duration-500">
             <img 
              src="https://picsum.photos/id/101/800/600" 
              alt="Profissional trabalhando" 
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold text-xl">Instalações e Reparos</p>
              <p className="text-gray-300">Qualidade garantida em cada detalhe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
