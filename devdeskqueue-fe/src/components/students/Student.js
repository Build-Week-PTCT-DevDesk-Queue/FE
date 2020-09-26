
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { getData } from "../actions/actions"
import Closed from './TicketClosed'
import { getData } from "../actions/studentAction"




const Student = props => {

        // console.log(props)
        props.getData()

   
    const formCard = () =>{
        props.history.push('/form')
    }
    // console.log(props.tickets)
    return (
        <div className="student-Q">

            {/* <Header/> */}
            
                
                <h1>My Queue</h1>
                <button className="tic-button" onClick ={formCard}>Go to Form</button>
                <button className="tic-button">Closed Tickets</button>
                <button className="tic-button">Edit Tickets</button>

                {/* <Header/> */}

                {props.tickets.map(ticket => {
                    return (
                        
                            <div className="student-card">
                            <div>
                              <h1 key = {ticket.id}> {ticket.title}</h1>
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
            </div>
                            


                    )
                }
    const mapStateToProps = state => {
        return {
            tickets: state.tickets
        };
    }

export default connect(mapStateToProps, {getData})(Student);
