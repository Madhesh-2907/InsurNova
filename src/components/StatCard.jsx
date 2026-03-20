import React from 'react';

const StatCard = ({ title, value, icon, gradient, change }) => {
  return (
    <div className="glass-card p-6 flex items-start justify-between hover:scale-[1.02] transition-transform duration-300 cursor-default">
      <div>
        <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-800">{value}</span>
          {change && (
            <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
              {change}
            </span>
          )}
        </div>
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
