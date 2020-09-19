import React, { } from "react";
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
//REDUX
import { connect } from 'react-redux';
import { reassignTicket, deleteTicket } from '../actions';

function HelperResolved(props){

   const  history  = useHistory();

   const routeToAllTickets = () => {
      history.push("/helper-tickets")
   }
   const routeToMyTickets = () => {
      history.push("/assigned-tickets")
   }
   const routeToResolved = () => {
      history.push("/resolved-tickets")
   }

   return (
      <TicketContainer> 
        <h1>Resolved Tickets</h1>
        <button onClick={routeToAllTickets}>All Open Tickets</button>
        <button onClick={routeToMyTickets}>My Queue</button>
        <button onClick={routeToResolved}>All Resolved Tickets</button>
        <TicketList>
               { props.state.map( item => {

               if( item.helper_id !== "" && item.status === true ){

                  return <Ticket key={item.id}>
                              <h3>{item.title}</h3>
                              <p>Category: {item.category}</p>
                              <p>{item.description}</p>
                              <p>{item.tried}</p>
                              <p>Assigned to: {item.helper_id}</p>
                              <button onClick={ ()=> {props.reassignTicket(item.id);} }>Re-Assign</button>
                              <button onClick={ ()=> {props.deleteTicket(item.id);} }>Delete</button>
                           </Ticket>;
               }//if

               })}
        </TicketList>
      </TicketContainer>
    );
}

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, { reassignTicket, deleteTicket } )(HelperResolved);

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
      margin: 0 .25em;
   }
`;