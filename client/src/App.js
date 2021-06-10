import './App.css';
import Login from './components/Login';
import RoomView from './components/RoomView';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const vvStyle = {
    backgroundColor: 'rgb(209, 255, 227)',
    height: '100vh',
    minHeight: '100vh'
  }

  if (isLoading) {
    return (
      <div style={vvStyle}>
        <img src='logo512.png' alt='logo' class='logo'></img>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div>
        <RoomView />
      </div>
    );
  } else {
    return (
      <div style={vvStyle}>
        <Login />
      </div>
    )
  }
}

export default App;
