
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import CartProvider from './data/CartProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:token' element={<Menu />} />
            <Route path='/:token' element={<Home />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
