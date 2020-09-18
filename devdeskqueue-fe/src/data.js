
const data = [
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
      helper_id: null 
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
      helper_id: null 
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
      helper_id: null 
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
      helper_id: null 
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
      helper_id: null 
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
      helper_id: null 
     }
 ];

 export default data;