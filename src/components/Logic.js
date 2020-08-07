import React from "react";

const Logic = (props) => {
  return (
    <div>
      {localStorage.getItem("Change")
        ? props.history.push("/home/")
        : props.history.push("/changepassword/")}
    </div>
  );
};

export default Logic;
        
    

