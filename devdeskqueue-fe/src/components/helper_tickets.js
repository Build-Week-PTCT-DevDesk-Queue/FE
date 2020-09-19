import React, { } from "react";
import styled from 'styled-components';
//REDUX
import { connect } from 'react-redux';
import { assignTicket } from '../actions';

function HelperTickets(props){

   return (
      <TicketContainer> 
        <TicketList>
           { props.state.map( item => {
           return <Ticket key={item.id}>
                     <h3>{item.title}</h3>
                     <p>Category: {item.category}</p>
                     <p>{item.description}</p>
                     <p>{item.tried}</p>
                     <p>Assigned to: {item.helper_id}</p>
                     <button onClick={ ()=> {props.assignTicket(item.id);} }>Help Student</button>
                  </Ticket>;
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