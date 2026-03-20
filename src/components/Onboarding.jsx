import React, { useState } from 'react';
import { ArrowRight, Activity, MapPin, Clock, User } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
  const [formData, setFormData] = useState({ name: '', city: '', hours: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate AI risk calculation
    setTimeout(() => {
      const computedRisk = Math.floor(Math.random() * 80) + 10; // 10-90
      const basePremium = 50;
      const hourlyFactor = parseInt(formData.hours || 0) * 1.5;
      const riskFactor = computedRisk * 0.8;
      const premium = Math.round(basePremium + hourlyFactor + riskFactor);

      onComplete({
        ...formData,
        riskScore: computedRisk,
        premium: premium
      });
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="max-w-lg mx-auto transform translate-y-10">
      <div className="glass-card p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative flair */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-300 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-[80px] opacity-60"></div>

        <div className="inline-flex bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-3xl mb-6 relative z-10 shadow-sm border border-white/50">
          <Activity className="text-blue-600" size={36} />
        </div>
        
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-2 relative z-10">
          Verify Your Profile
        </h2>
        <p className="text-gray-500 mb-10 relative z-10 font-medium">AI-powered parametric insurance tailored for your gigs.</p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder-gray-400 font-medium text-gray-800 shadow-sm hover:border-gray-300" placeholder="e.g. Rahul Sharma" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Operating City</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input required type="text" name="city" value={formData.city} onChange={handleChange} 
                className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder-gray-400 font-medium text-gray-800 shadow-sm hover:border-gray-300" placeholder="e.g. Bangalore" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Weekly Working Hours</label>
            <div className="relative group">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input required type="number" name="hours" value={formData.hours} onChange={handleChange} min="1" max="100"
                className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder-gray-400 font-medium text-gray-800 shadow-sm hover:border-gray-300" placeholder="e.g. 45" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-wait disabled:hover:translate-y-0"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2"><Activity className="animate-pulse" size={20} /> Analyzing AI Risk...</span>
            ) : (
              <span className="flex items-center gap-2">Generate Coverage <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" /></span>
            )} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
