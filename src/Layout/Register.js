import React, { useState } from 'react'
import '../App.css'
import {Signup} from "../Service/Auth"

const Register = () => {
  const [product, setProduct] = useState({
    email: "",
    username: "",
    password: "",
  });


  const handleSignUp = (event) => {
    event.preventDefault();
    Signup(product).then((data) => {
      setProduct(data);
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };


    return (
        <form className=' abc'  onSubmit={handleSignUp}>
          
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}/>
          
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}/>
          
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    )
}

export default Register
