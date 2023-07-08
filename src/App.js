import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { MyProjects } from './pages/myprojects';
import { Skills } from './pages/skills';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  
  const toggleNightMode = () => {
    setIsNightMode(prevIsNightMode =>!prevIsNightMode);
    console.log('isNightMode:', isNightMode);
  };
  
  useEffect(() => {
    console.log('isNightMode:', isNightMode);
  }, [isNightMode]);

  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <HashRouter>
        <Header isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        <main>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/myprojects' element={<MyProjects />} />
            <Route path ='/skills' element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
