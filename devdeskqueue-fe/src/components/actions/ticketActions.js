import axiosWithAuth from '../../utils/AxiosWithAuth'


// GETs all tickets with helper_id null && status 0 =========================//
export const getTickets = () => {
   console.log("get tickets is being called")
   
   return dispatch => {
       axiosWithAuth().get("/api/tickets")
         .then( (response) => {
            console.log("GET IN ACTIONS", response )
            //dispatch({ type: "GET_TICKETS", payload: response.data });
         })
         .catch(err => console.log("ERROR:", err));
     };
}

// export const createTicket = () => {

  
// }

// export const create = newTicket => dispatch => {
//    dispatch({ type: ADD_TICKET_START });
//    axiosWithAuth()
//        .post('/tickets/create', newTicket)
//        .then(res => {
//            dispatch({
//                type: ADD_TICKET_SUCCESS,
//                payload: res.data
//            });
//        })
//        .catch(err => {
//            dispatch({ type: ADD_TICKET_FAIL, payload: err.response });
//        });
// };

export const assignTicket = (ticketId, helperId) => {
   return dispatch => {

      // axiosWithAuth().put(`/api/tickets/${ticketId}/helper/${helperId}`)
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

      // axiosWithAuth().put("/api/tickets/${ticketId}/status", { "status": 1 } )
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
   
      // axiosWithAuth().put(`/api/tickets/${ticketId}/helper/${0}`)
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