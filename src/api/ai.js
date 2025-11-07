import { api } from './client.js';

export async function sendChatMessage(messages) {
	// messages: [{ role: 'user'|'assistant'|'system', content: string }]
	const url = import.meta.env.VITE_AI_API_URL || '/ai/chat';
	const { data } = await api.post(url, { messages });
	return data; // expected { reply: string }
}



