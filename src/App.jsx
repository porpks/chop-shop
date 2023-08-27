import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop.jsx'
import ViewProduct from './pages/ViewProduct.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/product/:productId" element={<ViewProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
