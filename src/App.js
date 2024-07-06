import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { MyProvider } from './MyContext';
import MainBG from './components/Backgrounds/MainBG';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-black h-[100dvh] overflow-hidden scroll-m-0">
      <MyProvider>
        <Router>
          <MainBG />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </MyProvider>
    </div>
  );
}

export default App;
