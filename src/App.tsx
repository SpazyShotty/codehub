import { useState } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'home'>('welcome');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleContinue = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('home');
      setIsTransitioning(false);
    }, 600);
  };

  const handleBackToWelcome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('welcome');
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <div
        className={`transition-all duration-600 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {currentPage === 'welcome' ? (
          <WelcomePage onContinue={handleContinue} />
        ) : (
          <HomePage onBack={handleBackToWelcome} />
        )}
      </div>
    </div>
  );
}

export default App;
