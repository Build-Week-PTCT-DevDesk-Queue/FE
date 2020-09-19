
const initialState =  [
   {
      id: 1,                           //automatically assigned by database 
      date: Date.now(),                //timestamp, automatic
      user_id: 2,                       //student who created the ticket
      title: 'title number one',       //string, required
      description: 'When I try to post to the API, I get a 500 error', //string, required
      tried: 'Stack overflow, Google', //string, required
      category: 'React',               //string, required
      status: false,                   //boolean, defaults to false, if ticket is resolved, helper will mark it true
      helper_id: ""                   //defaults to "", if a helper selects a ticket, their id will be associated with it here
     },
     {
      id: 2,                    
      date: Date.now(),                
      user_id: 2,               
      title: 'title number 1.5', 
      description: 'When I try to post to the API, I still get a 500 error', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'React', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 3,                    
      date: Date.now(),                
      user_id: 2,               
      title: 'title number two', 
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', 
      tried: 'Facebook, Instagram', 
      category: 'SASS', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 4,                    
      date: Date.now(),                
      user_id: 1,               
      title: 'title number three', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'Redux', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 5,                    
      date: Date.now(),                
      user_id: 3,               
      title: 'fourth in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'CSS', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 6,                    
      date: Date.now(),                
      user_id: 4,               
      title: '5 in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Google', 
      category: 'Java', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 7,                    
      date: Date.now(),                
      user_id: 4,               
      title: '6 in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Bing', 
      category: 'Javascript', 
      status: false, 
      helper_id: "" 
     },
     {
      id: 8,                    
      date: Date.now(),                
      user_id: 5,               
      title: '7th entry', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Books', 
      category: 'Fortran', 
      status: false, 
      helper_id: "" 
     }
 ] ;


export const ticketReducer = ( state = initialState, action) => {
   
   switch(action.type) {

      case "GET_TICKETS":
         break;
      case "CREATE_TICKET":
         break;
      case "ASSIGN_TICKET":

         return state.map( (item) => {

            if(item.id === action.payload){
                // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                return{...item, helper_id: "TEMP_NAME"}
            }else{
               return item;
            }
         })

      case "RESOLVE_TICKET":
         return state.map( (item) => {

            if(item.id === action.payload){
                // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                return{...item, status: true}
            }else{
               return item;
            }
         })
      case "REASSIGN_TICKET":
         
         return state.map( (item) => {

            if(item.id === action.payload){
                // ADD IF() STATEMENT - CHECK IF ALREDY ASSGINED
                return{...item, status: false ,helper_id: ""}
            }else{
               return item;
            }
         })
      case "DELETE_TICKET":
         
         state.forEach( (item) => {
         
            if(item.id === action.payload){
               
                if( item.helper_id === "TEMP_NAME" ){
                  //CALL DELETE
                  //UPDATE STATE
                  const updatedList = state.filter( (item) => { return item.id !== action.payload})
                  return updatedList;
                }else{
                   alert("You can only delete your own tickets");
                }
            }//if
         })
      default:
         return state;
   }
}