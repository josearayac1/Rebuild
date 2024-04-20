import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login.js';
import HomePage from './Pages/Home/Home.js';
//import Layout from './Pages/Layout/Layout.js';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}
export default App;
