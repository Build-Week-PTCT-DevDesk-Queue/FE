import axios from "axios";
import data from '../data';

export const initializeSmurf = () => {
   return dispatch => {
      //console.log("IN DISPATCH FOR INITIALIZE SMURF")   
       axios.get("http://localhost:3333/smurfs")
         .then( (response) => {
            dispatch({ type: "INITIALIZE_SMURF", payload: response.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

//

