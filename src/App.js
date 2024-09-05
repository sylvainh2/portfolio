
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Space from './pages/Space';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cv" element={<Cv />}/>
          <Route path="/space" element={<Space />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
