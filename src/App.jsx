import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AnalyticsTracker from './components/AnalyticsTracker';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import DoctorProfile from './pages/DoctorProfile';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import CityLocationLayout from './pages/CityLocationLayout';
import ServiceCityLayout from './pages/ServiceCityLayout';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './index.css';

const NotFound = () => <div className="section container text-center"><h1>404 - Not Found</h1></div>;

const App = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:city" element={<CityLocationLayout />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceName" element={<ServiceDetail />} />
            <Route path="/services/:serviceName/:city" element={<ServiceCityLayout />} />

            <Route path="/doctors/:doctorName" element={<DoctorProfile />} />

            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:blogId" element={<BlogPost />} />

            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<Navigate to="/locations" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
