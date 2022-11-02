import { useState } from "react";
import { Link } from "react-router-dom"
import {auth} from '../firebaseConfig';
import HeaderPart from "./HeaderPart";


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin]=useState(false)
    const handleLogin=()=>{
        auth.signInWithEmailAndPassword(email, password)
          .then((ok) => {
           alert("logged")
            console.log("done")
            setLogin(true)
            // ...
          })
          .catch((error) => {
            console.log("not")
            // ..
          });
        }
    return (
       <div>
        {!login?
          <div className="login">
            <h3 className="login-head">Login</h3>
        <div className="login-inputs">
        <input className="log-email" type="email" label="Email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        <input className="pass" type="password" label="password" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        
        <div className="login-button">
            <button onClick={handleLogin} className="login-btn">Login</button>
            <p className="dont">Don't have an account?
                <span>
                    <Link to='/signup' className="sign-link">SignUp</Link>
                </span>
            </p>
        </div>
        </div>
        :console.log("login bad")}
        {login?<HeaderPart/>:console.log("error")}
       </div>
       
    )
}
export default Login