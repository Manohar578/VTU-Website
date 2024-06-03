import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

const ResultComponent = () => {
    const [registerInput, setRegisterInput] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const resultPageHandler = (e, id) => {
        e.preventDefault();
        if (registerInput === '') {
            setError('Please enter your USN');
        } else {
            axios.get('http://localhost:3002/studentInfo')
                .then((response) => {
                    const student = response.data.map(data => data.regitserId === id);
                    if (student) {
                        navigate(`/resultPage/${id}`);
                    } else {
                        setError("Invalid USN");
                    }
                })

        }
    }
    return (
        <>
            <Link to='/' className="btn btn-dark mx-5 my-3">Go Back</Link>
            <Container className="my-3">


                <Row className="justify-content-center my-3">
                    <Col md={6}>
                        <h3 style={{ textAlign: 'center' }}>Check Your Results...</h3>
                        <Form onSubmit={(e) =>
                            resultPageHandler(e, registerInput)} className="my-3">
                            <Form.Group controlId="register">
                                <Form.Label>Enter Your Register Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter USN Number" value={registerInput} onChange={(e) => setRegisterInput(e.target.value)} />
                            </Form.Group>
                            <Button className="my-3" type="submit" >Submit</Button>
                        </Form>
                        {
                            error ? <div className="text-danger">{error}</div> : null
                        }

                    </Col>
                </Row>

            </Container>
        </>
    );
};
export default ResultComponent;