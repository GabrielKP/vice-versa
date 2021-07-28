import { Button, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header'
import Room from './Room'

const RoomView = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Header />
      <Container className='d-flex w-100 align-items-center
      justify-content-center'
      >
        <Room />
      </Container>
      <Container className='d-flex w-100 align-items-center
      justify-content-center'
      >
        <Room />
      </Container>
      <Button
        type='submit'
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log out
      </Button>
    </>
  )
}

export default RoomView
