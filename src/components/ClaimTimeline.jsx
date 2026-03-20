import React from 'react';
import { Loader2, CheckCircle2, IndianRupee, BellRing, Target } from 'lucide-react';

const ClaimTimeline = ({ activeClaim, payoutAmount = 850 }) => {
  if (!activeClaim) return null;

  const steps = [
    { id: 1, title: 'Disruption Detected', desc: 'AI verified the event parameters.', icon: (props) => <BellRing {...props} /> },
    { id: 2, title: 'AI Processing', desc: 'Calculating policy coverage & risk.', icon: (props) => <Loader2 {...props} className={`${props.className} ${activeClaim.step === 2 ? "animate-spin" : ""}`} /> },
    { id: 3, title: 'Claim Approved', desc: 'Smart contract executed perfectly.', icon: (props) => <CheckCircle2 {...props} /> },
    { id: 4, title: 'Funds Credited', desc: '₹ credited to bank instantly.', icon: (props) => <IndianRupee {...props} /> },
  ];

  return (
    <div className="glass-card p-6 animate-slide-up h-full flex flex-col">
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          ⚡ Auto Claim Processing
        </h3>
        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm text-xs px-3 py-1.5 rounded-full font-semibold">
          {activeClaim.event.name} Event
        </span>
      </div>

      <div className="relative flex-grow mt-2">
        <div className="space-y-0 relative">
          {steps.map((step, index) => {
            const isCompleted = activeClaim.step > step.id;
            const isActive = activeClaim.step === step.id;
            
            let circleColor = 'bg-gray-100 text-gray-400 border-2 border-white';
            if (isCompleted) circleColor = 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 border-2 border-emerald-400 scale-105';
            else if (isActive) circleColor = 'bg-blue-600 text-white shadow-xl shadow-blue-500/40 border-2 border-blue-400 scale-110 animate-pulse';

            return (
              <div key={step.id} className="relative flex items-start gap-5 pb-8 last:pb-0 group">
                
                {/* Connecting proper line segment per step */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[22px] top-11 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden">
                    <div className={`w-full bg-blue-500 transition-all duration-700 ease-out origin-top ${isCompleted ? 'h-full' : 'h-0'}`} />
                  </div>
                )}
                
                <div className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-out ${circleColor}`}>
                  <step.icon size={20} className={isActive ? "" : ""} />
                </div>
                
                <div className={`mt-0.5 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-1' : isCompleted ? 'opacity-100' : 'opacity-40'}`}>
                  <h4 className={`text-base font-bold transition-colors duration-300 ${isActive ? 'text-blue-700' : isCompleted ? 'text-gray-800' : 'text-gray-500'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Success Banner */}
      <div className={`mt-8 overflow-hidden transition-all duration-500 ease-out ${activeClaim.step > 4 ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 flex-shrink translate-y-4'}`}>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-emerald-500/20 mix-blend-multiply">
            <Target size={100} />
          </div>
          <div className="relative z-10 flex flex-col gap-1 text-emerald-800">
            <span className="flex items-center gap-2 font-bold text-lg"><CheckCircle2 className="text-emerald-500 animate-pulse" /> Payout Success!</span>
            <span className="text-sm font-medium text-emerald-700 leading-snug">₹{payoutAmount.toLocaleString()} successfully credited to your registered bank account.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimTimeline;
