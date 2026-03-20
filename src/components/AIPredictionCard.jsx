import React from 'react';
import { BrainCircuit, TrendingUp } from 'lucide-react';

const AIPredictionCard = ({ riskScore }) => {
  // Determine text based on score
  let predictionText = "Stable conditions expected. No major disruptions.";
  let suggestedPremium = "₹120/week";
  let statusColor = "text-emerald-500";
  let bgStatus = "bg-emerald-50";

  if (riskScore > 75) {
    predictionText = "High probability of heavy rain tomorrow 🌧️. Adjusting risk premium.";
    suggestedPremium = "₹250/week";
    statusColor = "text-red-500";
    bgStatus = "bg-red-50";
  } else if (riskScore > 40) {
    predictionText = "Moderate strike risks detected in regional areas 📉.";
    suggestedPremium = "₹180/week";
    statusColor = "text-yellow-500";
    bgStatus = "bg-yellow-50";
  }

  return (
    <div className="glass-card overflow-hidden">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-5 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-blue-300 animate-pulse-slow" />
          <h3 className="font-semibold text-lg">AI Risk Prediction</h3>
        </div>
        <div className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
          Live Sync
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-end gap-4 mb-6">
          <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {riskScore}%
          </div>
          <div className="text-gray-500 pb-1">Current Risk Level</div>
        </div>

        <div className={`p-4 rounded-xl border border-dashed text-sm font-medium mb-6 ${bgStatus} ${statusColor}`}>
          {predictionText}
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-gray-500 text-sm flex items-center gap-1">
            <TrendingUp size={16} /> Suggested Premium
          </div>
          <div className="font-bold text-gray-800">{suggestedPremium}</div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictionCard;
