import {Alert, Button, Form, Row, Col, Stack} from"react-bootstrap";
import styles from './Login.module.css';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

  const {loginUser,loginInfo,updateLoginInfo,loginError,isLoginLoading} = useContext(AuthContext)
  
  return (
    <>
    <Form 
      className={styles.form__login}
      onSubmit={loginUser}
    >
      <h2 className={styles.login__title}>Login</h2>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Stack gap={4}>
              <Form.Group>
                <Form.Label className={styles.form__label}>
                  UserName
                </Form.Label>
                <Form.Control 
                  type="text" 
                  size="lg" 
                  placeholder="Please enter your username" 
                  onChange={(e) => updateLoginInfo({...loginInfo, userName: e.target.value})}  
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>
                  Password
                </Form.Label>
                <Form.Control 
                  type="password" 
                  size="lg" 
                  placeholder="**********" 
                  onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}
                />
              </Form.Group>
              <Button className={styles.form__cta} size="lg" type="submit">
                {
                  isLoginLoading ? "Trying to enter" : "Login" 
                }
              </Button>
              {
                loginError?.error && (
                  <Alert variant="danger">
                    <span className={styles.error}>{loginError?.message}</span>
                  </Alert>
                )
              }
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}
