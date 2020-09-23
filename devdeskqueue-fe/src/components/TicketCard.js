import React, { useState } from "react";
// import dummyDataAdela from "../dummyDataAdela";
// import axios from "axios";

const TicketCard = () => {
    // const [ticketData, setTicketData] = useState(dummyDataAdela);
    // axios 
    //  .get(`https://devdesk2-be.herokuapp.com/api/tickets`)
    //  .then((res) => setTicketData(res.data))
    //  .catch((err) => console.log(err))

    return(
        <div className="ticket-card">
            {dummydataAdela.map((element, id) => {
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