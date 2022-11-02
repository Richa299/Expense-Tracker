import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

.list-items{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:blue;
}
.items{
    // display:flex;
    // align-items:center;
    // flex-direction:column;
}
.login{
    background-image:linear-gradient(to right, #1A2980 , #26D0CE);
   //background-image:linear-gradient(to right, #1D2B64 , #F8CDDA);
    margin:auto;
    width:40vw;
    height:50vh;
    border-radius:10px;
}
.Signup{
    background-color:wheat;
    margin:auto;
    width:40vw;
    height:60vh;
    background-image:linear-gradient(to right, #1A2980 , #26D0CE);
    border-radius:10px;
}
body{
    // background-color:yellow;
}
.login-inputs{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.signup-inputs{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
input{
    border-radius:5px;
    
}
.trans{
    background-color: #2f2834;
    max-height: 5vh;
    width:30vw;
    font-family:Monaco;
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    // margin-left: 10px;
    // text-align: center;
    // margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
}

.header{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:40vw;
    margin:auto;
    border-radius:10px;
    background-image:linear-gradient(to right, #1D2B64 , #F8CDDA);
}

.transactions-lower{
    height: fit-content;
    margin-bottom: 1rem;
    max-height: 40vh;
    overflow-y: auto;
    // width: 100%;
}
.login-btn{
  margin-top:40px;
  width:80px;
  color:yellow;
  padding:5px;
  font-size:20px;
  font-family:Monaco;
  border-radius:5px;
  border:1px solid WHITE;
  box-shadow: 2px 2px white;
  background-color:blue  ;
  cursor:pointer;
}
.signup-btn{
    margin-top:40px;
    width:80px;
    color:yellow;
    padding:5px;
    font-size:20px;
    font-family:Monaco;
    border-radius:5px;
    border:1px solid white;
    background-color:blue ;
    cursor:pointer;
  }
.dont{
    font-size:17px;
    font-family:Monaco
}
.already{
    font-size:17px;
    font-family:Monaco
}
.login-inputs input{
    border:none;
    height:30px;
    width:25vw;
    padding:5px;
    border:1px solid gray;
}
.signup-inputs input{
    border:none;
    height:30px;
    width:25vw;
    padding:5px;
    border:1px solid gray;
}
.pass{
    margin-top:20px;
}
.name{
    margin-top:20px;
}
.login-head, .signup-head{
    font-size:35px;
    font-family:Monaco;
   margin:auto;
   color:white;
   text-shadow: 5px 1px 2px black;
}
.log-email, .sign-email{
    margin-top:20px
}
.sign-link, .login-link{
    text-decoration:none;
    color: blue;
    margin-left:5px
}
.heading{
    font-family:Monaco;
    color:white;
    font-size:40px;
    text-shadow: 3px 1px 2px black;
}
.one{
    background-color: transparent;
    max-height: 5vh;
    width:30vw;
    display: flex;
    flex-direction: row;
    color:white;
    font-weight:700;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    // margin-left: 10px;
    // text-align: center;
    // margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
}

.add{
    margin-top:10px;
    background-color:darkblue;
    padding: 9px;
    border-radius: 5px;
    color:white;
    border:2px solid white;
    cursor:pointer;
}
.line{
    width:40vw;
}
.item input{
    margin-top:20px;
    height:4vh;
    border-radius: 5px;
    color:black;
    border:1px solid blue;

}
.add-price{
    margin-left:5px;
}
.current, .previous{
 font-size:20px;
 font-family:Monaco;
 font-weight:600;
 margin-top:30px
}
.previous{
    margin-top:20px
}


.part{
    background-color: #2f2834;
    max-height: 5vh;
    width:30vw;
    font-family:Monaco;
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    padding: 5px;
    border-radius: 5px;
}
.current-part{
    height: fit-content;
    margin-bottom: 1rem;
    max-height: 20vh;
    overflow-y: auto;
}

`;