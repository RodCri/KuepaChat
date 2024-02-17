import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Alert, Button, Form, Row, Col, Stack} from"react-bootstrap"
import styles from './Register.module.css';

export const Register = () => {
  const { registerInfo,updateRegisterInfo } = useContext(AuthContext);
  const rolUsers = {
    options: [
      {
        name: 'Select...',
        value: null,
      },
      {
        name: 'Student',
        value: 'Student',
      },
      {
        name: 'Moderator',
        value: 'Moderator',
      }
    ],
    value: '?',
  };
  const { options, value } = rolUsers;
  return (
    <>
      <Form className={styles.form__register}>
        <h2 className={styles.register__title}>
          Register
        </h2>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Stack gap={4}>
            <Form.Group>
                <Form.Label className={styles.form__label}>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  size="lg" 
                  placeholder="Please enter your name" 
                  onChange={(e) => 
                  updateRegisterInfo({...registerInfo,nameUser: e.target.value})} 
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>UserName</Form.Label>
                <Form.Control 
                  type="text" 
                  size="lg" 
                  placeholder="Please enter your username" 
                  onChange={(e)=>
                  updateRegisterInfo({...registerInfo,userName: e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  size="lg" 
                  placeholder="*******" 
                  onChange={(e)=>
                  updateRegisterInfo({...registerInfo,userName: e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.form__label}>Rol User</Form.Label>
                <Form.Select 
                  size="lg"
                  value={value}
                  onChange={(e)=>
                  updateRegisterInfo({...registerInfo,rolUser: e.target.value})}
                >
                  {options.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  ))}
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
