import './App.css';
import { Routes, Route } from 'react-router-dom';
import Doctor from './Components/Doctor/Doctor';
import Login from './Components/Login/Login';
import Patient from './Components/Patient/Patient';

function App() {
  return (
    <Routes>
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<Patient />} />
    </Routes>
  );
}

export default App;