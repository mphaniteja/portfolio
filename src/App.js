import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WorkExperience from './pages/WorkExperience';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

function App() {
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/workExperience" element={<WorkExperience/>}></Route>
      <Route path="/achievements" element={<Achievements/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

    </Routes>
  </>
}

export default App;
