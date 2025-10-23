import React from 'react';
import KpiCard from '../components/KpiCard';
import { kpiData, alertsData } from '../data/mockData';
import { FaBell, FaShoppingCart, FaUtensils, FaUsers, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  return (
import React from 'react';
import KpiCard from '../components/KpiCard';
import { kpiData, alertsData } from '../data/mockData';
import { FaBell, FaShoppingCart, FaUtensils, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-extrabold text-otacos-blue mb-6">
        Tableau de Bord Global : L'Excellence Opérationnelle
      </h1>
      
      {/* KPI CLÉS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </div>

      {/* ALERTES ET NON-CONFORMITÉS */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-inner mb-8">
        <h2 className="flex items-center text-xl font-semibold text-red-700 mb-3">
          <FaBell className="mr-2 text-2xl" /> Alertes et Actions Critiques
        </h2>
        <ul className="list-disc list-inside space-y-2 text-red-600">
          {alertsData.map((alert, index) => (
            <li key={index} className="flex items-start">
              <span className="font-medium mr-2 text-red-800">•</span> {alert}
              <button className="ml-4 text-sm text-otacos-blue hover:text-otacos-accent font-bold underline">
                (Voir/Résoudre)
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* GRAPHIQUES ET ANALYSES SIMULÉES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="flex items-center text-xl font-semibold text-gray-700 mb-4">
            <FaShoppingCart className="mr-2" /> Performance Commerciale vs Objectif
          </h3>
          <p className="text-gray-500 h-40 flex items-center justify-center border border-dashed rounded-lg">
            [Zone pour le graphique des Ventes Horaires]
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="flex items-center text-xl font-semibold text-gray-700 mb-4">
            <FaUsers className="mr-2" /> Productivité et RH
          </h3>
          <p className="text-gray-500 h-40 flex items-center justify-center border border-dashed rounded-lg">
            [Widget Productivité Horaire et Taux d'Absentéisme]
          </p>
        </div>
        
        <div className="col-span-1 lg:col-span-3 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="flex items-center text-xl font-semibold text-gray-700 mb-4">
            <FaUtensils className="mr-2" /> Coût Matière Première (CMP) et Déchet
          </h3>
          <p className="text-gray-500 h-40 flex items-center justify-center border border-dashed rounded-lg">
            [Graphique Suivi CMP vs Objectif et Taux de Déchet (Shrinkage)]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
