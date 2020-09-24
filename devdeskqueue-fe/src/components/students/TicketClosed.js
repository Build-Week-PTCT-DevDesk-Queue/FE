import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import Student from "../students/Student"



// function closed (props){

//     const history  = useHistory();
//     const { id }   = useParams();


//     const ticketsClosed = () => {
//         history.push(`/resolved-tickets/${id}`)

//      }
//     return (
//         <div>
//            <button onClick={ticketsClosed}> Back to open tickets</button>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {state};
//   }
//   export default connect(mapStateToProps, { })(closed);