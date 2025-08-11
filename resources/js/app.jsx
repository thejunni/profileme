
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from './pages/Home';

// export default function App() {
//     return (
//         <div>
//             <Home />
//         </div>
//     );
// }

// // Pastikan elemen #app ada di Blade template, misalnya di app.blade.php
// const rootElement = document.getElementById('app');
// if (rootElement) {
//     const root = ReactDOM.createRoot(rootElement);
//     root.render(<App />);
// }
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
