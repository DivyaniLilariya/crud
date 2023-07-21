import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const[users,setusers] = useState([]);

  const navigate = useNavigate()

  const loadusers = async()=>{
    const result = await axios.get("http://localhost:3001/posts")
    setusers(result.data)
  }

  useEffect(()=>{
    loadusers()
   },[])

   const deletetUser =async(id)=>{

  await axios.delete(`http://localhost:3001/posts/${id}`);

loadusers();
   }
  return (
    <div className='container'>
       <Link className='btn btn-outline-primary'to="/users/add">Add User</Link>

        <div className='py-4'>

        <table striped bordered hover className='table border shadow'>
      <thead className='thead-dark'>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,index)=>(
           <tr>
           <th scope='row'>{index+1}</th>
           <td>{user.name}</td>
           <td>{user.username}</td>
           
           <td>{user.email}</td>
           <td>{user.phonenumber}</td>
          <td>
       <button className='btn btn-primary mr-2' onClick={() => navigate(`/users/edit/${user.id}`)}>Edit</button>
       <button className='btn btn-primary mr-2' onClick={() => navigate(`/users/${user.id}`)}>View</button>
       <button className='btn btn-danger' onClick={ () => deletetUser(user.id)}>Delete</button>
          </td>
           </tr>
          ))}
      </tbody>
    </table>
          </div>
    </div>
  )
}

export default Home