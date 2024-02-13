import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavComponent from './Component/NavComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplyInsurance from './Component/ApplyInsurance';
import InsuranceCalculator from './Component/InsuranceCalculator';
import InsuranceClaim from './Component/InsuranceClaim';
import InsuranceDetails from './Component/InsuranceDetails';
import Insurance from './Component/Insurance';
function App() {
  return (
    <>
      <NavComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/apply-insurance' element={<ApplyInsurance />} />
          <Route path='/insurance-details' element={<InsuranceDetails />} />
          <Route path='/claim-insurance/:id' element={<InsuranceClaim />} />
          <Route path='/calculate-insurance' element={<InsuranceCalculator />} />
          <Route path='/insurance' element={<Insurance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
