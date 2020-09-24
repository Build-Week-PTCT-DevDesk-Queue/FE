
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import axios from "axios"
import dummyData from "../../dummyDataAdela";
import Closed from './TicketClosed'
import { getData } from "../actions/studentAction"
import axiosWithAuth from "../../utils/AxiosWithAuth";



function Student(props) {
    // console.log(props)
    //  props.getData();

    //  console.log(props.tickets)
        

    // const [ticket, setTicket] = useState(props.tickets)

    axios
    .get('https://devdesk2-be.herokuapp.com/api/tickets')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })

    return (
        <div className="student-Q">
            <div>
                <h1>Open Tickets</h1>
                {/* {props.tickets.map(ticket => {
                    return (
                        <h3>{ticket.title}</h3>
                    )
                })} */}

            </div>

        </div>
    )
}
const mapStateToProps = state => {
    return { 
        tickets: state.tickets 
    };
}
export default connect(mapStateToProps, {})(Student);
