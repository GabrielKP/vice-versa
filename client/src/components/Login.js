import React from 'react'
import { Container, Button, Card, Image } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className='d-flex w-100 align-items-center
    justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '200px' }}>
        <>
          <Container className='text-center'>
            <Image className='w-100' src='./logo512.png' fluid />
            <Button className='w-100 mt-4'
              type='submit'
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          </Container>
        </>
      </div>
    </Container>
  )
}

export default Login
