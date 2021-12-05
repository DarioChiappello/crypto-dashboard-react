import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';



class Navbar extends Component {
  

render () {
   
  return (
    <React.Fragment>
     <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Darío Chiappello</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active link-light text-white" href="#">
                <span data-feather="home"></span>
                <NavLink className="text-white" to="/">Dashboard</NavLink>
                     
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active link-light " href="#">
                <span data-feather="home"></span>
                <NavLink className="text-white" to="/list">Cryipocurrencies</NavLink>
                     
                </a>
            </li>
            {/*<li className="nav-item">
                <a className="nav-link active link-light " href="#">
                <span data-feather="home"></span>
                <NavLink className="text-white" to="/content">All Cryipocurrencies</NavLink>
                     
                </a>
            </li>*/}
            <li className="nav-item">
                <a className="nav-link active link-light " href="#">
                <span data-feather="home"></span>
                <NavLink className="text-white" to="/graph">Show Graph</NavLink>
                     
                </a>
            </li>    
        </ul>
    </nav>
    </React.Fragment>
  );
}
}

export default Navbar;

