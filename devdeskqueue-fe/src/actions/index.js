import axios from "axios";
import axiosWithAuth from "../utils/AxiosWithAuth";


// GETs all tickets with helper_id null && status 0 =========================//
export const getTickets = () => {
   return dispatch => {
       axiosWithAuth().get("/api/tickets")
         .then( (response) => {
            console.log("GET IN ACTIONS", response)
            dispatch({ type: "GET_TICKETS", payload: response.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

export const createTicket = () => {
  
}

export const assignTicket = (ticketId, helperId) => {
   return dispatch => {
      // start here - 
      // axiosWithAuth().put(`/api/tickets/${ticketId}/helper/${helperId}`)
      // .then( (response) => {
      //    dispatch({ type: "GET_TICKETS", payload: response.SHAPEOFTHEDATA });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "ASSIGN_TICKET", payload: { ticketId : ticketId , helperId : helperId } } )
   }
}

export const resolveTicket = (id) => {
   return dispatch => {
      // start here - 
      // axiosWithAuth().get("/api/tickets")
      // .then( (response) => {
      //    dispatch({ type: "GET_TICKETS", payload: response.data });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "RESOLVE_TICKET", payload: id } )
   }
}

export const reassignTicket = (id) => {
   return dispatch => {
        // start here - 
      // axiosWithAuth().get("/api/tickets")
      // .then( (response) => {
      //    dispatch({ type: "GET_TICKETS", payload: response.data });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "REASSIGN_TICKET", payload: id } )
   }
}

export const deleteTicket = (id) => {
   return dispatch => {
      dispatch( { type: "DELETE_TICKET", payload: id } )
   }
}