
const data = [
   {
      id: 1,                           //automatically assigned by database 
      date: Date.now(),                //timestamp, automatic
      userid: 2,                       //student who created the ticket
      title: 'title number one',       //string, required
      description: 'When I try to post to the API, I get a 500 error', //string, required
      tried: 'Stack overflow, Google', //string, required
      category: 'React',               //string, required
      status: false,                   //boolean, defaults to false, if ticket is resolved, helper will mark it true
      helperid: null                   //defaults to null, if a helper selects a ticket, their id will be associated with it here
     },
     {
      id: 2,                    
      date: Date.now(),                
      userid: 2,               
      title: 'title number 1.5', 
      description: 'When I try to post to the API, I still get a 500 error', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'React', 
      status: false, 
      helperid: null 
     },
     {
      id: 3,                    
      date: Date.now(),                
      userid: 2,               
      title: 'title number two', 
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', 
      tried: 'Facebook, Instagram', 
      category: 'SASS', 
      status: false, 
      helperid: null 
     },
     {
      id: 4,                    
      date: Date.now(),                
      userid: 1,               
      title: 'title number three', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'Redux', 
      status: false, 
      helperid: null 
     },
     {
      id: 5,                    
      date: Date.now(),                
      userid: 3,               
      title: 'fourth in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Stack overflow, Google, Facebook', 
      category: 'CSS', 
      status: false, 
      helperid: null 
     },
     {
      id: 6,                    
      date: Date.now(),                
      userid: 4,               
      title: '5 in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Google', 
      category: 'Java', 
      status: false, 
      helperid: null 
     },
     {
      id: 7,                    
      date: Date.now(),                
      userid: 4,               
      title: '6 in dummy data array', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Bing', 
      category: 'Javascript', 
      status: false, 
      helperid: null 
     },
     {
      id: 8,                    
      date: Date.now(),                
      userid: 5,               
      title: '7th entry', 
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      tried: 'Books', 
      category: 'Fortran', 
      status: false, 
      helperid: null 
     }
 ];

 export default data;