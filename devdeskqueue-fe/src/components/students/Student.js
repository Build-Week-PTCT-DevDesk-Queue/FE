
import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getData } from "../actions/actions"
import dummyData from "../../dummyDataAdela";
import Closed from './TicketClosed'
import { getData} from "../actions/studentAction"



const Student = props => {
    console.log(props)

    // let role = props.user.role;
    // useEffect(() => {

    //     // console.log(role);
    //     props.getData();
    // },[])
    

    return (
        <div className="student-Q">
             <div>
                    <h1>My Queue</h1>
                    <button className="tic-button">Go to Form</button>
                   <button className="tic-button">Closed Tickets</button>
                   </div>
            {/* <Header/> */}
            <div className="student-card">
               
            
                {/* <Header/> */}
                <h1> {dummyData[0].title}</h1>
                
                <div className="ticket-discription">
                    <h3>Whats the issue? </h3>{dummyData[0].description}
                </div>

                <div className="tried">
                    <h3>what have you tried?</h3> {dummyData[0].tried}
                </div>

                <div className="more-info">
                    <h3> More info</h3>
                    <p> whatever they input</p>
                </div>
                
            </div>
             
                
           
            <div className="sidenav">
            {/* <h1>My Queue</h1> */}

                {/* <a href="#">Open Tickets</a> */}
                {/* <a href="#">Closed Tickets</a> */}
                {/* <a href="#">Messege</a> */}
                {/* <a href="#">Comenets</a> */}
                
               

            </div>
            {/* <button>closed Tickets</button> */}
       {/* <Closed/> */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {state};
  }
  export default connect(mapStateToProps, { })(Student);
