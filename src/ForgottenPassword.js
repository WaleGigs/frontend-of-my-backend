import React, { useState } from 'react'
import axios from 'axios'
const ForgottenPassword = () => {
    
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;

    const data = {email, password}
    const url = "http://localhost:5760/users/resetpassword"
    const forgotPassword = () =>{
        console.log(data)
        axios.post(url, data).then((res) => {
            console.log(res)
            alert(res.data.message)
        }).catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })
    }
    return (
        <>
           <div className="col-7 shadow-lg mx-auto px-5">
                <h6 className="display-6 text-muted text-center">Forgot Password</h6>
                <input placeholder="Email" className="my-2 form-control" type="text" onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder="New password" className="my-2 form-control" type="text" onChange={(e)=>setPassword(e.target.value)} />
                <button className="my-2 btn btn-outline-dark" onClick={forgotPassword}>Reset Password</button>
            </div>  
        </>
    )
}

export default ForgottenPassword
