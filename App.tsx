import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        
        {/* About snippet/Feature section */}
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                            Por que escolher o <span className="text-orange-600">Sr. Resolve?</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                Sabemos o quanto é difícil encontrar profissionais de confiança para entrar na sua casa. Por isso, criamos um padrão rigoroso de qualidade e segurança.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</span>
                                    Pontualidade garantida
                                </li>
                                <li className="flex items-center">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</span>
                                    Preço justo e transparente
                                </li>
                                <li className="flex items-center">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</span>
                                    Limpeza pós-obra
                                </li>
                                <li className="flex items-center">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</span>
                                    Ferramentas profissionais
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                         <img 
                            src="https://picsum.photos/id/193/600/500" 
                            alt="Equipe trabalhando" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Contato WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
