import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Style/InsuranceDetails.css'
function InsuranceDetails() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/insurance')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div className='container-fluid'>
      <div>InsuranceDetails</div>
      <table className='my-table'>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Farmer Name</th>
            <th>Aadhar Number</th>
            <th>Insurance Scheme</th>
            <th>Crop Type</th>
            <th>Cultivated Area</th>
            <th>Gross Amount</th>
            <th>Savings Account Number</th>
            <th>Bank Name</th>
            <th>Branch Name</th>
            <th>IFSC</th>
            <th>Claim Now</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.farmername}</td>
              <td>{row.aadhaarnumber}</td>
              <td>{row.scheme}</td>
              <td>{row.croptype}</td>
              <td>{row.cultivatedarea}</td>
              <td>{row.grossamount}</td>
              <td>{row.accountnumber}</td>
              <td>{row.bankname}</td>
              <td>{row.branch}</td>
              <td>{row.ifsccode}</td>
              <td>
                <button className='btn btn-primary' onClick={() => alert('Claim Now clicked for row ' + (row.id))}>Claim Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InsuranceDetails