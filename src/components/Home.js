import React,{useState,useEffect} from 'react'
import {getUserDetail} from "../Service/User"


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
        localStorage.clear();
        props.history.push("/");
        window.location.reload(); // Page reload
      };
    return (
        <div>
            hello, {name.username}

            <button onClick={onLogout} >Logout</button>
           
        </div>
    )
}

export default Home
