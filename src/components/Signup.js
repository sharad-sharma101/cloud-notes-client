import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../img/style.css'

const Signup = (props) => {
        const [credentials, setCredentials] = useState({name:"" , email: "", password: "", cpassword:""}) 
        let history = useNavigate();
    
        const handleSubmit = async (e) => {
            props.showAlert("wait few second for your application to succesed","primary");
            e.preventDefault();
            const {name,email,password} = credentials;
            const response = await fetch("https://cloud-notes-backend.onrender.com/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: credentials.name ,email: credentials.email, password: credentials.password})
            });
            const json = await response.json()
            console.log(json);
            if (json.success){
                // Save the auth token and redirect
                props.showAlert("congrates","success")
                localStorage.setItem('token', json.authtoken); 
                history("/");
    
            }
            else{
                props.showAlert("invalid credentials ","erorr")
                alert("Invalid credentials");
            }
        }
    
        const onChange = (e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    return (
        <>
        <div className='my-5' id='pagesu'>
          <h1>Sign up</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' placeholder="name" onChange={onChange} minLength={4} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={6} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='password' onChange={onChange} minLength={6} required />
                </div>
                <button type="submit" className="btn btn-primary my-4">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Signup

//localhost:5000/api/auth/createuser