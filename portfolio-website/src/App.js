import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
