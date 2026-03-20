import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null); // { name, city, hours, riskScore, premium }

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[100px]"></div>
      </div>

      <Navbar user={user} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8 pt-24 max-w-6xl animate-fade-in">
        {!user ? (
          <Onboarding onComplete={(userData) => setUser(userData)} />
        ) : (
          <Dashboard user={user} />
        )}
      </main>
    </div>
  );
}

export default App;
