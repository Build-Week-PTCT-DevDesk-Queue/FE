import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
//REDUX
import { connect } from 'react-redux';
import { assignTicket } from '../actions';

function HelperTickets(props){
   console.log(props)
   useEffect( ()=> {

   },[])

   const  history  = useHistory();

   const routeToAllTickets = () => {
      history.push("/helper-tickets")
   }
   const routeToMyTickets = () => {
      //NEED TO GET HELPER TICKETS FROM API, FILTER BY STATUS TO DISPLAY

      history.push("/assigned-tickets")
   }
   const routeToResolved = () => {
        //NEED TO GET HELPER TICKETS FROM API , THEN FILTER BY STATUS TO DISPLAY
      history.push("/resolved-tickets")
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
                                 <button onClick={ ()=> {props.assignTicket(item.id);} }>Help Student</button>
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
   }
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

   button{

   }
`;