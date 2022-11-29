import { useState } from 'react';
import './App.css';
import { DashBoardCommercialista } from './components/layout/DashBoardCommercialista/DashBoardCommercialista';
import { LoginComponent } from './LoginComponent/LoginComponent';

function App() {
  const [showLogin,setShowLogin] = useState(true)

  const handleLogin = ()=>{
    setShowLogin(!showLogin)
  }

  return (
    <div className="App">
      {true && <DashBoardCommercialista></DashBoardCommercialista> }
    {/* { showLogin && <LoginComponent handleLogin={handleLogin}></LoginComponent> } */}
    </div>
  );
}

export default App;
