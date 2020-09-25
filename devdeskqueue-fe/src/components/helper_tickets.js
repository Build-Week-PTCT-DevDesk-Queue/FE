import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
//REDUX
import { connect } from 'react-redux';
import { assignTicket } from './actions/studentAction';
import axios from 'axios'
import axiosWithAuth from '../utils/AxiosWithAuth'

function HelperTickets(props){

   //console.log(props.state)

   // useEffect( ()=> {

   //    console.log("use effect is called")

   //    axiosWithAuth().get('/api/tickets')
   //    .then( (res) => { console.log("GET() REQUEST", res)} )
   //    .catch( (err) => console.log(err))
   // },[])

   const history  = useHistory();
   const { id }   = useParams();

   const routeToAllTickets = () => {
      history.push(`/helper-tickets/${id}`)
   }
   const routeToMyTickets = () => {
      //NEED TO GET HELPER TICKETS FROM API, FILTER BY STATUS TO DISPLAY
      history.push(`/assigned-tickets/${id}`)
   }
   const routeToResolved = () => {
        //NEED TO GET HELPER TICKETS FROM API , THEN FILTER BY STATUS TO DISPLAY
      history.push(`/resolved-tickets/${id}`)
   }

   return (
      <TicketContainer> 
        <h1>All Open Tickets</h1>
        <button onClick={routeToAllTickets}>All Open Tickets</button>
        <button onClick={routeToMyTickets}>My Queue</button>
        <button onClick={routeToResolved}>All Resolved Tickets</button>
        <TicketList>
           { props.state.map( item => {
               if( item.helper_id === null && item.status === 0 ){
                     return <Ticket key={item.id}>
                                 <h3>{item.title}</h3>
                                 <p>Category: {item.category}</p>
                                 <p>{item.description}</p>
                                 <p>{item.tried}</p>
                                 <p>Assigned to: {item.helper_id}</p>
                                 <button onClick={ ()=> {props.assignTicket(item.id, id);} }>Help Student</button>
                              </Ticket>;
               }
               })}
            
        </TicketList>
      </TicketContainer>
    );
}

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, { assignTicket } )(HelperTickets);

const TicketContainer = styled.div`
   button{
      margin: 1em;
      padding: .5em .75em;
      cursor: pointer;
   }
  display: inline-block;
   font-size: 0.8rem;
   text-align: left;
`;

const TicketList = styled.div`
   display:flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`;

const Ticket = styled.div`
   border: 1px solid black;
   width: 20%;
   padding: 1em;
   margin: 1em 0;
   background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #cf7171, 0 0 2px rgba(199, 78, 78, 0.12),
    0 2px 4px rgba(194, 72, 72, 0.24);
  padding: 1rem;
  position: relative;
  margin: 1rem auto;
  width: 80%;
   button{
cursor: pointer;
   }
`;