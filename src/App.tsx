import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TextEditor from './components/TextEditor';
import Spreadsheet from './components/Spreadsheet';
import Presentation from './components/Presentation';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/word" element={<TextEditor />} />
            <Route path="/excel" element={<Spreadsheet />} />
            <Route path="/ppt" element={<Presentation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 