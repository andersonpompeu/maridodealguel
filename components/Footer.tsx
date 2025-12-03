import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Sr. Resolve</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sua solução confiável para reparos residenciais e comerciais. Qualidade, rapidez e preço justo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Elétrica</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Hidráulica</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pintura</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Montagem</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-slate-500">© 2024 Sr. Resolve. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
