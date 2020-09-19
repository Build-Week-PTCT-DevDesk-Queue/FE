export default   [
    {
       id: 1,                           //automatically assigned by database 
       date: Date.now(),                //timestamp, automatic
       user_id: 2,                       //student who created the ticket
       title: 'title number one',       //string, required
       description: 'When I try to post to the API, I get a 500 error', //string, required
       tried: 'Stack overflow, Google', //string, required
       category: 'React',               //string, required
       status: false,                   //boolean, defaults to false, if ticket is resolved, helper will mark it true
       helper_id: null                   //defaults to null, if a helper selects a ticket, their id will be associated with it here
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
       helper_id: null 
      }
    ]