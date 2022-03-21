import React from "react"
import {Form, Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate} from 'react-router-dom';


export default function Signup() {
    let navigate = useNavigate();
    return(  
        <Card>
            <Card.Body>
                <h2 className = "signup_text"> Sign Up</h2>
                <Form>
                    <Form.Group id = "user">
                        <Form.Label>User</Form.Label>
                        <Form.Control type = "text" required />
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" required />
                    </Form.Group>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" required />
                    </Form.Group>
                    <br/>
                    <Button className = "login_button" type = "submit"> Sign Up</Button>
                    &nbsp;
                    <Button onClick = { () => {navigate("/sign_in")}}className = "register_button" type = "submit"> Already Got An Account</Button>

                </Form>
            </Card.Body>
        </Card>
    
    )

}