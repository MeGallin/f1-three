import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/Footer/FooterComponent';
import HeaderComponent from './Components/Header/HeaderComponent';

const HomeView = lazy(() => import('./Views/Home/HomeView'));
const AboutView = lazy(() => import('./Views/About/AboutView'));
const RoundView = lazy(() => import('./Views/Round/RoundView'));

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <Suspense fallback={<span aria-busy="true">...loading</span>}>
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
              <Route path="/about" element={<AboutView />} exact />
              <Route path="/round" element={<RoundView />} exact />
            </Routes>
          </div>
        </Suspense>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
