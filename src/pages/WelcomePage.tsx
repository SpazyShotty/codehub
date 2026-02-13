import { useState, useEffect } from 'react';
import { ChevronRight, Terminal, Code2, Cpu, Sparkles } from 'lucide-react';

interface WelcomePageProps {
  onContinue: () => void;
}

const cppCode = `#include <iostream>
#include <string>

class Welcome {
private:
    std::string message;
    int version;
    
public:
    Welcome() : message("Hello, Developer!"), version(1) {}
    
    void display() {
        std::cout << "================================" << std::endl;
        std::cout << "  " << message << std::endl;
        std::cout << "  Version: " << version << std::endl;
        std::cout << "================================" << std::endl;
    }
    
    void init() {
        std::cout << "Loading modules..." << std::endl;
        std::cout << "[OK] Core system" << std::endl;
        std::cout << "[OK] Network layer" << std::endl;
        std::cout << "[OK] UI components" << std::endl;
        std::cout << "Ready!" << std::endl;
    }
};

int main() {
    Welcome app;
    app.display();
    app.init();
    
    return 0;
}`;

export default function WelcomePage({ onContinue }: WelcomePageProps) {
  const [typedCode, setTypedCode] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < cppCode.length) {
        setTypedCode(cppCode.slice(0, index + 1));
        
        // Calculate current line for cursor
        const lines = cppCode.slice(0, index + 1).split('\n');
        setCursorLine(lines.length - 1);
        
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
        setTimeout(() => setShowContinue(true), 800);
      }
    }, 15);

    return () => clearInterval(typeInterval);
  }, []);

  const renderCodeWithSyntax = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      let highlightedLine = line
        .replace(/(\/\/.*$)/g, '<span class="syntax-comment">$1</span>')
        .replace(/(#include|class|private:|public:|return|int|void|string)/g, '<span class="syntax-keyword">$1</span>')
        .replace(/(std::\w+|cout|endl)/g, '<span class="syntax-type">$1</span>')
        .replace(/(".*?")/g, '<span class="syntax-string">$1</span>')
        .replace(/(\d+)/g, '<span class="syntax-number">$1</span>')
        .replace(/(Welcome|display|init|main)/g, '<span class="syntax-function">$1</span>')
        .replace(/(<<|>>|::|->|\.|\(|\)|\{|\}|;)/g, '<span class="syntax-operator">$1</span>');

      return (
        <div
          key={lineIndex}
          className={`code-line font-mono text-sm leading-relaxed ${
            lineIndex === cursorLine && !isTypingComplete ? 'bg-[#c6f135]/10' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c6f135]/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c6f135]/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c6f135] to-[#a8d41e] flex items-center justify-center">
              <Code2 className="w-7 h-7 text-black" />
            </div>
            <span className="text-2xl font-bold tracking-tight">CodeHub</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div 
          className="w-full max-w-4xl animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="glass rounded-2xl p-1">
            <div className="bg-[#0a0a0a] rounded-xl overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#222]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  </div>
                  <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-[#1a1a1a] rounded-md">
                    <Terminal className="w-4 h-4 text-[#666]" />
                    <span className="text-sm text-[#a6a6a6]">welcome.cpp</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#c6f135]" />
                  <span className="text-xs text-[#666]">C++17</span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="relative p-6 min-h-[400px] max-h-[500px] overflow-auto">
                <div className="font-mono">
                  {renderCodeWithSyntax(typedCode)}
                  {!isTypingComplete && (
                    <span className="inline-block w-2 h-5 bg-[#c6f135] ml-1 animate-blink" />
                  )}
                </div>

                {/* Completion indicator */}
                {isTypingComplete && (
                  <div className="mt-6 pt-4 border-t border-[#222] animate-fade-in">
                    <div className="flex items-center gap-2 text-[#c6f135]">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm">Compilation successful!</span>
                    </div>
                    <div className="mt-2 text-[#666] text-sm font-mono">
                      <span className="text-[#4ec9b0]">$</span> ./welcome
                    </div>
                    <div className="mt-1 text-[#a6a6a6] text-sm font-mono">
                      ================================<br />
                      &nbsp;&nbsp;Hello, Developer!<br />
                      &nbsp;&nbsp;Version: 1<br />
                      ================================<br />
                      Loading modules...<br />
                      <span className="text-[#27ca40]">[OK]</span> Core system<br />
                      <span className="text-[#27ca40]">[OK]</span> Network layer<br />
                      <span className="text-[#27ca40]">[OK]</span> UI components<br />
                      <span className="text-[#c6f135]">Ready!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div 
          className="mt-10 text-center animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-[#c6f135]">CodeHub</span>
          </h1>
          <p className="text-[#a6a6a6] text-lg max-w-md mx-auto">
            Your ultimate platform for coding, collaboration, and building the future.
          </p>
        </div>

        {/* Continue Button */}
        {showContinue && (
          <div className="mt-8 animate-slide-up">
            <button
              onClick={onContinue}
              className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-full text-black font-semibold text-lg"
            >
              <span>Continue to Platform</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {/* Features Preview */}
        <div 
          className="mt-12 grid grid-cols-3 gap-6 max-w-2xl animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { icon: Code2, label: 'Code Editor', desc: 'Powerful IDE' },
            { icon: Terminal, label: 'Terminal', desc: 'Built-in CLI' },
            { icon: Cpu, label: 'Compiler', desc: 'Multi-language' },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-[#111]/50 border border-[#222] hover:border-[#c6f135]/30 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-[#c6f135] mx-auto mb-2" />
              <div className="text-sm font-medium">{feature.label}</div>
              <div className="text-xs text-[#666]">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
