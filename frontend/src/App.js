
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Register/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
