import { useEffect, useRef, useState } from 'react';
import { sendChatMessage } from '../api/ai.js';

export default function ChatWidget() {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([
		{ role: 'assistant', content: 'Hi! Ask me about mutual funds, comparisons, or your portfolio.' },
	]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const listRef = useRef(null);

	useEffect(() => {
		if (listRef.current) {
			listRef.current.scrollTop = listRef.current.scrollHeight;
		}
	}, [messages, open]);

	async function onSend(e) {
		e.preventDefault();
		if (!input.trim() || loading) return;
		const next = [...messages, { role: 'user', content: input.trim() }];
		setMessages(next);
		setInput('');
		setLoading(true);
		try {
			const res = await sendChatMessage(next);
			const reply = res?.reply || 'Sorry, I could not process that.';
			setMessages((m) => [...m, { role: 'assistant', content: reply }]);
		} catch (err) {
			setMessages((m) => [...m, { role: 'assistant', content: 'There was an error contacting the AI service.' }]);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div aria-live="polite">
			<div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 100 }}>
				{open && (
					<div className="card" style={{ width: 360, maxWidth: '90vw', height: 460, display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
							<strong>AI Assistant</strong>
							<button onClick={() => setOpen(false)} aria-label="Close chat">Close</button>
						</div>
						<div ref={listRef} style={{ flex: 1, overflow: 'auto', display: 'grid', gap: 8, paddingRight: 4 }}>
							{messages.map((m, idx) => (
								<div key={idx} style={{
									justifySelf: m.role === 'user' ? 'end' : 'start',
									maxWidth: '85%',
									background: m.role === 'user' ? 'var(--accent)' : 'var(--color-elev)',
									color: m.role === 'user' ? 'var(--accent-contrast)' : 'var(--color-text)',
									border: '1px solid var(--color-border)',
									borderRadius: '12px',
									padding: '10px 12px',
									boxShadow: 'var(--shadow-1)'
								}}>
									{m.content}
								</div>
							))}
							{loading && <div style={{ opacity: 0.8 }}>Assistant is typing…</div>}
						</div>
						<form onSubmit={onSend} style={{ display: 'flex', gap: 8, marginTop: 8 }}>
							<label htmlFor="chat-input" className="sr-only">Type your message</label>
							<input
								id="chat-input"
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Ask about funds, risks, or returns"
								aria-label="Chat input"
							/>
							<button type="submit" disabled={loading}>Send</button>
						</form>
					</div>
				)}
				<button onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="ai-chat" style={{ borderRadius: 24 }}>
					{open ? 'Hide Chat' : 'AI Chat'}
				</button>
			</div>
		</div>
	);
}



