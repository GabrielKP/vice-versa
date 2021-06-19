import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  const { user } = useAuth0();

  return (
    <>
      <Navbar bg="light" className="d-flex py-2 px-4">
        <Navbar.Brand href="/">
          <img
          src="/logo512.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Vice Versa Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hallo {user.name}!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
