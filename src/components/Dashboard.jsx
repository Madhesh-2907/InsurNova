import React, { useState, useRef, useEffect } from 'react';
import StatCard from './StatCard';
import AIPredictionCard from './AIPredictionCard';
import SimulationPanel from './SimulationPanel';
import ClaimTimeline from './ClaimTimeline';
import Analytics from './Analytics';
import AlertBanner from './AlertBanner';
import { IndianRupee, Activity, Shield, TrendingUp, RefreshCw } from 'lucide-react';

const Dashboard = ({ user }) => {
  const maxCoverage = 25000;
  const maxClaims = 3;
  const payoutAmount = 850;

  const [activeClaim, setActiveClaim] = useState(null); // { event, step }
  const [clickCount, setClickCount] = useState(0);
  const [alert, setAlert] = useState(null); // { type, message }
  
  // Dynamic metrics state
  const [totalPayouts, setTotalPayouts] = useState(12450);
  const [claimsUsed, setClaimsUsed] = useState(1);
  
  // Dynamic Charting dataset
  const [chartData, setChartData] = useState([
    { name: 'Mon', earnings: 4500 },
    { name: 'Tue', earnings: 7200 },
    { name: 'Wed', earnings: 5100 },
    { name: 'Thu', earnings: 9800 },
    { name: 'Fri', earnings: 8400 },
    { name: 'Today', earnings: 12450 } 
  ]);

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const resetSimulation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveClaim(null);
    setAlert(null);
    setClickCount(0);

    // Hard reset for continuous simulation demo loop if max claims hit
    if (claimsUsed >= maxClaims) {
      setClaimsUsed(1);
      setTotalPayouts(12450);
      setChartData([
        { name: 'Mon', earnings: 4500 },
        { name: 'Tue', earnings: 7200 },
        { name: 'Wed', earnings: 5100 },
        { name: 'Thu', earnings: 9800 },
        { name: 'Fri', earnings: 8400 },
        { name: 'Today', earnings: 12450 } 
      ]);
    }
  };

  const handleSimulate = (event) => {
    if (activeClaim && activeClaim.step < 5) return;

    if (claimsUsed >= maxClaims) {
      setAlert({ type: 'warning', message: 'Maximum claims reached for this period. No active coverage remaining.' });
      return;
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount > 3) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setActiveClaim(null); 
      setAlert({ 
        type: 'fraud', 
        message: '⚠ Suspicious activity detected. Account flagged for review. Please reset simulation.' 
      });
      return;
    }

    if (intervalRef.current) clearInterval(intervalRef.current);
    
    setAlert({ type: 'warning', message: `⚡ LIVE: ${event.name} detected → Auto claim processing started` });
    
    let currentStep = 1;
    setActiveClaim({ event, step: currentStep });

    intervalRef.current = setInterval(() => {
      currentStep++;
      if (currentStep <= 5) {
        setActiveClaim(prev => ({ ...prev, step: currentStep }));
      }
      
      if (currentStep === 5) {
        clearInterval(intervalRef.current);
        
        // Dynamically boost numbers and chart payloads
        setTotalPayouts(prev => prev + payoutAmount);
        setClaimsUsed(prev => prev + 1);
        setChartData(prev => {
          const newData = [...prev];
          newData[newData.length - 1] = { 
            ...newData[newData.length - 1], 
            earnings: newData[newData.length - 1].earnings + payoutAmount 
          };
          return newData;
        });

        setTimeout(() => setAlert(null), 3500);
      }
    }, 1500); 
  };

  return (
    <div className="space-y-6">
      <AlertBanner type={alert?.type} message={alert?.message} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Weekly Premium" value={`₹${user.premium}`} icon={<IndianRupee />} gradient="from-blue-500 to-indigo-500" />
        <StatCard title="Risk Level" value={user.riskScore > 70 ? 'High' : user.riskScore > 40 ? 'Medium' : 'Low'} icon={<TrendingUp />} gradient={user.riskScore > 70 ? 'from-red-500 to-rose-500' : 'from-emerald-500 to-teal-500'} />
        <StatCard title="Active Coverage" value={`₹${maxCoverage.toLocaleString()}`} icon={<Shield />} gradient="from-purple-500 to-pink-500" />
        <StatCard title="Earnings Protected" value={`₹${totalPayouts.toLocaleString()}`} icon={<Activity />} gradient="from-cyan-500 to-blue-500" change="+12%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AIPredictionCard riskScore={user.riskScore} />
          <SimulationPanel onSimulate={handleSimulate} isSimulating={activeClaim && activeClaim.step < 5} />
          <Analytics 
             totalPayouts={totalPayouts} 
             maxCoverage={maxCoverage} 
             claimsUsed={claimsUsed} 
             maxClaims={maxClaims} 
             chartData={chartData}
          />
        </div>
        
        <div className="lg:col-span-1 border-l border-white/40 pl-0 lg:pl-6 h-full flex flex-col">
           {activeClaim ? (
             <div className="animate-fade-in flex flex-col h-full">
               <ClaimTimeline activeClaim={activeClaim} payoutAmount={payoutAmount} />
               {activeClaim.step >= 5 && (
                 <div className="mt-6 flex justify-center">
                   <button 
                     onClick={resetSimulation}
                     className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-semibold group"
                   >
                     <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                     {claimsUsed >= maxClaims ? 'Reset Demo Engine' : 'Try Again'}
                   </button>
                 </div>
               )}
             </div>
           ) : (
             <div className="glass-panel p-8 text-center text-gray-500 flex flex-col items-center justify-center min-h-[400px] border-dashed">
               <Shield size={64} className="mb-6 text-gray-300 stroke-1" />
               <p className="font-semibold text-lg text-gray-600 mb-2">Monitoring Disruptions</p>
               <p className="text-sm mb-6">Trigger an event to see AI claim processing in real-time.</p>
               {clickCount > 0 && (
                 <button 
                  onClick={resetSimulation}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                 >
                   <RefreshCw size={14} /> Clear System Flags
                 </button>
               )}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
