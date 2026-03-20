import React from 'react';
import { Target, Activity, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = ({ totalPayouts, maxCoverage, claimsUsed, maxClaims, chartData }) => {
  const coveragePercent = Math.min(((totalPayouts / maxCoverage) * 100).toFixed(1), 100);
  const claimsPercent = Math.min(((claimsUsed / maxClaims) * 100).toFixed(1), 100);

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Activity className="text-purple-500" /> Platform Analytics
      </h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-600 flex items-center gap-1"><ShieldCheck size={16}/> Coverage Used</span>
            <span className="font-bold text-gray-800">{coveragePercent}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${coveragePercent}%` }} />
          </div>
        </div>

        <div>
           <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-600 flex items-center gap-1"><Target size={16}/> Total Claims Limit</span>
            <span className="font-bold text-gray-800">{claimsUsed} / {maxClaims} Claims</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${claimsPercent}%` }} />
          </div>
        </div>

        <div className="pt-4 border-t mt-6">
          <p className="text-xs text-gray-500 text-center uppercase tracking-wider font-semibold mb-4 text-left">Earnings Protected Chart</p>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 600 }} dy={10} />
                <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #f3f4f6', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.9)' }}
                  itemStyle={{ color: '#1f2937', fontWeight: 700 }}
                  labelStyle={{ color: '#6b7280', fontWeight: 600, marginBottom: '4px' }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Protected']}
                  cursor={{ stroke: '#9ca3af', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="earnings" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorEarnings)" 
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
