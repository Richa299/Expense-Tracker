import { keyboard } from "@testing-library/user-event/dist/keyboard"
import React, { useEffect, useState } from "react"
import { useRef } from "react";
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { auth, db } from "../firebaseConfig"
import { useAuthState } from 'react-firebase-hooks/auth';


function HeaderPart() {
    const [balance, setBalance] = useState(0)
    const [numInput, setNumInput] = useState('')
    const [textInput, setTextInput] = useState('')
    const expenseValue = useRef('')
    const itemValue = useRef('')
    const [data, setData] = useState([])

    const [list, setList] = useState([]);
    const itemRef = db.collection('items')
    const [user] = useAuthState(auth);

    const handleBalance = () => {
        const {uid} = auth.currentUser
        if (numInput && textInput && (textInput.length > 0)) {
            const data = {
                userid:uid,
                item: textInput,
                pricing: numInput
            };
            itemRef.add(data)
                .then(() => {
                    setNumInput('')
                    setTextInput('')
                    keyboard.dismiss()
                })

            setBalance(
                balance + parseInt(expenseValue.current.value))
            setList([{userid:uid, 
                 text: itemValue.current.value,
                 price: expenseValue.current.value}, ...list])
        }
    }
    useEffect(() => {
        if (user) {
            handleBalance();
        }
    }, []);

    const fetchUserResult = () => {
        const {uid}=auth.currentUser
        const itemRef = db.collection('items');
        const tempData = []

        itemRef.where("userid", "==",uid).get().then((snapShot) => {
            snapShot.docs.forEach((doc) => {
                tempData.push({ ...doc.data() })
            })
            setData(tempData)
        });
    }

    useEffect(() => {
        fetchUserResult()
    }, [])

    const handleExpense = () => {
        setNumInput(parseInt(expenseValue.current.value))
    }
    const handleItem = () => {

        setTextInput(itemValue.current.value)
    }

    const handleExit=()=>{
        <Link to='/signup' className="sign-link"></Link>
    }




    return (
        <div className="header">
            <div className="heading">
                <h2>Expense Tracker </h2> 
                <Link to='/signup' className="exit-app">LogOut</Link>
            </div>
            
            <div className="item">
                <input className="add-item" 
                       type="text" 
                       placeholder="Item"  
                       ref={itemValue} 
                       onChange={handleItem} 
                       value={textInput} />

                <input className="add-price" 
                        type="number" 
                        placeholder="Amount" 
                        ref={expenseValue} 
                        onChange={handleExpense} 
                        value={numInput} />
            </div>
            <div className="transactions">
                <button onClick={handleBalance} className="add">Add Transactions</button>
                     
                <hr className="line"></hr>
            </div>

           
            <div className="current">
                Current Transactions
            </div>
            <div className="one">
                <p className="items-heading">Items</p>
                <p className="price-heading">Amount</p>
                </div>
            <div className="current-part">
                {list.map(list => (
                    <Footer text={list.text} price={list.price} />
                ))
                }
                </div>
             <div className="previous">
                Previous Transactions
                
             </div>
            <div className="transactions-lower">
                {data.map(i => (
                   <div className="trans">
                     <p className="list">{i.item}</p>
                    <p className="price">${i.pricing}</p>
                   </div>
                ))}
            </div>
        </div>
    )
}
export default HeaderPart