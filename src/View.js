import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const View = () => {
  const[data, setdata] = useState({
    name:"",
    username:"",
    phonenumber:"",
    email:""
  })
  const {id}= useParams();

  useEffect(() => {
    async function getDetails() {
        try {
            const names = await axios.get(`http://localhost:3001/posts/${id}`)

            setdata(names.data);

        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    getDetails();
}, [id])

  
  return (
    <div className='container py-4'>
      <Link className="btn btn-primary" to="/">Back to Home</Link>
      <h1 className='display-4'>User id : {id}</h1>
      <hr />
      <ul className='list-group w-50'>
        <li className='list-group-item'>name :  {data.name}</li>
        <li className='list-group-item'>name :  {data.username}</li>
        <li className='list-group-item'>name :  {data.email}</li>
      </ul>
    </div>
  )
}

export default View