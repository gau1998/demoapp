import React, { useState } from 'react'
import { changePassword } from '../Service/Auth';
import '../App.css'

const ChangePassword=()=> {
    const[password,setPassword]=useState({
        old_password:"",
        new_password:"",
        confirm_password:""
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPassword({ ...password, [name]: value });
    };


    const handleSubmit=(event)=>{
    event.preventDefault()
    changePassword( password).then((data) => {
        setPassword(data)
      }); 
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='abc'>
            <div className="from-group">
                <h5>Old password</h5>
                <input type="text" className='form-control' name='old_password'  onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <h5>New password</h5>
                <input type="text" name='new_password'  className='form-control'  onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <h5>Confirm password</h5>
                <input type="text" name='confirm_password'  className='form-control'  onChange={handleInputChange} />
              </div>
            
           <button className='btn btn-success'>ChangePassword</button>
            </form>
            
        </div>
    )
}

export default ChangePassword
