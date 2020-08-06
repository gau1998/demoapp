const api = `https://inback.herokuapp.com/api/1/`;
const forget = `https://inback.herokuapp.com/users/password-reset/`


let authToken = localStorage.getItem("Token");

const config = {
  apiUrl: {
    login: `${api}oauth/token/`,
    register: `${api}user/register/`,
    forget_password: forget,
    change_password: `${api}user/change/password/`,
    edit_me: `${api}user/edit/me`,
    },
  
  head: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },

  headPost: {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },

  headDelete: {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },
  headOption: {
    method: "OPTIONS",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },

};

export default config;

