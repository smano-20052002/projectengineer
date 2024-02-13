import React, { useState, useEffect } from 'react';

import axios from "axios";

import { Link, useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";





const InsuranceClaim = () => {



  const [insurancedata, setinsuranceData] = useState([])

  const { id } = useParams();

  useEffect(() => {

    axios.get('http://localhost:3001/insurance/' + id)

      .then(res => setinsuranceData(res.data))

      .catch(err => console.log(err));

  }, [])

  const [selectedfile, setselectedfile] = useState('');





  const filechange = (event) => {

    setselectedfile(event.target.files[0]);

  }





  const handleupload = () => {

    if (selectedfile) {

      const fileType = selectedfile.type;

      const validFileTypes = ['application/pdf', 'image/jpeg', 'image/jpg'];



      if (validFileTypes.includes(fileType)) {

        const reader = new FileReader();



        reader.readAsDataURL(selectedfile);

        reader.onload = () => {

          const filedata = reader.result;

          localStorage.setItem('uploadFile', filedata);



          alert('File uploaded successfully!');

        };

        reader.onerror = () => {

          console.error('Error reading the file.');

          alert('Error uploading in the File.!')

        };

      } else {

        alert('Please Select a valid file to upload. Only pdf and jpg format are allowed.');

      }

    } else {

      alert('Please Select a file to upload')

    }

  }







  const downloadFile = (filename, fileData) => {

    const element = document.createElement('a');

    element.setAttribute('href', fileData);

    element.setAttribute('download', filename);

    element.style.display = 'none';

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

  };





  return (

    <div >

      <>

        <nav class="navbar navbar-dark bg-dark" style={{ height: 80 }}>

          <h1 style={{ color: 'whitesmoke', marginLeft: 30 }}>NECESSARY DOCUMENT </h1>

        </nav>



        <div class="card" style={{ marginTop: 50 }}>

          <div className='container-fluid'>

            <li type="square"><span className='text-capitalize'>id</span>-{insurancedata.id}</li>

            <li type="square"><span className='text-capitalize'>farmer name</span>-{insurancedata.farmername}</li>

            <li type="square"><span className='text-capitalize'>aadhaar number</span> -{insurancedata.aadhaarnumber}</li>

            <li type="square"><span className='text-capitalize'>scheme</span>-{insurancedata.scheme}</li>

            <li type="square"><span className='text-capitalize'>croptype</span>-{insurancedata.croptype}</li>

            <li type="square"><span className='text-capitalize'>cultivated area</span>-{insurancedata.cultivatedarea}</li>

            <li type="square"><span className='text-capitalize'>gross amount</span>-{insurancedata.grossamount}</li>

            <li type="square"><span className='text-capitalize'>account number</span>-{insurancedata.accountnumber}</li>

            <li type="square"><span className='text-capitalize'>bank name</span>-{insurancedata.bankname}</li>

            <li type="square"><span className='text-capitalize'>branch</span>-{insurancedata.branch}</li>

            <li type="square"><span className='text-capitalize'>ifsc code</span>-{insurancedata.ifsccode}</li>

          </div>

          <div class="card-header">

            Please Upload the Necessary Document

          </div>

          <div class="card-body">

            <br>

            </br>

            <input type='file' onChange={filechange}></input>

            <br></br>

            <button type="submit" className='btn btn-success' style={{ marginTop: 30 }} onClick={handleupload}>Upload</button>



            <button type='download' className='btn btn-primary' style={{ marginTop: 30, marginLeft: 30 }} onClick={downloadFile}>Dowload</button>



          </div>

        </div>

        <button className='btn btn-primary' onClick={() => alert('Claim Now clicked for row ' + (insurancedata.id))}>Claim Now</button>



      </>



    </div>

  )

}



export default InsuranceClaim