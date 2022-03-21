import React from "react"
import {Form, Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate} from 'react-router-dom';

export default function Login() {
    
    let navigate = useNavigate ();
    //let navigate2 = useNavigate ();
    return(  
        <Card>
            <Card.Body>
                <h2 className = "login_text"> Login</h2>
                <Form>
                    <Form.Group id = "user">
                        <Form.Label>User</Form.Label>
                        <Form.Control type = "user" required />
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" required />
                    </Form.Group>

                    <br/>
                    <Button onClick = { () => {navigate("/all_sel")}}className = "login_button" type = "submit"> Login</Button>

                    &nbsp;
                    
                    <Button onClick = { () => {navigate("/sign_up")}}className = "register_button" type = "submit"> Register</Button>

                </Form>
            </Card.Body>
        </Card>
    
    )

}