# InsurNova ⚡

An AI-powered parametric insurance platform tailored specifically for gig workers. This prototype demonstrates a fully interactive, automated claim processing simulation utilizing a premium, glassmorphism-styled React interface.

## 🌟 Features

- **AI Risk Assessment**: Generates dynamic risk scores and policy premiums during user onboarding based on operating hours and locations.
- **Dynamic Auto-Claims**: Simulates parametric environmental disruptions (Heavy Rain, Floods, Strikes) triggering a multi-stage smart-contract verification and automatic payout sequence.
- **Live Analytics (Recharts)**: Seamlessly animates coverage utilization and total protected earnings via a dynamic Recharts `AreaChart` that mathematically increments live after every verified payout.
- **Fraud Prevention Mock**: Implements an interactive flag system that intelligently halts simulation abuse and requires manual resets.
- **Modern Fintech UI**: Built entirely with Tailwind CSS using fluid animations (`slide-up`, `fade-in`, pulsing steps), glass cards (`backdrop-blur`), and beautiful `lucide-react` iconography.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 (JSX)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Madhesh-2907/InsurNova.git
   cd InsurNova
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to the port provided by Vite (typically `http://localhost:3000` or `http://localhost:5173`).

## 💡 Usage Highlights
- **Onboarding**: Enter mock data to generate your personalized coverage dashboard.
- **Triggering Claims**: Click *Heavy Rain*, *Flood*, or *Strike* to watch the intelligent AI verification system process the claim step-by-step.
- **Analytics Sync**: Watch the `Earnings Protected Chart` instantly react and increment as claim payouts successfully hit the registered account!

## 📝 License
This project is for demonstration purposes.
