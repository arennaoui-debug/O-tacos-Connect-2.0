import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { navModules } from '../data/mockData';

const ModuleNavigation = () => {
  const OtacosLogo = () => (
    <div className="flex items-center justify-center p-4 text-white">
      {/* CORRECTION 1: Remplacement de FaTaco (qui n'existe pas) par une icône sûre, FaTruck. */}
      {/* Note : Vous pouvez aussi essayer FaBurger si vous l'avez, mais FaTruck est plus générique pour un hub. */}
      <FaIcons.FaTruck className="text-otacos-accent text-3xl mr-2" /> 
      <span className="text-xl font-bold">O'Tacos-CONNECT</span>
    </div>
  );

  return (
    <div className="w-64 bg-otacos-blue min-h-screen flex flex-col">
      <OtacosLogo />
      <nav className="flex-grow p-4 space-y-2">
        {navModules.map((item) => {
          // Récupère l'icône par son nom (e.g., 'FaUsers')
          const IconComponent = FaIcons[item.icon]; 
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-otacos-accent text-otacos-blue font-bold shadow-md'
                    : 'text-gray-200 hover:bg-otacos-blue/50 hover:text-white'
                }`
              }
            >
              {/* CORRECTION 2: Vérification de l'existence du composant IconComponent */}
              {IconComponent ? <IconComponent className="w-5 h-5 mr-3" /> : <FaIcons.FaQuestionCircle className="w-5 h-5 mr-3" />}
              
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default ModuleNavigation;
