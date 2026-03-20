import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const AlertBanner = ({ type, message }) => {
  if (!message) return null;

  const isWarning = type === 'warning';
  const isFraud = type === 'fraud';

  let config = {
    bg: 'bg-blue-100/80 border-blue-200 text-blue-800',
    icon: <Info className="text-blue-500" size={20} />
  };

  if (isWarning) {
    config = {
      bg: 'bg-yellow-100/90 border-yellow-300 text-yellow-800 shadow-yellow-500/20',
      icon: <AlertTriangle className="text-yellow-600 animate-pulse" size={20} />
    };
  } else if (isFraud) {
    config = {
      bg: 'bg-red-100/90 border-red-300 text-red-800 shadow-red-500/20 animate-shake',
      icon: <AlertTriangle className="text-red-600" size={20} />
    };
  }

  return (
    <div className={`flex items-center gap-3 p-4 mb-6 rounded-xl border shadow-lg backdrop-blur-md transition-all duration-300 animate-fade-in ${config.bg}`}>
      {config.icon}
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default AlertBanner;
