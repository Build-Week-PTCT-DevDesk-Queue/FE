import axios from 'axios';

const axiosWithAuth = () => {
  // get the token from localstorage
  //const token = window.localStorage.getItem('token');

  // **create a new "instance" of axios with the config object built into it**
  // **THIS IS WHERE THE HEADER IS INCLUDED IN THE AXIOS POST CALL**

  return axios.create({
   //  headers: {
   //    authorization: token
   //  },
    baseURL: 'https://devdesk2-be.herokuapp.com/'
  });
};

export default axiosWithAuth;