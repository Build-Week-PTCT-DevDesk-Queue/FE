import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_RESOLVED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_RESOLVED,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    ADD_TICKET_START,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAIL,
    DELETE_TICKET_START,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAIL,
    EDIT_TICKET_START,
    EDIT_TICKET_SUCCESS,
    EDIT_TICKET_FAIL
    

} from "../actions/studentAction";


const intialState = {
    tickets: [],
    assigned_tickets: [], // Holds temporary state on helper branch
    user: {
        id: "",
        username: "",
        role: ""
    },
    fetchingData: false,
    islogging: false,
    isLoggedIn: false,
    isRegistering: false,
    postingTickets: false,
    updatingTicket: false,
    resolvingTicket: false,
    deletingTicket: false,
    error: '',
    status: null,
    credentials: [],
    success: '',
   
}

 const reducer = (state = intialState, action) => {
    switch (action.type){
        case GET_DATA_START:
            return {
                ...state,
                fetchingData: true,
                error: null
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                tickets: action.payload,
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            };
        case ADD_TICKET_START:
            return {
                ...state,
                postingTickets: true,
                error: "",
            };
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                postingTickets: false,
                tickets: [...state.tickets, action.payload]
            };
        case ADD_TICKET_FAIL:
            return {
                ...state,
                postingTickets: false,
                error: action.payload
            };
        case DELETE_TICKET_START:
            return {
                ...state,
                deletingTicket: true,
                error: ""
            };
        case DELETE_TICKET_SUCCESS:
            return {
                ...state,
                deletingTicket: false,
                tickets: action.payload
            };
        case DELETE_TICKET_FAIL:
            return {
                ...state,
                deletingTicket: false,
                error: action.payload
            };
        case EDIT_TICKET_START:
            return {
                ...state,
                updatingTicket: true,
                error: ""
            };
        case EDIT_TICKET_SUCCESS:
            return {
                ...state,
                tickets: state.tickets.map(ticket => {
                    if(Number(ticket.id) === Number(action.id)){
                        ticket = action.payload;
                    }
                    return ticket;
                })
            };
        case EDIT_TICKET_FAIL:
            return {
                ...state,
                updatingTicket: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                islogging: true
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    role: action.payload.role
                },
                islogging: false,
                isLoggedIn: true,

            };
        case LOGIN_FAIL:
            return {
                ...state,
                islogging: false,
                error: action.payload
            };
        case REGISTER_START:
            return {
                ...state,
                isRegistering: true,
                error: ''
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                success: 'success'
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            }

            // HELPER BRANCH FUNCTIONALITY----------------------------------


         /* Notes**  There are 2 arrays in state
            1) tickets[] - this holds the tickets with a helper id of null and ticket status ( which
               denotes if it is resolved or not ) of false 
            2) assigned_tickets[] - this holds the tickets with the id of the logged in helper.  In
            this array, the helpers tickets may be status of true of false ( resolved or unresolved )
         */   

         /* Takes the ticket id and filters it out of the tickets array, instead of making
            and axios.get call.  The api response (which is the updated ticket with the helper id
            set) is added to the assigned_tickets array */
         case "ASSIGN_TICKET":

            const assignedToHelper = state.tickets.filter( (item)=> { return item.id !== action.payload.ticketId })

            return {
               ...state,
               assigned_tickets: [...state.assigned_tickets, action.payload.response],
               tickets: assignedToHelper 
            };
         
         /* The action.payload is from a .get() call that returns all of the tickets for the
            currently logged in helper. The tickets returned are set to the assigned_tickets array
            according */
         case "GET_ASSIGNED":
            
            return {
               ...state,
               assigned_tickets: action.payload 
         };
       
         /* The assigned tickets array is mapped through with the ticket id to set the status
            to true.  The ticket stays im the assigned_tickets array, but the status "true"
            will not meet the condition to display on the resolved tickets page*/
         case "RESOLVE_TICKET":
   
            const resolvedTickets = state.assigned_tickets.map( (item) => {
      
               if(item.id === action.payload){
                  return{...item, status: true }
               }else{
                  return item;
               }
            })

            return {
               ...state,
               assigned_tickets: resolvedTickets 
         };
         
         /* Filters out by the ticket id, and removes from the assigned_tickets array so it longer
            appears on "My Queue" or "Resolved Tickets" pages */
         case "REASSIGN_TICKET":
            
            const reassignedTickets = state.assigned_tickets.filter( (item)=> { return item.id !== action.payload })
            return {
            ...state,
            assigned_tickets: reassignedTickets
         };

         default:
            return state;
    }
};

export default reducer;