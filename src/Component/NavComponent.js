import React from 'react'
import logo from '../images/af7132bdc809b77306b178eb09e94642_prev_ui.png';
// import '../../node_modules/bootstrap/js/src/popover.js'
import profile from '../images/108634166-farmer-vector-icon-isolated-on-transparent-background-farmer-logo-concept_prev_ui.png';
function NavComponent() {
    // var exampleEl = document.getElementById('example')
    // var popover = new bootstrap.Popover(exampleEl, options)
    return (
        <div>
            <nav class="navbar navbar-light bg-light d-flex justify-content-between">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top mx-3" alt="" />
                    Kisshan
                </a>
                <Link to='/calculate-insurance'>Calculate</Link>
                <Link to='/apply-insurance'>Apply Insurance</Link>
                <Link to='/claim-insurance'>Claim Insurance</Link>
                <div>
                    <img src={profile} width="30" height="30" class="d-inline-block align-top me-3" alt="" />
                </div>
            </nav>
            {/* <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
        </div>
    )
}

export default NavComponent