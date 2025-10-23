import React from 'react';
import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';

const KpiCard = ({ title, value, change, trend, goal, color }) => {
  let TrendIcon;
  let trendColor;

  switch (trend) {
    case 'up':
      TrendIcon = FaArrowUp;
      trendColor = 'text-green-500';
      break;
    case 'down':
      TrendIcon = FaArrowDown;
      trendColor = 'text-red-500';
      break;
    case 'warning':
      TrendIcon = FaMinus;
      trendColor = 'text-yellow-500';
      break;
    default:
      TrendIcon = FaMinus;
      trendColor = 'text-gray-500';
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4" style={{ borderColor: color }}>
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <div className={`flex items-center text-sm font-semibold ${trendColor}`}>
          <TrendIcon className="w-3 h-3 mr-1" />
          {change}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-1">Objectif: {goal}</p>
    </div>
  );
};

export default KpiCard;
