import React,{useState,useEffect} from 'react'
import {getUserDetail} from "../Service/User"
import {Link} from 'react-router-dom'


const Home =(props) => {
    const [name, setName] = useState([]);
    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = () => {
      getUserDetail().then((data) => {
        setName(data);
      });
    };


    const onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("Token")
        localStorage.removeItem("RefreshToken")
        //localStorage.clear();
        props.history.push("/");
        window.location.reload(); // Page reload
      };
    return (
        <div>
            hello, {name.username}

            <button onClick={onLogout} className='btn btn-sucess' >Logout</button>
            <Link className="btn" to="/changepassword"><botton>ChangePassword</botton> </Link>
           
        </div>
    )
}

export default Home
