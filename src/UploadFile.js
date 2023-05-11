import React from 'react'
import axios from 'axios'
import {  useState } from 'react'

const UploadFile = () => {
    
    const url2 = "http://localhost:5760/users/upload"

   

    const [files, setFiles] = useState('')
    const [data, setData] = useState([])

    const pickfile = (e) => {
        const file = e.target.files[0]
        // console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result
            setFiles(result)
        }
    }

    console.log(files)

    const uploadPicture = () =>{
        axios.post(url2, {files:files}).then((result)=>{
            console.log(result.data)
            setData(result.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(data, 33)

    return (
        <>
           
            <input className='form-control' type="file" onChange={(e)=>pickfile(e)} />
            <button className='btn btn-primary' onClick={uploadPicture}>Upload picture</button>
            <img src="https://res.cloudinary.com/woleogunba/image/upload/v1683822315/uwtlqtxsu1ct4wycjdzl.jpg" alt="" />
        </>
    )
}

export default UploadFile