import {Alert, Button, Form, Row, Col, Stack} from"react-bootstrap";
import styles from './Login.module.css';

export const Login = () => {
  return (
    <>
    <Form className={styles.form__login}>
      <h2 className={styles.login__title}>Login</h2>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Stack gap={4}>
              <Form.Group>
                <Form.Label className={styles.form__label}>UserName</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Please enter your username" />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>Password</Form.Label>
              <Form.Control type="password" size="lg" placeholder="**********" />
              </Form.Group>
              <Button className={styles.form__cta} size="lg" type="submit">
                Login
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
