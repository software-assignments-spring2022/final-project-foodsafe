import React, {useEffect, useState} from "react"
import {Form, Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Navigate, useNavigate} from 'react-router-dom';
import axios from "axios";
export default function Login() {
    
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");

    useEffect (() =>{
        if (response.success && response.token){
            localStorage.setItem("token", response.token)
        }
    }, [response])

    async function handleLogin (e){
        e.preventDefault()
        
        try{
            const userInfo = {
                username: e.target.username.value,
                password: e.target.password.value,
            }
            const response = await axios.post(`http://localhost:4000/login`,
                            userInfo
            )
            console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
            setResponse(response.data)
        }catch (err){
            setError("Incorrect username or password")
        }
    }

    let navigate = useNavigate ();

    if(response.success){
        return <Navigate to = "/all_sel" />
    }
    else{
        if (localStorage.getItem("token")){
            return(
                <h1>
                    Already logged in
                </h1>
            )
        }
        return(  
            <Card>
                <Card.Body>
                
                    <h1>Login</h1>
                        <Form onSubmit={handleLogin}>
                        <Form.Label>Username </Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" required />
                        
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="password" name="password" placeholder="password" required/>
                        
                        <br/>
                        <Button className = "login_button" type = "submit" > Login</Button>
                        &nbsp;
                        <Button onClick = { () => {navigate("/sign_up")}}className = "register_button" type = "button"> Register</Button>
                        &nbsp;
                        <Button onClick = { () => {navigate("/all_sel")}} className = "continue_button" type = "button"> Continue as Guest</Button>
 
                        </Form>
                    
                    {error? <p className="error">{error}</p> : ""} 
                </Card.Body>
            </Card>
        )
    }
}