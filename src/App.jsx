import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModuleNavigation from './components/ModuleNavigation';
import Dashboard from './pages/Dashboard';

// Composant de base pour les pages non implémentées
const ComingSoon = ({ moduleName }) => (
    <div className="flex-1 p-8 text-center text-gray-500 bg-white m-4 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-otacos-blue">{moduleName}</h1>
        <p className="text-xl">Ce module est en cours de développement. Architecture opérationnelle!</p>
    </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <ModuleNavigation />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipe-rh" element={<ComingSoon moduleName="Module Équipe & RH" />} />
            <Route path="/operations" element={<ComingSoon moduleName="Module Opérations & Qualité" />} />
            <Route path="/stock" element={<ComingSoon moduleName="Module Logistique & Stock" />} />
            <Route path="/crm" element={<ComingSoon moduleName="Module Performance Commerciale (CRM)" />} />
            <Route path="/finances" element={<ComingSoon moduleName="Module Finances & Reporting" />} />
            {/* 404/Page non trouvée */}
            <Route path="*" element={<ComingSoon moduleName="Page non trouvée" />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
