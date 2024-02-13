import React, { useEffect, useState } from "react";

import "./InsuranceCalculator.css";



const InsuranceCalculator = () => {

  const [country, setCountry] = useState("");

  const [state, setState] = useState("");

  const [district, setDistrict] = useState("");

  const [taluk, setTaluk] = useState("");

  const [village, setVillage] = useState("");

  const [cropType, setCropType] = useState("");

  const [seasonType, setSeasonType] = useState("");

  const [areaUnderCultivation, setAreaUnderCultivation] = useState("");

  const [insuranceAmount, setInsuranceAmount] = useState(null);

  const [districtoptions, setdistrictoptions] = useState([

    { value: "", name: "Choose District" },

  ]);

  useEffect(() => {

    if (state == "") {

      setdistrictoptions([{ value: "", name: "Choose State" }]);

    }

    if (state == "Tamilnadu") {

      setdistrictoptions([

        { value: "Thirunelveli", name: "Thirunelveli" },

        { value: "Madurai", name: "Madurai" },

        { value: "Kanyakumari", name: "Kanyakumari" },

        { value: "Virudhunagar", name: "Virudhunagar" },

        { value: "Salem", name: "Salem" },

      ]);

    }

    if (state == "Kerala") {

      setdistrictoptions([

        { value: "Thiruvananthapuram", name: "Thiruvananthapuram" },

        { value: "Kollam", name: "Kollam" },

        { value: "Alappuzha", name: "Alappuzha" },

        { value: "Pathanamthitta", name: "Pathanamthitta" },

        { value: "Ernakulam", name: "Ernakulam" },

      ]);

    }

  });

  const handleSubmit = (e) => {

    e.preventDefault();



    // logic

    if (state == "Tamilnadu") {

    }



    const calculatedInsurance = areaUnderCultivation * 10000;



    setInsuranceAmount(calculatedInsurance);



  };



  return (

    <div className="insurance-calculator">

      <h2>Farmer's Insurance Calculator</h2>

      <form onSubmit={handleSubmit}>

        <label>

          Country

          <select value={country} onChange={(e) => setCountry(e.target.value)}>

            <option value="India">India</option>

          </select>

        </label>



        <label>

          State

          <select value={state} onChange={(e) => setState(e.target.value)}>

            <option value="">Choose State</option>

            <option value="Tamilnadu">Tamilnadu</option>

            <option value="Kerala">Kerala</option>

          </select>

        </label>

        <label>

          District

          <select

            value={district}

           

            onChange={(e) => setDistrict(e.target.value)}

           

          >

            <option value="">Choose District</option>

             

            {districtoptions.map((e, key) => {

              return (

                <option key={key} value={e.value}>

                  {e.name}

                </option>

              );

            })}

          </select>

        </label>



        <label>

          Taluk

          <input

            type="text"

            value={taluk}

            onChange={(e) => setTaluk(e.target.value)}

          />

        </label>



        {/* {setTaluk && <p style={{color:'red'}}>{setTaluk}</p>} */}



        <label>

          Village

          <input

            type="text"

            value={village}

            onChange={(e) => setVillage(e.target.value)}

            required

          />

        </label>



        <label>

          Crop type

          <select

            value={cropType}

            onChange={(e) => setCropType(e.target.value)}

          >

            <option value="Crop">Crop</option>

            <option value="Wheat">Wheat</option>

            <option value="Maize">Maize</option>

            <option value="Millet">Millet</option>

            <option value="Tea">Tea</option>

            <option value="Coffee">Coffee</option>

            <option value="Coconut">Coconut</option>

            <option value="Pulses">Pulses</option>

          </select>

        </label>

        <label>

          Season

          <select

            value={seasonType}

            onChange={(e) => setSeasonType(e.target.value)}

          >

            <option value="Kharif">Kharif</option>

            <option value="Rabi">Rabi</option>

          </select>

        </label>



        <label>

          Area Under Cultivation (in acres):

          <input

            type="number"

            value={areaUnderCultivation}

            onChange={(e) => setAreaUnderCultivation(e.target.value)}

            required

          />

        </label>



        <button type="submit">Calculate Insurance</button>

      </form>

      {insuranceAmount !== null && (

        <div className="result">

          <h3>Calculated Insurance Amount: {"Rs:" + insuranceAmount}</h3>

        </div>

      )}

    </div>

  );

};



export default InsuranceCalculator;





