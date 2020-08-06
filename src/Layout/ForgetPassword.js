import React,{useState} from 'react'
import '../App.css'
import {forgetPassword} from "../Service/Auth"

function ForgetPassword() {

  const [product, setProduct] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleForget = (event) => {
    event.preventDefault();
    forgetPassword(product, product.email).then((data) => {
      setProduct(data);
    });
  };
    return (
        <form className='abc' onSubmit={handleForget}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}

export default ForgetPassword
