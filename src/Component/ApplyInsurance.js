import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import '../Style/ApplyInsurance.css';
import axios from 'axios';
function ApplyInsurance() {
    const [newInsurance, setNewInsurance] = useState({ farmername: '', aadhaarnumber: '', scheme: '', croptype: '', cultivatedarea: '', grossamount: '', accountnumber: '', bankname: '', branch: '', ifsccode: '' });
    const farmernameref = useRef();
    const farmernamecharref = useRef();
    const aadhaarnumberref = useRef();
    const aadhaarnumbernumref = useRef();
    const schemeref = useRef();
    const croptyperef = useRef();
    const cultivatedarearef = useRef();
    const grossamountref = useRef();
    const accountnumbernumref = useRef();
    const accountnumberref = useRef();
    const banknameref = useRef();
    const branchref = useRef();
    const ifscref = useRef();
    const ifscvalref = useRef();
    const assureref = useRef();
    let regex = /^[a-zA-Z]+$/;
    const [insurance, setInsurance] = useState([]);
    const [assure, setAssure] = useState(false);
    const addmsg = useRef();
    useEffect(() => {
        if(newInsurance.bankname==''){
            setBranchData([{ value: '', name: 'Choose Bank' } ])
        }
        if(newInsurance.bankname=='State Bank of India'){
            setIfscauto("SBI");
            setBranchData([{ value: 'Viruthunagar', name: 'Viruthunagar' },{value: 'Chennai', name: 'Chennai'} ])
        }
        if(newInsurance.bankname=='HDFC'){
            setIfscauto("HDFC");
            setBranchData([{ value: 'Viruthunagar', name: 'Viruthunagar' },{value: 'Chennai', name: 'Chennai'},{ value: 'Tirunelveli', name: 'Tirunelveli' } ])
        }
        if(newInsurance.bankname=='ICIC'){
            setIfscauto("ICIC");
            setBranchData([{ value: 'Viruthunagar', name: 'Viruthunagar' },{value: 'Chennai', name: 'Chennai'},{ value: 'Tirunelveli', name: 'Tirunelveli' },{value: 'Tenkasi', name: 'Tenkasi'}  ])
        }
        if(newInsurance.bankname=='Axis Bank'){
            setIfscauto("AXIS");
            setBranchData([{ value: 'Viruthunagar', name: 'Viruthunagar' },{value: 'Chennai', name: 'Chennai'}  ])
        }
        if(newInsurance.bankname=='Canara Bank'){
            setBranchData([{ value: 'Viruthunagar', name: 'Viruthunagar' },{value: 'Chennai', name: 'Chennai'}  ])
        }
    })
    const [branchData,setBranchData] = useState([
        { value: '', name: 'Choose Bank' }          
    ]);
    const [ifscauto, setIfscauto] = useState("IFSC")
    const clearDetails = () => {
        setNewInsurance({ farmername: '', aadhaarnumber: '', scheme: '', croptype: '', cultivatedarea: '', grossamount: '', accountnumber: '', bankname: '', branch: '', ifsccode: '' });
    }
    const nextDetails = () => {
        farmernameref.current.style.visibility = 'hidden';
        farmernamecharref.current.style.visibility = 'hidden';
        aadhaarnumberref.current.style.visibility = 'hidden';
        aadhaarnumbernumref.current.style.visibility = 'hidden';
        ifscref.current.style.visibility = 'hidden';
        ifscvalref.current.style.visibility = 'hidden';
        banknameref.current.style.visibility = 'hidden';
        branchref.current.style.visibility = 'hidden';
        schemeref.current.style.visibility = 'hidden';
        croptyperef.current.style.visibility = 'hidden';
        cultivatedarearef.current.style.visibility = 'hidden';
        grossamountref.current.style.visibility = 'hidden';;
        accountnumberref.current.style.visibility = 'hidden';;
        accountnumbernumref.current.style.visibility = 'hidden';;
        assureref.current.style.visibility = 'hidden';
        if (assure === false || newInsurance.farmername == '' || newInsurance.accountnumber.length == 12 || newInsurance.ifsccode.length == 6 || regex.test(newInsurance.farmername) == true || newInsurance.aadhaarnumber.length == 12 || newInsurance.aadhaarnumber == '' || newInsurance.medicinecategory == '' || newInsurance.medicinerate == '' || newInsurance.medicinestock == '') {
            if (newInsurance.farmername == '')
                farmernameref.current.style.visibility = 'visible'
            if (newInsurance.aadhaarnumber == '')
                aadhaarnumberref.current.style.visibility = 'visible'
            if (newInsurance.scheme == '')
                schemeref.current.style.visibility = 'visible'
            if (newInsurance.croptype == '')
                croptyperef.current.style.visibility = 'visible'
            if (newInsurance.cultivatedarea == '')
                cultivatedarearef.current.style.visibility = 'visible'
            if (newInsurance.grossamount == '')
                grossamountref.current.style.visibility = 'visible'
            if (newInsurance.accountnumber == '')
                aadhaarnumberref.current.style.visibility = 'visible'
            if (newInsurance.bankname == '')
                banknameref.current.style.visibility = 'visible'
            if (newInsurance.branch == '')
                branchref.current.style.visibility = 'visible'
            if (newInsurance.ifsccode == '')
                ifscref.current.style.visibility = 'visible'
            if (newInsurance.aadhaarnumber.length == 12)
                aadhaarnumberref.current.style.visibility = 'visible'
            if (newInsurance.accountnumber.length == 12)
                accountnumbernumref.current.style.visibility = 'visible'
            if (newInsurance.ifsccode.length == 6)
                ifscvalref.current.style.visibility = 'visible'
            if (regex.test(newInsurance.farmername))
                farmernamecharref.current.style.visibility = 'visible'

            if (assure === false)
                assureref.current.style.visibility = 'visible'

        } else {

            axios.post('http://localhost:3001/insurance', newInsurance).then((response) => {
                setInsurance([...insurance, response.data]);

            });
            addmsg.current.style.visibility = 'visible';
            setTimeout(() => {
                addmsg.current.style.visibility = 'hidden';
            }, 3000);


            setNewInsurance({ farmername: '', aadhaarnumber: '', scheme: '', croptype: '', cultivatedarea: '', grossamount: '', accountnumber: '', bankname: '', branch: '', ifsccode: '' });
            farmernameref.current.style.visibility = 'hidden';
            farmernamecharref.current.style.visibility = 'hidden';
            aadhaarnumberref.current.style.visibility = 'hidden';
            aadhaarnumbernumref.current.style.visibility = 'hidden';
            ifscref.current.style.visibility = 'hidden';
            ifscvalref.current.style.visibility = 'hidden';
            banknameref.current.style.visibility = 'hidden';
            branchref.current.style.visibility = 'hidden';
            schemeref.current.style.visibility = 'hidden';
            croptyperef.current.style.visibility = 'hidden';
            cultivatedarearef.current.style.visibility = 'hidden';
            grossamountref.current.style.visibility = 'hidden';;
            accountnumberref.current.style.visibility = 'hidden';;
            accountnumbernumref.current.style.visibility = 'hidden';;
            assureref.current.style.visibility = 'hidden';
        }

    };

    return (
        <div className='mx-5 '>
            <h3>Apply Insurance</h3>
            <form className="row g-9">
                <div className="col-md-12 d-flex flex-column">
                    <label for="farmername" className="form-label">Farmer's Name</label>
                    <input type="text" className=" inputstyle" id="farmername" value={newInsurance.farmername}
                        onChange={(e) => setNewInsurance({ ...newInsurance, farmername: e.target.value })}
                    />
                    <label ref={farmernameref} className='requiredmsg' >**Required ! Must fill the field **</label>
                    <label ref={farmernamecharref} className='requiredmsg' >**Field must contain alphabet only**</label>
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <label for="aadhaarnumber" className="form-label">Aadhaar Number</label>
                    <input type="number" className=" inputstyle" id="aadhaarnumber" value={newInsurance.aadhaarnumber}
                        onChange={(e) => setNewInsurance({ ...newInsurance, farmername: e.target.value })}
                    />
                    <label ref={aadhaarnumberref} className='requiredmsg' >**Required ! Must fill the field **</label>
                    <label ref={aadhaarnumbernumref} className='requiredmsg' >**12 Digits Required**</label>
                </div>

                <div className="col-md-6 d-flex flex-column">
                    <label for="scheme" className="form-label">Scheme Name</label>
                    {/* <input type="text" className="inputstyle" id="medicinecategory" value={newInsurance.medicinecategory}
                            onChange={(e) => setnewInsurance({ ...newInsurance, medicinecategory: e.target.value })} /> */}
                    <select class="inputstyle" aria-label="Default select example" id="scheme" value={newInsurance.scheme} onChange={(e) => setNewInsurance({ ...newInsurance, scheme: e.target.value })}>
                        <option selected value=''>Choose Scheme</option>
                        <option value="PMFBY">Pradhan Mantri Fasal Bima Yojana(PMFBY)</option>
                        <option value="WBCIS">Weather based crop insurance Scheme (WBCIS)</option>
                        <option value="CPIS">Coconut Palm Insurance Scheme (CPIS)</option>
                        <option value="UPIS">Unified Package Insurance Scheme (UPIS)</option>
                    </select>
                    <label ref={schemeref} className='requiredmsg' >**Required ! Must fill the field **</label>
                </div>
                <div className="col-md-4 d-flex flex-column">
                    <label for="croptype" className="form-label">Crop Type</label>
                    {/* <input type="text" className="inputstyle" id="medicinecategory" value={newInsurance.medicinecategory}
                            onChange={(e) => setnewInsurance({ ...newInsurance, medicinecategory: e.target.value })} /> */}
                    <select class="inputstyle" aria-label="Default select example" id="croptype" value={newInsurance.croptype} onChange={(e) => setNewInsurance({ ...newInsurance, croptype: e.target.value })}>
                        <option selected value=''>Choose Crop Type</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Pulses">Pulses</option>
                        <option value="Sugarcane">Sugarcane</option>
                        <option value="Corn">Corn</option>
                        <option value="Zaid crops">Zaid crops</option>
                        <option value="Rabi crop">Rabi crop</option>
                        <option value="Kharif crop">Kharif crop</option>
                        <option value="Rice">Rice</option>
                    </select>
                    <label ref={croptyperef} className='requiredmsg' >**Required ! Must fill the field **</label>
                </div>

                <div className="col-md-4 d-flex flex-column">
                    <label for="cultivatedarea" className="form-label">Cultivated Area(in quintal)</label>
                    <input type="number" className="inputstyle" id="cultivatedarea" value={newInsurance.cultivatedarea}
                        onChange={(e) => setNewInsurance({ ...newInsurance, cultivatedarea: e.target.value })}
                    />
                    <label ref={cultivatedarearef} className='requiredmsg' >**Required ! Must fill the field **</label>
                </div>
                <div className="col-md-4 d-flex flex-column">
                    <label for="grossamount" className="form-label">Gross Amount</label>
                    <input type="number" className="inputstyle" id="grossamount" value={newInsurance.grossamount}
                        onChange={(e) => setNewInsurance({ ...newInsurance, grossamount: e.target.value })} />
                    <label ref={grossamountref} className='requiredmsg'>**Required ! Must fill the field **</label>
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <label for="accountnumber" className="form-label">Account Number</label>
                    <input type="number" className="inputstyle" id="accountnumber" value={newInsurance.accountnumber}
                        onChange={(e) => setNewInsurance({ ...newInsurance, accountnumber: e.target.value })} />
                    <label ref={accountnumberref} className='requiredmsg'>**Required ! Must fill the field **</label>
                    <label ref={accountnumbernumref} className='requiredmsg'>** Don't exceed 12 digits **</label>
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <label for="bankname" className="form-label">Bank Name</label>
                    {/* <input type="text" className="inputstyle" id="medicinecategory" value={newInsurance.medicinecategory}
                            onChange={(e) => setnewInsurance({ ...newInsurance, medicinecategory: e.target.value })} /> */}
                    <select class="inputstyle" aria-label="Default select example" id="bankname" value={newInsurance.bankname} onChange={(e) => setNewInsurance({ ...newInsurance, bankname: e.target.value })}>
                        <option selected value=''>Choose Bank</option>
                        <option value="State Bank of India">State Bank of India</option>
                        <option value="Canara Bank">Canara Bank</option>
                        <option value="HDFC">HDFC</option>
                        <option value="ICIC">ICIC</option>
                        <option value="Axis Bank">Axis Bank</option>
                    </select>
                    <label ref={banknameref} className='requiredmsg' >**Required ! Must fill the field **</label>
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <label for="branch" className="form-label">Branch</label>
                    {/* <input type="text" className="inputstyle" id="medicinecategory" value={newInsurance.medicinecategory}
                            onChange={(e) => setnewInsurance({ ...newInsurance, medicinecategory: e.target.value })} /> */}
                    <select class="inputstyle" aria-label="Default select example" id="branch" value={newInsurance.branch} onChange={(e) => setNewInsurance({ ...newInsurance, branch: e.target.value })}>
                        <option selected value=''>Choose Branch</option>
                        {branchData.map((e, key) => {
                            return <option key={key} value={e.value}>{e.name}</option>;
                        })}
                    </select>
                    <label ref={branchref} className='requiredmsg' >**Required ! Must fill the field **</label>
                </div>
                <div className="col-md-6 d-flex flex-column ">
                    <label for="ifsccode" className="form-label">IFSC Code</label>
                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="" id="inputGroup-sizing-sm">{ifscauto}</span>
                        </div>
                        <input type="number" className="inputstyle" id="ifsccode" value={newInsurance.ifsccode}
                            onChange={(e) => setNewInsurance({ ...newInsurance, ifsccode: e.target.value })} />
                    </div>
                    <label ref={ifscref} className='requiredmsg'>**Required ! Must fill the field **</label>
                    <label ref={ifscvalref} className='requiredmsg'>** Must contain 6 digit **</label>
                </div>


                <div className="col-12 " style={{ marginTop: '-5vh' }}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" value={assure} onClick={(e) => { setAssure(true) }} required />
                        <label className="form-check-label" for="gridCheck">
                            I ensure that above information given by me is correct
                            <label ref={assureref} className='requiredmsg' >**Required ! Must fill the field **</label>
                        </label>
                    </div>
                </div>
                <div className="col-4 ">
                    <button type="submit" onClick={(e) => { nextDetails(newInsurance.id); e.preventDefault() }} className="btn btn-success me-2">Next</button>
                    <button type="submit" onClick={(e) => { clearDetails(); e.preventDefault() }} className="btn btn-warning">Clear</button>
                </div>

            </form>
        </div>
    )
}

export default ApplyInsurance