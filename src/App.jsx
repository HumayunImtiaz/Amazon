import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import  Data  from './components/Data';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Footter from './pages/Footter';
import './App.css'
import "./index.css"

function App() {
  return (
    
    <Router>

      <Navbar/>           
     
      <Routes>
        
        
        <Route path="/Home" element={<Home/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footter/>
    </Router>
    
  );
}

export default App;
