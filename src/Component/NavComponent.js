import React from 'react'
import logo from '../images/af7132bdc809b77306b178eb09e94642_prev_ui.png';
import profile from '../images/108634166-farmer-vector-icon-isolated-on-transparent-background-farmer-logo-concept_prev_ui.png';
function NavComponent() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top mx-3" alt="" />
                    Kisshan
                </a>
                <div>
                    <img src={profile} width="30" height="30" class="d-inline-block align-top me-3" alt=""/>
                </div>
            </nav>
            
        </div>
    )
}

export default NavComponent