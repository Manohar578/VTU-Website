import React from "react";
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Row className="text-center py-3 my-2">
                <Col md={12}>
                    <p>Visvesvaraya Technological University &copy; {currentYear}</p>
                </Col>
            </Row>
        </footer>
    );
}
export default Footer;