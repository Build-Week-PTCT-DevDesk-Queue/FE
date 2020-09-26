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
                tickets: action.payload
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

            //helper cases

            
            case "ASSIGN_TICKET":

                //console.log( "PAYLOAD", action.payload.ticketId )
                return state.map( (item) => {
       
                   if(item.id === action.payload.ticketId){
                       return{...item, helper_id: action.payload.helperId }
                   }else{
                      return item;
                   }
                })
       
             case "RESOLVE_TICKET":
                return state.map( (item) => {
       
                   if(item.id === action.payload){
                       // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                       return{...item, status: true }
                   }else{
                      return item;
                   }
                })
                
             case "REASSIGN_TICKET":
                
                return state.map( (item) => {
       
                   if(item.id === action.payload){
                       // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                       return{...item, status: false ,helper_id: null}
                   }else{
                      return item;
                   }
                })

        default:
            return state;
    }
};

export default reducer;