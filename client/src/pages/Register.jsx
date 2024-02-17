import {Alert, Button, Form, Row, Col, Stack} from"react-bootstrap"

export const Register = () => {
  return (
    <>
      <Form>
        <Row>
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control type="text" placeholder="Name" />
              <Button></Button>
              <Alert></Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}
