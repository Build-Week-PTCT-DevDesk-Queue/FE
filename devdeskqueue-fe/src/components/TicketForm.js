import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { addTicket } from "./actions/studentAction"
import { connect } from "react-redux";




const ticketFormSchema = yup.object().shape({
    title: yup.string().required("Must fill in title"),
    description: yup.string().required("Must fill in description of issue"),
    tried: yup.string().required("Must fill in this field"),
    category: yup.string().required("Must choose a category"),
});

const TicketForm = (props) => {
const [newTicketState, setNewTicketState] = useState({
    title: '',
    description: '',
    tried: '',
    category: '',
})

const [newTicketErrorState, setNewTicketErrorState] = useState({
    title: '',
    description: '',
    tried: '',
    category: '',
})

const validate = (e) => {
    yup
     .reach(ticketFormSchema, e.target.name)
     .validate(e.target.value)
     .then((valid) => setNewTicketErrorState({...newTicketErrorState, [e.target.name]: ''}))
     .catch((err) => setNewTicketErrorState({
        ...newTicketErrorState, [e.target.value]: err.errors[0]
     }))
     
}

const inputChange = (e) => {
    e.persist();
    validate(e);
    setNewTicketState({...newTicketState, [e.target.name]: e.target.value});
}

const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submited!!");
    props.addTicket(newTicketState)
    success();
    setNewTicketState({
        title: '',
        description: '',
        tried: '',
        category: '',
    })
}

const success = () => {
    props.history.push('/tickets')
}

const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        ticketFormSchema.isValid(newTicketState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [newTicketState]);

return (
    <>
    <header>
        <h1>Let's submit a help ticket.</h1>
        <p id="ticket-form-pTag"><span>*</span> Required Fields</p>
    </header>
    <form id="ticket-form" onSubmit={submitForm}>
        
        <label htmlFor="title"><h4>What is going on?<span>*</span></h4></label>
        <input type="text" name="title" placeholder="Add a Title" value={newTicketState.title} onChange={inputChange} />

        <label htmlFor="category"><h4>What is this issue about?<span>*</span></h4></label>
        <select name="category" value={newTicketState.category} onChange={inputChange}>
            <option value={null}>*choose an option*</option>
            <option value="equipment" >Equipment</option>
            <option value="people" >People</option>
            <option value="track" >Track</option>
            <option value="finances" >Finances</option>
            <option value="other" >Other</option>
            
        </select>

        <label htmlFor="tried"><h4>What have you tried?<span>*</span></h4></label>
        <textarea name="tried" value={newTicketState.tried} onChange={inputChange} />

        <label htmlFor="description"><h4>Can you describe the problem?<span>*</span></h4></label>
        <textarea name="description" value={newTicketState.description} onChange={inputChange} />

        <button disabled={buttonDisabled} type="submit" className="form-button">Submit</button>

    </form>
    </>
)
}



export default connect(null, {addTicket})(TicketForm);