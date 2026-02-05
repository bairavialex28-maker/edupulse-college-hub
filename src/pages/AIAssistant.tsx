import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Brain, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestions = [
  { icon: BookOpen, text: "Explain binary search tree" },
  { icon: Brain, text: "Help me with OS concepts" },
  { icon: Lightbulb, text: "Study tips for exams" },
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your AI study assistant. I can help you with your syllabus, explain concepts, and suggest study strategies based on your weak areas. What would you like to learn today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("binary search")) {
      return "Binary Search is an efficient algorithm for finding an element in a **sorted array**. It works by repeatedly dividing the search interval in half.\n\n**Time Complexity:** O(log n)\n\n**Key Steps:**\n1. Compare target with middle element\n2. If equal, return the position\n3. If target is smaller, search left half\n4. If target is larger, search right half\n\nWould you like me to show you a code example?";
    }
    if (lowerQuery.includes("study") || lowerQuery.includes("tip")) {
      return "Based on your recent mock test scores, here are personalized study tips:\n\n📊 **Your Weak Areas:**\n- Operating System scheduling algorithms\n- Database normalization\n\n📚 **Recommended Focus:**\n1. Spend 30 mins daily on OS process scheduling\n2. Practice 5 normalization problems this week\n3. Take a mock test every 2 days\n\nShall I create a study schedule for you?";
    }
    return "That's a great question! Let me help you understand this concept better. Could you provide more context about which specific aspect you'd like me to explain? I can provide examples, diagrams, or step-by-step explanations.";
  };

  const handleSuggestionClick = (text: string) => {
    setInput(text);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-24 md:pb-0">
      {/* Header */}
      <header className="gradient-hero px-5 md:px-8 pt-12 pb-6 md:pb-8 rounded-b-3xl md:rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <Bot className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">AI Study Assistant</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-success rounded-full animate-pulse" />
                <span className="text-primary-foreground/80 text-sm md:text-base">Online & ready to help</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 md:px-8 py-4 pb-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          {messages.length === 1 && (
            <div className="mb-6">
              <p className="text-sm md:text-base text-muted-foreground mb-3">Quick suggestions:</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {suggestions.map((suggestion, index) => {
                  const Icon = suggestion.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm md:text-base text-foreground">{suggestion.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-4 md:space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 md:gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" 
                    ? "gradient-hero" 
                    : "bg-muted"
                }`}>
                  {message.role === "assistant" ? (
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  ) : (
                    <User className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  )}
                </div>
                <div className={`max-w-[80%] md:max-w-[70%] rounded-2xl md:rounded-3xl px-4 md:px-6 py-3 md:py-4 ${
                  message.role === "assistant"
                    ? "bg-card shadow-card"
                    : "gradient-primary text-primary-foreground"
                }`}>
                  <p className={`text-sm md:text-base whitespace-pre-wrap leading-relaxed ${
                    message.role === "assistant" ? "text-foreground" : ""
                  }`}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-hero flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <div className="bg-card shadow-card rounded-2xl md:rounded-3xl px-4 md:px-6 py-3 md:py-4">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 md:left-64 px-5 md:px-8 pb-4 md:pb-8 bg-gradient-to-t from-background via-background to-transparent pt-8">
        <div className="max-w-4xl mx-auto flex items-center gap-2 md:gap-3 bg-card rounded-2xl md:rounded-3xl border border-border p-2 md:p-3 shadow-card hover:shadow-xl transition-shadow">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything about your studies..."
            className="flex-1 bg-transparent px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <Button
            size="icon"
            className="gradient-primary text-primary-foreground rounded-xl md:rounded-2xl shadow-glow h-10 w-10 md:h-12 md:w-12 hover:scale-105 transition-transform"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
