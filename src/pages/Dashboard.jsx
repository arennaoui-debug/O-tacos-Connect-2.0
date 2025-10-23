import React from 'react'; // Doit être en premier
import KpiCard from '../components/KpiCard'; // Doit être en premier
import { kpiData, alertsData } from '../data/mockData';
import { FaBell, FaShoppingCart, FaUtensils, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-8 w-full">
      {/* ... Reste du code du Dashboard ... */}
      <h1 className="text-3xl font-extrabold text-otacos-blue mb-6">
        Tableau de Bord Global : L'Excellence Opérationnelle
      </h1>
      
      {/* KPI CLÉS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </div>

      {/* ... Reste du code, qui est correct ... */}
    </div>
  );
};

export default Dashboard;

