import config from "./Config/Config"
import axios from "axios"
import ls from "local-storage";
import Swal from "sweetalert2";


var CLIENT_ID = "Instagram";
var GRANT_TYPE = "password";


export async function getLogin(username, password) {
    let authToken = localStorage.getItem("Token");
    let country = new Promise((resolve, reject) => {
        axios({
            url: config.apiUrl.login,
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer " + JSON.parse(authToken),
            },
            data: `grant_type=${GRANT_TYPE}&username=${username}&password=${password}&client_id=${CLIENT_ID}`,
        })
        .then((response) => {
            var ls = require("local-storage");
            ls.set("Token", response.data["access_token"]);
            ls.set("RefreshToken", response.data["refresh_token"]);
            if (!response.ok) {
                Swal.fire({
                    title: "Successs ",
                    icon: "success",
                    text: "Login SuccessFully !!",
                    showConfirmButton: false,
                    timer: 4000,
                });
            } else {
                console.log("error");
            }
            window.location.href =  "/logic/"; 
            resolve(response.json());
            
        })
        .catch((reject) => {
            console.log(reject);
        });
    });
    return country;

} 
  


export async function Signup(product) {
    let country = new Promise((resolve, reject) => {
        axios({
        url: config.apiUrl.register,
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        data: product,
        })
        .then((response) => {
            if (response.ok) {
            Swal.fire({
                title: "Register Error !",
                icon: "error",
                text: "Error While Register  ??",
                timer: 2000,
            });
            } else {
            Swal.fire({
                title: "Register SuccessFully ",
                icon: "success",
                text: "Email sent to your register email to confirm account !!",
                showConfirmButton: false,
                timer: 4000,
            });
            }
            window.location.href =  "/";
            resolve(response.json());
        })
        .catch((reject) => {
            console.log(reject);
        });
    });
    return country;
    }


export async function forgetPassword(product, email) {
    let country = new Promise((resolve, reject) => {
        axios({
        url: config.apiUrl.forget_password,
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        data: product,
        })
        .then((response) => {
            if (!response.ok) {
            Swal.fire({
                title: "Email Sent ",
                icon: "success",
                text: "Email sent to" + email + "Forget Password",
                showConfirmButton: false,
                timer: 4000,
            });
            } else {
            Swal.fire({
                title: " Error !",
                icon: "error",
                text: "Please Check Your email id??",
                timer: 2000,
            });
            }
            window.location.href =  "/";
            resolve(response.json());
        })
        .catch((reject) => {
            console.log(reject);
        });
    });
    return country;
}


export async function changePassword(product) {
    let authToken = localStorage.getItem("Token");
    let country = new Promise((resolve, reject) => {
      axios({
        url: config.apiUrl.change_password,
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(authToken),
        },
        data: product,
      })
        .then((response) => {
          if (!response.ok) {
            Swal.fire({
              title: "Change Password ",
              icon: "success",
              text: "Passoword Change",
              showConfirmButton: false,
              timer: 4000,
            });
          } else {
            Swal.fire({
              title: " Error !",
              icon: "error",
              text: "Please Check Your email id??",
              timer: 2000,
            });
          }
          localStorage.setItem("Change", "Password");
          window.location.href = "/home/";
          resolve(response.json());
        })
        .catch((error) => {
          if (error.response) {
            Swal.fire({
              title: " Error !",
              icon: "error",
              text: error.response.data.old_password
                ? "Old password " + error.response.data.old_password
                : error.response.data.new_password,
              timer: 2000,
            });
            console.log("Err", error.response.data);
          } else {
            console.log("Error", error.message);
          }
        });
    });
    return country;
  }
  
