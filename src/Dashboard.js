import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Dashboard = () => {
    const url = "http://localhost:5760/users/verifytoken"
    useEffect(() => {
        axios.get(url, {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
        })
    }, [])

   
    // const authenticate = () => {
    //     let token = localStorage.getItem('token')
    //     console.log(token)
    //     axios.post(url, {token:token}).then((res)=>{
    //         console.log(res)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }

    return (
        <>
            <h1>Dashboard</h1>
        {/* <button onClick={authenticate}>Authenticate</button> */}
        </>
    )
}

export default Dashboard