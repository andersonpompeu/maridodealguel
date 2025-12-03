import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2, ChevronRight } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do Sr. Resolve. Como posso ajudar com reparos na sua casa hoje?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Format history for Gemini API
      // We only keep the last 10 messages to maintain context but avoid token limits
      const history = messages.slice(-10).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const { text, isServiceList } = await sendMessageToGemini(userMessage.text, history);
      
      const botMessage: ChatMessage = { role: 'model', text, isServiceList };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'Desculpe, estou com dificuldade de conexão. Por favor, tente novamente ou nos chame no WhatsApp.',
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickServices = [
    { name: 'Elétrica', icon: '⚡' },
    { name: 'Hidráulica', icon: '💧' },
    { name: 'Pintura', icon: '🎨' },
    { name: 'Montagem', icon: '🔨' },
    { name: 'Instalações', icon: '🔧' },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline">Dúvidas?</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 sm:bottom-6 right-0 sm:right-6 w-full sm:w-96 h-[80vh] sm:h-[500px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl z-50 flex flex-col transition-transform duration-300 transform border border-gray-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-slate-900"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold">SR</div>
            </div>
            <div>
              <h3 className="font-bold text-sm">Assistente Sr. Resolve</h3>
              <p className="text-xs text-slate-400">Online agora</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsOpen(false)} className="hover:bg-slate-700 p-1 rounded transition-colors">
              <Minimize2 className="h-4 w-4" />
            </button>
            <button onClick={() => setIsOpen(false)} className="hover:bg-slate-700 p-1 rounded transition-colors sm:hidden">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-[85%] px-4 py-2 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-br-none' 
                    : msg.isError 
                      ? 'bg-red-100 text-red-800 rounded-bl-none'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              
              {/* Render Service List if triggered */}
              {msg.isServiceList && (
                <div className="mt-2 w-[85%] animate-fade-in">
                    <p className="text-xs text-gray-500 mb-2 ml-1">Toque para ver detalhes:</p>
                    <div className="grid grid-cols-1 gap-2">
                        {quickServices.map((service) => (
                            <a 
                                key={service.name}
                                href="#services"
                                onClick={() => setIsOpen(false)}
                                className="bg-white border border-gray-200 hover:border-orange-500 hover:bg-orange-50 p-2 rounded-lg text-sm flex items-center justify-between transition-all group"
                            >
                                <span className="flex items-center gap-2">
                                    <span>{service.icon}</span>
                                    <span className="font-medium text-gray-700 group-hover:text-orange-700">{service.name}</span>
                                </span>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
                            </a>
                        ))}
                    </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-lg rounded-bl-none shadow-sm border border-gray-200 flex items-center gap-2 text-gray-500 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Digitando...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua dúvida..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              className={`p-2 rounded-full ${!inputText.trim() || isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'} text-white transition-colors`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            IA pode cometer erros. Para orçamentos exatos, contate via WhatsApp.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
