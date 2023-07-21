import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
    let navigate = useNavigate()
    const {id} = useParams();

    const[users,setUaser] = useState({
        name:"",
        username:"",
        phonenumber:"",
        email:""
    })
    const handleChange=(e)=>{
      
        setUaser({...users,[e.target.name]:e.target.value})
    }
    useEffect(() => {
        async function getDetails() {
            try {
                const names = await axios.get(`http://localhost:3001/posts/${id}`)
  
                setUaser(names.data);
  
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getDetails();
    }, [id])

    const onSubmit = async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3001/posts/${id}`,users);
        navigate(-1)
    }
    

    

    
  return (
    <div className='container'>
<div className='w-75 mx-auto shadow p-5 mt-5'>
    <h2 className='text-center mb-4'>Edit a user</h2>
    <form onSubmit={e=> onSubmit(e)}>
        <div className='form-group mt-2' >
            <input type="text" className="form-control form-control-lg" placeholder="enter your name " name="name" value={users.name} onChange={e => handleChange(e)}/>
        </div>
        <div className='form-group mt-2'>
            <input type="text" className="form-control form-control-lg" placeholder="enter your sname " name="sname"  value={users.username} onChange={e => handleChange(e)} />
        </div>
        <div className='form-group mt-2'>
            <input type="text" className="form-control form-control-lg" placeholder="enter your phone" name="phonenumber"  value={users.phonenumber} onChange={e => handleChange(e)}/>
        </div>
        <div className='form-group mt-2'>
            <input type="text" className="form-control form-control-lg" placeholder="enter your email " name="email"  value={users.email} onChange={e => handleChange(e)}/>
        </div>
        <button className='btn btn-warning btn-block mt-4'>Updata User</button>
    </form>
</div>
    </div>
  );
}

export default Edit;