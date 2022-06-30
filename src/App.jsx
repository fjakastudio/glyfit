import './App.css';
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage/Homepage'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
