import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Overview from './pages/Overview/Overview';
import NavigationMenu from './components/Navigation/NavigationMenu';
import { BasketProvider } from './pages/Baskets/BasketContext';
import Basket from './pages/Baskets/Basket';

function App() {

    return (
      <BasketProvider>
        <Router>
            <div className="app">
                <Header/>
                <NavigationMenu isActive={true} /> 
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/overview" element={<Overview />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        </BasketProvider>

    );
}

export default App;
