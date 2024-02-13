import React from 'react'
import { useState } from 'react';
function InsuranceCalculator() {
    const [country, setCountry] = useState('');

     const [state, setState] = useState('');
   
     const [district, setDistrict] = useState('');
   
     const [taluk, setTaluk] = useState('');
   
     const [village, setVillage] = useState('');
   
     const [cropType, setCropType] = useState('');
   
     const [seasonType, setSeasonType] = useState('');
   
     const [areaUnderCultivation, setAreaUnderCultivation] = useState(0);
   
     const [insuranceAmount, setInsuranceAmount] = useState(0);
   
   
   
     // Function to handle the calculation based on your logic
   
     const calculateInsurance = () => {
   
    // Implement your insurance calculation logic here
   
       // You can use the provided fields to calculate the insurance amount
   
       // For simplicity, let's say it's a basic formula like area * cropTypeCoefficient * seasonTypeCoefficient
   
       const cropTypeCoefficient = 1.5; // Replace with your coefficients
   
       const seasonTypeCoefficient = 1.2; // Replace with your coefficients
   
       const calculatedInsurance = areaUnderCultivation * cropTypeCoefficient * seasonTypeCoefficient;
   
   
   
       setInsuranceAmount(calculatedInsurance);
   
     };
   
   
   
     return (
   
       <div>
   
         {/* Your dropdowns and input fields */}
   
         <label>
   
           Country:
   
           <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
   
         </label>
   
         {/* Repeat the above structure for other fields like state, district, etc. */}
   
   
   
         {/* Crop Type Dropdown */}
   
         <label>
   
           Crop Type:
   
           <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
   
             <option value="wheat">Wheat</option>
   
             <option value="rice">Rice</option>
   
             {/* Add other crop types as needed */}
   
           </select>
   
         </label>
   
   
   
         {/* Season Type Dropdown */}
   
         <label>
   
           Season Type:
   
           <select value={seasonType} onChange={(e) => setSeasonType(e.target.value)}>
   
             <option value="summer">Summer</option>
   
             <option value="winter">Winter</option>
   
             {/* Add other season types as needed */}
   
           </select>
   
         </label>
   
   
   
         {/* Area Under Cultivation Input */}
   
         <label>
   
           Area Under Cultivation:
   
           <input
   
             type="number"
   
             value={areaUnderCultivation}
   
             onChange={(e) => setAreaUnderCultivation(e.target.value)}
   
           />
   
         </label>
   
   
   
         {/* Button to trigger the calculation */}
   
         <button onClick={calculateInsurance}>Calculate Insurance</button>
   
   
   
         {/* Display the calculated insurance amount */}
   
         <p>Insurance Amount: {insuranceAmount}</p>
   
       </div>
   
     );
   
}

export default InsuranceCalculator