import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
//REDUX
import { connect } from 'react-redux';
import { assignTicket, getData } from './actions/studentAction';

function HelperTickets(props){
   
   useEffect( ()=> {
      props.getData();
   },[])
  
   const history  = useHistory();
   const { id }   = useParams();

   const routeToAllTickets = () => {
      history.push(`/helper-tickets/${id}`)
   }
   const routeToMyTickets = () => {
      history.push(`/assigned-tickets/${id}`)
   }
   const routeToResolved = () => {
      history.push(`/resolved-tickets/${id}`)
   }

   return (
      <TicketContainer> 
        <h1>All Open Tickets</h1>
        <button className="all-tickets" onClick={routeToAllTickets}>All Open Tickets</button>
        <button className="my-queue" onClick={routeToMyTickets}>My Queue</button>
        <button className="my-resolved" onClick={routeToResolved}>My Resolved Tickets</button>
        <TicketList>
           { props.state.tickets.map( item => {
               if( item.helper_id === null /* && item.status === false */ ){
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

export default connect( mapStateToProps, { assignTicket, getData } )(HelperTickets);

const TicketContainer = styled.div`
   font-size: 0.8rem;

   .all-tickets{
      box-shadow: 0 2px 4px gray;
   }

   button{
      margin: 1em;
      padding: .5em .75em;
      cursor: pointer;
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
   background-color: #fff;
  border: 0;
  box-shadow: 0 -2px 0 #cf7171, 0 0 2px rgba(199, 78, 78, 0.12),
    0 2px 4px rgba(194, 72, 72, 0.24);
  padding: 1rem;
  position: relative;
  margin: 1rem auto;
  display: inline-block;
   font-size: 0.8rem;
   text-align: left;
  button{
     cursor: pointer;
   }

   @media screen and (max-width: 1000px){
      width: 27%;
   }
   @media screen and (max-width: 850px){
      width: 40%;
   }
   @media screen and (max-width: 600px){
      width: 80%;
   }
`;