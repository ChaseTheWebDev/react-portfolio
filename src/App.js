import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkView from './views/WorkView';
import AboutView from './views/AboutView';
import CertificationsView from './views/CertificationsView';
import PressView from './views/PressView';
import ContactView from './views/ContactView';
import ProjectView from './views/ProjectView';
import ResumeView from './views/ResumeView';
import './App.css';

export default function AppRouter() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <div className='App'>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<WorkView />} />
                        <Route path="/about" element={<AboutView />} />
                        <Route path="/resume" element={<ResumeView />} />
                        <Route path="/certifications" element={<CertificationsView />} />
                        <Route path="/press" element={<PressView />} />
                        <Route path="/contact" element={<ContactView />} />
                        <Route path="/project/:id" element={<ProjectView />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
