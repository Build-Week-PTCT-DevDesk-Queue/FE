import React, { useState } from "react";
//need to import connect and any functions from actions
import styled from 'styled-components';
import data from '../data';  //temporary

function HelperTickets(props){

   return (
      <TicketContainer> 
        <TicketList>
           { data.map( item => {
           return <Ticket>
                     <h3>{item.title}</h3>
                     <p>Category: {item.category}</p>
                     <p>{item.description}</p>
                     <p>{item.tried}</p>
                     <button>Help Student</button>
                  </Ticket>;
           })}
        </TicketList>
      </TicketContainer>
    );
}

export default HelperTickets;

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