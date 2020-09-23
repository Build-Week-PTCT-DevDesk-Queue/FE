import axios from "axios";
import axiosWithAuth from '../../utils/AxiosWithAuth'

// GETs all tickets with helper_id null && status 0 =========================//
export const getTickets = () => {
   return dispatch => {
       axiosWithAuth().get("https://devdesk2-be.herokuapp.com/api/tickets")
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

      // axios.put(`https://devdesk2-be.herokuapp.com/api/tickets/${ticketId}/helper/${helperId}`)
      // .then( (response) => {
            //console.log(response)
      //    //dispatch({ type: "GET_TICKETS_BY_HELPER_ID", payload: response.SHAPEOFTHEDATA });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "ASSIGN_TICKET", payload: { ticketId : ticketId , helperId : helperId } } )
   }
}

export const resolveTicket = (ticketId) => {
   return dispatch => {

      // axios.put("https://devdesk2-be.herokuapp.com/api/tickets/${ticketId}/status", { "status": 1 } )
      // .then( (response) => {
            //console.log(response)
      //    //dispatch({ type: "GET_TICKETS", payload: response.data });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "RESOLVE_TICKET", payload: ticketId } )
   }
}

export const reassignTicket = (ticketId) => {
   return dispatch => {
   
      // axios.put(`https://devdesk2-be.herokuapp.com/api/tickets/${ticketId}/helper/${0}`)
      // .then( (response) => {
            //console.log(response)
      //    //dispatch({ type: "GET_TICKETS", payload: response.data });
      // })
      // .catch(err => console.log("ERROR:", err));

      dispatch( { type: "REASSIGN_TICKET", payload: ticketId } )
   }
}

// export const deleteTicket = (id) => {
//    return dispatch => {
//       dispatch( { type: "DELETE_TICKET", payload: id } )
//    }
// }