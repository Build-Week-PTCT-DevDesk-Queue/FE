
import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getData } from "../actions/actions"
import dummyData from "../../dummyDataAdela";


const Student = props => {
    console.log(props)

    // let role = props.user.role;
    // useEffect(() => {

    //     // console.log(role);
    //     props.getData();
    // },[])

    return (
        <div className="student-Q">
            {/* <Header/> */}
            <div className="student-card">
                {/* <Header/> */}
                <h1> {dummyData[0].title}</h1>
                
                <div className="ticket-discription">
                    <h3>Whats the issue? </h3>{dummyData[0].description}
                </div>

                <div className="tried">
                    <h3>what have you tried?</h3> {dummyData[0].tried}
                </div>

                <div className="more-info">
                    <h3> More info</h3>
                    <p> whatever they input</p>
                </div>
            </div>
            <div className="sidenav">
            <h1>My Queue</h1>

                {/* <a href="#">Open Tickets</a> */}
                {/* <a href="#">Closed Tickets</a> */}
                {/* <a href="#">Messege</a> */}
                {/* <a href="#">Comenets</a> */}
                
                <button>Log out</button>

            </div>
            {/* <button>closed Tickets</button> */}
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {state};
  }
  export default connect(mapStateToProps, { })(Student);
// const mapStateToProps = state => {
//     return {
//         user: {
//             role: state.user.role
//         },
//         isLoggedIn: state.isLoggedIn
//     }

// };

// export default connect(mapStateToProps, { getData })(Student);