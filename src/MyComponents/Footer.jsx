import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";

function Footer(props){

    const [userResult, setUserResult]=useState([]);
    const [user] = useAuthState(auth);
    
    
    return (
       
        
            <div className="listing">
              <div className="part">
            <p className="list">{props.text}</p>
            <p className="price">${props.price}</p>
        </div>
            </div>
          
       
    
    )
}
export default Footer