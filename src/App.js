import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Location from './components/location';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Header/>} />        
          <Route path='/about' element={<About/>} />        
          <Route path='/location' element={<Location/>} />        
          
      </Routes>
    </Router>
    </div>
  );
}

export default App;
