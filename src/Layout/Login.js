import React, { useState } from 'react'
import '../App.css'
import avatar from '../img/avatar.svg'
import bg from '../img/bg.svg'
import wave from '../img/wave.png'
import { Link } from 'react-router-dom'
import {getLogin} from "../Service/Auth"

const Login =()=> {
  const [product, setProduct] = useState({
    username: "",
    password: "",
  });
   
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });

    console.log(product)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getLogin(product.username, product.password).then((data) => {
      setProduct(data)
    }); 
  }
  
  return (
      <div>
          
      <img className="wave" src={wave} alt='wave' />
      <div className="container">
        <div className="img">
          <img src={bg} alt='bg'/>
          <Link to='/register' ><button className='btn btn-success don'>REGISTER</button></Link> 
        </div>
        <div className="login-content">
            
          <form  onSubmit={handleSubmit}>
            <img src={avatar} alt='avatar' />
            <h2 className="title">Welcome</h2>
            
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="form-group">
                
                <input type="text" name='username' className='form-control' placeholder='username'  onChange={handleInputChange} />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="form-group">
            
                <input type="password" name='password' className='form-control' placeholder='Password' onChange={handleInputChange} />
              </div>
            </div>
            <Link to="/forgetPassword">Forgot Password?</Link>
            <button className='btn btn-success don'>LOGIN</button>
          
          </form>
        </div>
      </div>
    </div>
    
  )
}


export default Login
