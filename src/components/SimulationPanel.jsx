import React from 'react';
import { CloudRain, Waves, AlertOctagon } from 'lucide-react';

const SimulationPanel = ({ onSimulate, isSimulating }) => {
  const events = [
    { id: 'rain', name: 'Heavy Rain', icon: <CloudRain size={24} />, color: 'from-blue-400 to-blue-600' },
    { id: 'flood', name: 'Flood', icon: <Waves size={24} />, color: 'from-cyan-400 to-cyan-600' },
    { id: 'strike', name: 'Strike', icon: <AlertOctagon size={24} />, color: 'from-red-400 to-red-600' },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Trigger Disruptions</h3>
      <p className="text-sm text-gray-500 mb-6">Simulate real-world events to see automatic claim execution in action.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onSimulate(event)}
            disabled={isSimulating}
            className={`relative overflow-hidden group rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300
              ${isSimulating ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 border border-gray-100'}`}
          >
            <div className={`p-3 rounded-full bg-gradient-to-br ${event.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
              {event.icon}
            </div>
            <span className="font-semibold text-gray-700">{event.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimulationPanel;
