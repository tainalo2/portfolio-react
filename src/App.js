import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { MyProvider } from './MyContext';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <MyProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MyProvider>
    </div>
  );
}

export default App;
