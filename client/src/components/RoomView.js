import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header'

const RoomView = () => {
    const { logout } = useAuth0();

    return (
        <div>
            <Header />
            <Button type='submit' onClick={() => logout()}>Log out</Button>
        </div>
    )
}

export default RoomView
