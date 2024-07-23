import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { MyProvider } from './MyContext';
import MainBG from './components/Backgrounds/MainBG';
import Footer from './components/Footer/Footer';
import ARTree from './components/Outlets/Home/ARTree';
import DevWeb from './components/Outlets//Home/DevWeb/DevWeb';
import Streaming from './components/Outlets/Home/Streaming/Streaming';
import Entertainer from './components/Outlets/Home/Entertainer/Entertainer';


function App() {
  return (
    <div className="bg-black h-[100dvh] overflow-hidden scroll-m-0">
      <MyProvider>
        <Router>
          <MainBG />
          <div className='px-4'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Navigate to="/devweb" replace  />} />
                <Route path="devweb" element={<DevWeb />} />
                <Route path="streaming" element={<Streaming />} />
                <Route path="entertainer" element={<Entertainer />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </MyProvider>
    </div>
  );
}

export default App;
