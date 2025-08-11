
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import StoryPage from './pages/StoryPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story" element={<StoryPage />} /> {/* ini untuk halaman baru */}
                </Routes>
        </Router>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
