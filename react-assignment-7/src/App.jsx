import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './Banner/Banner';

function App() {
  const [userCoin, setUserCoin] = useState(0);

  const handleUserCoin = () => setUserCoin(previous => previous + 100)

  return (
    <>
      <Navbar userCoin ={userCoin}></Navbar>
      <Banner handleUserCoin={handleUserCoin}></Banner>
    </>
  )
}

export default App
