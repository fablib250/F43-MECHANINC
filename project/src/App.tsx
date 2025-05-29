import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './features/dashboard/Dashboard';
import { Calculator } from './features/calculator/Calculator';
import { PeriodicTable } from './features/periodic-table/PeriodicTable';
import { Chatbot } from './features/chatbot/Chatbot';
import { MaterialsDatabase } from './features/materials/MaterialsDatabase';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'calculator':
        return <Calculator />;
      case 'periodic-table':
        return <PeriodicTable />;
      case 'chatbot':
        return <Chatbot />;
      case 'materials':
        return <MaterialsDatabase />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderActiveSection()}
    </Layout>
  );
}

export default App;