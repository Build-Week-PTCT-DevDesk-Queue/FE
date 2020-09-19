import axios from "axios";
//import data from '../data';

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

  
export const getTickets = () => {

}

export const createTicket = () => {
   
}

export const assignTicket = (id) => {
   return dispatch => {
      dispatch( { type: "ASSIGN_TICKET", payload: id } )
   }
}

export const resolveTicket = () => {
   
}

export const reassignTicket = () => {
   
}

export const deleteTicket = () => {
   
}