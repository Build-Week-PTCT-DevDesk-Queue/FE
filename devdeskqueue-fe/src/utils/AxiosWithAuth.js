
import axios from 'axios'


const axiosWithAuth = () => {
  const token = localStorage.getItem("token")
  return axios.create({
        baseURL: 'https://devdesk2-be.herokuapp.com/api',
        withCredentials: true,
        Authorizathion: token
  });
};
export default axiosWithAuth