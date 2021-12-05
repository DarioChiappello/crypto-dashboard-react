import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Links extends Component {
  

    render () {
       
      return (
        <React.Fragment>
         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse d-flex align-items-stretch">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    <NavLink to="/">Dashboard</NavLink>
                     
                    </a>
                </li>
                
                </ul>
            </div>
            </nav>
        </React.Fragment>
      );
    }
    }
    
    export default Links;