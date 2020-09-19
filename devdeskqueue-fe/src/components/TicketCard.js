import React, { useState } from "react";
// import dummyDataAdela from "../dummyDataAdela";

const TicketCard = (props) => {
    
    return(
        <div className="ticket-card">
            {props.data.map((element, id) => {
            return(<div className="ticket" key={element.id}>
                <p>{element.date}</p>
                <p>{element.category}</p>
                <h1>{element.title}</h1>
                <p>{element.description}</p>
                <p>{element.tried}</p>
            </div>)
        })}
        </div>
    )
}
export default TicketCard;