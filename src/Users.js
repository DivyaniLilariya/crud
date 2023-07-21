import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Users() {
    let navigate = useNavigate()
    const[user,setUaser] = useState({
        name:"",
        username:"",
        phonenumber:"",
        email:""
    })
    const handleChange=(e)=>{
      
        setUaser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3001/posts",user);
        navigate(-1)
    }
  return (
    <div className='container'>
<div className='w-75 mx-auto shadow p-5 mt-5'>
    <h2 className='text-center mb-4'>Add a user</h2>
    <form onSubmit={e=> onSubmit(e)}>
        <div className='form-group mt-2' >
            <input type="text" className="form-control form-control-lg" placeholder="enter your name " name="name" value={user.name} onChange={e => handleChange(e)}/>
        </div>
        <div className='form-group mt-2'>
            <input type="text" className="form-control form-control-lg" placeholder="enter your username " name="username"  value={user.username} onChange={e => handleChange(e)} />
        </div>
        <div className='form-group mt-2'>
            <input type="number" className="form-control form-control-lg" placeholder="enter your phone" name="phonenumber"  value={user.phonenumber} onChange={e => handleChange(e)}/>
        </div>
        <div className='form-group mt-2'>
            <input type="email" className="form-control form-control-lg" placeholder="enter your email " name="email"  value={user.email} onChange={e => handleChange(e)}/>
        </div>
        <button className='btn btn-primary btn-block mt-4'>Add User</button>
    </form>
</div>
    </div>
  );
}

export default Users;