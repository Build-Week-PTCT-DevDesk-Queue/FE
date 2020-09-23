import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

   console.log( rest.computedMatch.params.id )

   const checkAuth = () => {
      if( rest.computedMatch.params.id !== null){
         return true;
      }else{
         return false;
      }
    };

   return (
   <Route
     {...rest}
     render={props =>
       checkAuth() === true ? (
         <Component {...props} />
       ) : (
         <Redirect to={"/login"}/>
       )
     }
   />
   );

   };
   
 export default PrivateRoute;
