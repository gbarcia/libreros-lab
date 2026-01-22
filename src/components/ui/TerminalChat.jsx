import { useState, useRef, useEffect } from 'react';
import { findResponse, getWelcomeMessage } from '../../data/chatResponses';

const TerminalChat = () => {
  const [messages, setMessages] = useState([
    { type: 'system', text: getWelcomeMessage() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);

    // Simulate typing delay
    setIsTyping(true);
    const typingDelay = Math.min(800 + userMessage.length * 20, 2000);

    setTimeout(() => {
      const response = findResponse(userMessage);
      setMessages(prev => [...prev, { type: 'system', text: response }]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <div className="terminal-chat">
      {/* Scanline effect */}
      <div className="terminal-scanlines" />

      {/* Messages area */}
      <div className="terminal-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`terminal-message ${msg.type}`}>
            <span className="terminal-prompt">
              {msg.type === 'user' ? '>' : '$'}
            </span>
            <span className="terminal-text">
              {msg.text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < msg.text.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="terminal-message system">
            <span className="terminal-prompt">$</span>
            <span className="terminal-typing">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form className="terminal-input-area" onSubmit={handleSubmit}>
        <span className="terminal-input-prompt">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          disabled={isTyping}
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="terminal-submit"
          disabled={isTyping || !input.trim()}
        >
          [ENTER]
        </button>
      </form>
    </div>
  );
};

export default TerminalChat;
