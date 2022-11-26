import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
    return (
        <>
            <div class="form-group">
                <h3 className="tituloContac">Ready to connect with me?</h3>
            </div>
            <div className='contenedorcontacto'>

                <Row>
                    <Col>
                        <h3 className='text-start'> Let’s Connect! </h3>
                    </Col>
                    <br /><br /><br />
                </Row>
                <Form className='text-start align-items-left'>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="First Name" />

                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control type='text' placeholder='Email Adress' />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control as='textarea' type='text' placeholder='Email Adress' />
                        </Col>
                    </Row>
                    <br />
                    <Button variant="primary" type="submit">
                        Get in Touch
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Contact;