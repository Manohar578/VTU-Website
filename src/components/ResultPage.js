import React, { useState, useEffect } from "react";
import { Row, Container, Col, Form } from 'react-bootstrap'
import TableData from "./TableData";
import { useParams } from "react-router-dom";
import axios from "axios";


const ResultPage = () => {
    const [studentDetails, setStudentDetails] = useState([]);
    const value = useParams();

    useEffect(() => {
        axios.get('http://localhost:3002/studentInfo')
            .then((response) => {
                response.data.map((item) => {
                    if (item.registerId === value.id) {
                        setStudentDetails(item)
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [value])


    return (
        <Container>
            <Row className="my-3">
                <Col className="text-center">
                    <h5>Visvesvaraya Technological University,Belguam</h5>
                    <h6 className="h6-style">VII-Semester B.E Examination Result, Nov/Dec.2023</h6>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form>
                        {
                            studentDetails !== undefined &&
                            <Form.Group controlId="studentName">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Label style={{ marginLeft: '6rem' }}>{studentDetails.studentName}</Form.Label><br />
                                <Form.Label>Father/Mother's Name</Form.Label>
                                <Form.Label style={{ marginLeft: '1.5rem' }}>{studentDetails.fatherName}</Form.Label><br />
                                <Form.Label>College Name</Form.Label>
                                <Form.Label style={{ marginLeft: '6.3rem' }}> {studentDetails.collegeName}</Form.Label>
                            </Form.Group>
                        }

                    </Form>
                </Col>
                <Col>
                    <Form style={{ float: 'right' }}>
                        {
                            studentDetails !== undefined &&
                            <Form.Group controlId="registerId">
                                <Form.Label>USN No:</Form.Label>
                                <Form.Label>{studentDetails.registerId}</Form.Label>
                            </Form.Group>}

                    </Form>
                </Col>
            </Row>
            <TableData studentId={studentDetails.registerId} />
        </Container>
    )
}
export default ResultPage;