import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

export const AddUser = () =>{

    const navigate=useNavigate();
    const [state,setState]=useState({
        name:"",
        email : "",
        contact:"",
        address:""
    });
    const {name, email, contact, address} = state;
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) =>{
        let {name, value} =e.target;
        setState({...state, [name]:value})
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            if(!name || !address || !email || !contact) {
                setError ("please input all input fields")
            }
            else {
                dispatch(addUser(state))
                navigate("/").
                setError('');
            }
    };
    return(<div>
        
        <h2>Add User </h2>
        {error && <h3 style={{color:'red'}}>{error}</h3>}
                 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <form onSubmit={handleSubmit}>
        
     <TextField id="standard-basic" label="Name" variant="standard" value={name} type="text" name = "name" onClick={handleInputChange} /><br/>
      <TextField id="standard-basic" label="email" variant="standard" value={email} type="email" name = "email" onClick={handleInputChange}/> <br/>
      <TextField id="standard-basic" label="Contact no." variant="standard" value={contact} type="number" name = "contact" onClick={handleInputChange}/><br/>
      <TextField id="standard-basic" label="Address" variant="standard" value={address} type="text" name = "address" onClick={handleInputChange}/><br/>
      <Button variant = "contained" color="primary" >submit</Button><br/><br/>
      <Button variant = "contained" color="secondary" onClick={()=>{navigate("/")}}>Go Back</Button>

     </form>
    
    </Box>
    </div>)
}