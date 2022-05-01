import React, {useState} from "react"
import {Form, Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate} from 'react-router-dom';
import axios from "axios";

export default function Signup() {
    const [response, setResponse] = useState({});

    let navigate = useNavigate();

    async function handleRegister (e){
        e.preventDefault()

        try{
            const userInfo = {
                username: e.target.username.value,
                password: e.target.password.value,
            }
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}register`,
                            userInfo
            )
            console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
            setResponse(response.data)
            navigate ("/sign_in")
        }catch (err){
            console.log("error occured")
        }
    }
    return(  
        <Card>
                <Card.Body>
                
                    <h1>Sign Up</h1>
                        <Form onSubmit={handleRegister}>
                        <Form.Label>Username </Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" required />
                        
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="password" name="password" placeholder="password" required />
                        
                        <br/>
                        <Button className = "login_button" type = "submit" > Sign Up</Button>
                        &nbsp;
                        <Button onClick = { () => {navigate("/sign_in")}}className = "register_button" type = "button"> 
                        Already Got an Account</Button>

                        </Form>
                    
                    
                </Card.Body>
            </Card>
    
    )

}