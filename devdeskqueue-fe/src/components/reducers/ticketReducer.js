

// INITIAL STATE NEEDS TO COME FROM THE SERVER
// const initialState = [
//    {
//       id: 1,                           //automatically assigned by database 
//       date: Date.now(),                //timestamp, automatic
//       user_id: 2,                       //student who created the ticket
//       title: 'title number one',       //string, required
//       description: 'When I try to post to the API, I get a 500 error', //string, required
//       tried: 'Stack overflow, Google', //string, required
//       category: 'React',               //string, required
//       status: 0,                   //boolean, defaults to 0, if ticket is resolved, helper will mark it true
//       helper_id: null                   //defaults to null, if a helper selects a ticket, their id will be associated with it here
//      },
//      {
//       id: 2,                    
//       date: Date.now(),                
//       user_id: 2,               
//       title: 'title number 1.5', 
//       description: 'When I try to post to the API, I still get a 500 error', 
//       tried: 'Stack overflow, Google, Facebook', 
//       category: 'React', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 3,                    
//       date: Date.now(),                
//       user_id: 2,               
//       title: 'title number two', 
//       description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', 
//       tried: 'Facebook, Instagram', 
//       category: 'SASS', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 4,                    
//       date: Date.now(),                
//       user_id: 1,               
//       title: 'title number three', 
//       description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
//       tried: 'Stack overflow, Google, Facebook', 
//       category: 'Redux', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 5,                    
//       date: Date.now(),                
//       user_id: 3,               
//       title: 'fourth in dummy data array', 
//       description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
//       tried: 'Stack overflow, Google, Facebook', 
//       category: 'CSS', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 6,                    
//       date: Date.now(),                
//       user_id: 4,               
//       title: '5 in dummy data array', 
//       description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
//       tried: 'Google', 
//       category: 'Java', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 7,                    
//       date: Date.now(),                
//       user_id: 4,               
//       title: '6 in dummy data array', 
//       description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
//       tried: 'Bing', 
//       category: 'Javascript', 
//       status: 0, 
//       helper_id: null 
//      },
//      {
//       id: 8,                    
//       date: Date.now(),                
//       user_id: 5,               
//       title: '7th entry', 
//       description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
//       tried: 'Books', 
//       category: 'Fortran', 
//       status: 0, 
//       helper_id: null 
//      }
//  ] ;

const initialState = [];


export const ticketReducer = ( state = initialState, action) => {
   
   switch(action.type) {

      case "GET_TICKETS":
         return [ state, ...action.payload ]

      // case "GET_TICKETS_BY_HELPER_ID":
      //    break;
      // case "CREATE_TICKET":
      //    break;

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
                return{...item, status: 1 }
            }else{
               return item;
            }
         })
         
      case "REASSIGN_TICKET":
         
         return state.map( (item) => {

            if(item.id === action.payload){
                // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                return{...item, status: 0 ,helper_id: null}
            }else{
               return item;
            }
         })

         case "ADD_TICKET_START":
         
            return state.map( (item) => {
   
               if(item.id === action.payload){
                   // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                   return{...item, status: 0 ,helper_id: null}
               }else{
                  return item;
               }
            })

      default:
         return state;
   }
}