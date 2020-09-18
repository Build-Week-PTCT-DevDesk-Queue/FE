import data from '../data';

const initialState = {
   // THIS WILL BE AN AXIOS GET SETTING INITIAL STATE
}

export const ticketReducer = ( state = data, action) => {
   
   switch(action.type) {
      case "GET_TICKETS":
      case "CREATE_TICKET":
      case "ASSIGN_TICKET":
      case "RESOLVE_TICKET":
      case "REASSIGN_TICKET":
      case "DELETE_TICKET":
      default:
         return state;
   }
}