import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MyApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
           
          </ul>
          <ul className="form-inline my-2 my-lg-0">
              
          <li className="nav-item abc ">
              <Link className="nav-link" to="/changepassword"><botton classname='btn btn-success'>ChangePassword</botton> </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
