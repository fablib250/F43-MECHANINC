import React, { useEffect, useState } from 'react';
import { Atom, Calculator, Database, Home, MessageSquare, Menu, X } from 'lucide-react';
import { SystemStatus } from './SystemStatus';
import { ParticleBackground } from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeSection, 
  setActiveSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemTime, setSystemTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'calculator', label: 'Calculator', icon: <Calculator className="w-5 h-5" /> },
    { id: 'periodic-table', label: 'Periodic Table', icon: <Atom className="w-5 h-5" /> },
    { id: 'chatbot', label: 'AI Assistant', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'materials', label: 'Materials DB', icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-400 font-mono relative overflow-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="border-b border-cyan-800/50 bg-black/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500/70 flex items-center justify-center relative overflow-hidden">
              <span className="text-cyan-300 font-bold text-xl">F43</span>
              <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MECHANIC <span className="text-xs align-top text-cyan-500">v1.0</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <SystemStatus />
            <div className="text-sm text-cyan-300">
              {systemTime.toLocaleTimeString()} | {systemTime.toLocaleDateString()}
            </div>
          </div>
          
          <button 
            className="md:hidden bg-cyan-900/30 p-2 rounded-md border border-cyan-700/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>
      
      <div className="flex flex-col md:flex-row h-[calc(100vh-60px)]">
        {/* Sidebar Navigation */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block bg-black/60 backdrop-blur-sm border-r border-cyan-800/50 w-full md:w-64 absolute md:relative z-10`}>
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.id} className="px-4 py-2">
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-cyan-900/60 text-cyan-300 border-l-2 border-cyan-400'
                      : 'hover:bg-cyan-900/30 text-cyan-500/80'
                  }`}
                >
                  <div className={`${activeSection === item.id ? 'text-cyan-300' : 'text-cyan-600'}`}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
          
          {/* System Status Mobile */}
          <div className="md:hidden px-4 py-3 border-t border-cyan-800/50">
            <SystemStatus />
            <div className="text-sm text-cyan-400 mt-2">
              {systemTime.toLocaleTimeString()} | {systemTime.toLocaleDateString()}
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto relative z-0 p-4">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};