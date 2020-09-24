
import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getData } from "../actions/actions"
import dummyData from "../../dummyDataAdela";
import Closed from './TicketClosed'
import { getData } from "../actions/studentAction"



const Student = props => {
    console.log(props)

    // let role = props.user.role;
    // useEffect(() => {

    //     // console.log(role);
    //     props.getData();
    // },[])

    const formCard = () =>{
        props.history.push('/form')
    }
    return (
        <div className="student-Q">

            {/* <Header/> */}
            
                
                <h1>My Queue</h1>
                <button className="tic-button" onClick ={formCard}>Go to Form</button>
                <button className="tic-button">Closed Tickets</button>
                <button className="tic-button">Edit Tickets</button>

                {/* <Header/> */}

                {props.state.map(ticket => {
                    return (
                        
                            <div className="student-card">
                            <div>
                              <h1> {ticket.title}</h1>
                            </div>
                            <div>
                              <h3>Whats the issue? </h3> <p>{ticket.description}</p>
                            </div>
                            <div>
                              <h3>what have you tried?</h3> {ticket.tried}
                            </div>       
                        </div>
                        
                    )
                })}


                {/* <div className="ticket-discription">
                    <h3>Whats the issue? </h3>{dummyData[0].description}
                </div>

                <div className="tried">
                    <h3>what have you tried?</h3> {dummyData[0].tried}
                </div>

                <div className="more-info">
                    <h3> More info</h3>
                    <p> whatever they input</p>
                </div> */}

                            



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
export default connect(mapStateToProps, {})(Student);
