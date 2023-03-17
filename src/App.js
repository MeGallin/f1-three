import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/Footer/FooterComponent';
import HeaderComponent from './Components/Header/HeaderComponent';

const HomeView = lazy(() => import('./Views/Home/HomeView'));
const RoundView = lazy(() => import('./Views/Round/RoundView'));
const CalendarView = lazy(() => import('./Views/Calendar/CalendarView'));
const DriversView = lazy(() => import('./Views/Drivers/DriversView'));
const Teams = lazy(() => import('./Views/Teams/TeamsView'));

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <Suspense fallback={<span aria-busy="true">...loading</span>}>
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
              <Route path="/calendar" element={<CalendarView />} exact />
              <Route path="/drivers" element={<DriversView />} exact />
              <Route path="/teams" element={<Teams />} exact />
              <Route path="/round/:location" element={<RoundView />} />
            </Routes>
          </div>
        </Suspense>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
