import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import HeaderPart from "./HeaderPart";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sign, setSign]=useState(false)


const handleSignup=()=>{
auth.createUserWithEmailAndPassword(email, password)
  .then((ok) => {
   alert("created")
    //console.log("done")
    setSign(true)

    // ...
  })
  .catch((error) => {
    console.log("not")
    // ..
  });
}
   
    return (
        
        <div >
          {!sign?
          <div className="Signup">
             <h3 className="signup-head">SignUp</h3>
        <div className="signup-inputs">
        <input className="name" type="text" label="Name" placeholder="Enter Name"  onChange={(e)=> setName(e.target.value)}/>
        <input className="sign-email" type="email" label="Email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}/>
        <input className="pass" type="password" label="password" placeholder="Enter password"  onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="signup-button">
            <button onClick={handleSignup} className="signup-btn">Signup</button>
            <p className="already">Already have an account?
            
                <span>
                    <Link to='/login' className="login-link">Login</Link>
                </span>
            </p>
        </div>
        </div>
        :console.log('thk')}
        {sign?<HeaderPart/>:console.log("error")}
       </div>
    )
}
export default SignUp