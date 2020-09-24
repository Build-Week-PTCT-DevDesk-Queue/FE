import axios from 'axios'

const axiosWithAuth = () => {
   
  return axios.create({
        baseURL: 'https://devdesk2-be.herokuapp.com/api',
        withCredentials: true
  });
};
export default axiosWithAuth