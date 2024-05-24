import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar from './components/navbar'
import  Cart  from './pages/cart/cart'
import Shop from './pages/shop/shop'
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        {/* navbar to be available and seen */}
        <Navbar/>
        <Routes>
          
          {/* Route to our shop */}
          <Route path="/" element = {<Shop/>}/>
          <Route path="/cart" element = {<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    
    </div>
  );
}

export default App;
