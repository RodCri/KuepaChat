import {Alert, Button, Form, Row, Col, Stack} from"react-bootstrap"
import styles from './Register.module.css';

export const Register = () => {
  return (
    <>
      <Form className={styles.form__register}>
        <h2 className={styles.register__title}>Register</h2>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Stack gap={4}>
            <Form.Group>
                <Form.Label className={styles.form__label}>Name</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Please enter your name" />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>UserName</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Please enter your username" />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>Password</Form.Label>
                <Form.Control type="password" size="lg" placeholder="*******" />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>Rol User</Form.Label>
                <Form.Select size="lg">
                  <option value="student">Student</option>
                  <option value="moderator">Moderator</option>
                </Form.Select>
              </Form.Group>
              <Button size="lg" type="submit">
                Register
              </Button>
              <Alert variant="danger">
                <p>Error!</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}
