import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PlayersContainer from "./components/PlayersContainer/PlayersContainer";


function App() {
  const [selected, setSelected] = useState('available');
  const [increaseCoin, setIncreaseCoin] = useState(0);

  const handleActiveState = (btn) => {
    setSelected(btn);
  }

  const increaseCoinState = () =>{
    if(increaseCoin === 0){
      setIncreaseCoin(100000)
    }
    else{
      alert("Coins have already been added!")
    }
  }

  return (
    <div className=" className=' max-w-7xl mx-auto px-6'">
      <Navbar
      increaseCoin = {increaseCoin}
      ></Navbar>
      <Banner
      increaseCoinState = {increaseCoinState}
      ></Banner>
      <PlayersContainer 
      selected={selected}
      handleActiveState={handleActiveState}      
      ></PlayersContainer>
    </div>
  );
}

export default App;
