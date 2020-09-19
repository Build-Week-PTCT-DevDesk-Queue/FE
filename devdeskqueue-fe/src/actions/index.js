import axios from "axios";
import axiosWithAuth from "../utils/AxiosWithAuth";

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

// GETs all tickets with helper_id null && status 0 =========================//
export const getTickets = () => {
   return dispatch => {
       axiosWithAuth().get("/api/tickets")
         .then( (response) => {
            dispatch({ type: "GET_TICKETS", payload: response.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

export const createTicket = () => {
  
}

export const assignTicket = (id) => {
   return dispatch => {
      // start here - 
      axiosWithAuth().get("/api/tickets")
      .then( (response) => {
         dispatch({ type: "GET_TICKETS", payload: response.data });
      })
      .catch(err => console.log("ERROR:", err));

      //dispatch( { type: "ASSIGN_TICKET", payload: id } )
   }
}

export const resolveTicket = (id) => {
   return dispatch => {
      dispatch( { type: "RESOLVE_TICKET", payload: id } )
   }
}

export const reassignTicket = (id) => {
   return dispatch => {
      dispatch( { type: "REASSIGN_TICKET", payload: id } )
   }
}

export const deleteTicket = (id) => {
   return dispatch => {
      dispatch( { type: "DELETE_TICKET", payload: id } )
   }
}