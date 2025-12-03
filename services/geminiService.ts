import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da "Sr. Resolve", uma empresa de Marido de Aluguel (serviços gerais residenciais).
Sua função é ajudar clientes potenciais com dúvidas básicas sobre reparos, manutenção e oferecer estimativas de tempo ou complexidade, mas NUNCA dê preços exatos.
Sempre direcione o usuário para "agendar uma visita técnica" ou "pedir um orçamento final pelo WhatsApp" para valores precisos.
Seja cortês, profissional e use emojis ocasionalmente. Fale sempre em Português do Brasil.
Serviços que oferecemos: Hidráulica, Elétrica, Pintura, Montagem de Móveis, Instalações em geral.

INSTRUÇÃO IMPORTANTE: Se o usuário perguntar "quais serviços vocês fazem", "quais os serviços disponíveis", "o que você faz" ou algo similar pedindo uma lista de serviços, responda com uma breve introdução e OBRIGATORIAMENTE adicione a tag [SHOW_SERVICES] ao final do texto.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<{ text: string; isServiceList: boolean }> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    let text = result.text || "Desculpe, não consegui processar sua resposta no momento.";
    let isServiceList = false;

    if (text.includes('[SHOW_SERVICES]')) {
      isServiceList = true;
      text = text.replace('[SHOW_SERVICES]', '').trim();
    }

    return { text, isServiceList };
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    throw new Error("Falha na comunicação com o assistente.");
  }
};
