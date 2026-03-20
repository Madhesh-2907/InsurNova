import React from 'react';
import { Shield, UserCircle2, LogOut } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-x-0 border-t-0 shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white">
            <Shield size={24} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
            InsurNova
          </span>
        </div>
        
        {user && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white/50 px-4 py-2 rounded-full border border-gray-100">
              <div className="flex flex-col text-right">
                <span className="text-sm font-semibold text-gray-800">{user.name}</span>
                <span className="text-xs text-gray-500">{user.city}</span>
              </div>
              <UserCircle2 className="text-gray-400" size={32} />
            </div>
            
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-colors border border-red-100 group"
              title="Logout"
            >
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
