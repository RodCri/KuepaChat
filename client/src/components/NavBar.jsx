// eslint-disable-next-line no-unused-vars
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom"
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <Navbar className={styles.navbar}> 
      <Container className={styles.navbar__container}>
        <div className={styles.navbar__containerLogo}>
          <Link to="/"><img className={styles.navbar__logo} src={logo} alt="" /></Link>
        </div>
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        <div className={styles.navbar__containerOptions}>
          <Link to="/register" className={styles.nav__link}>
            <li className={styles.nav_item}>Register</li>
          </Link>
          <Link to="/login" className={styles.nav__link}>
            <li className={styles.nav__item}>Login</li>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}
