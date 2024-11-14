import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PlayersContainer from "./components/PlayersContainer/PlayersContainer";
import Footer from "./components/Footer/Footer";


function App() {
  // toggle btn state
  const [selected, setSelected] = useState('available');

  // banner section coin increase state
  const [increaseCoin, setIncreaseCoin] = useState(0);

  // player selected state
  const [selectedPlayer, setSelectedPlayer] = useState([])

  // toogle btn func
  const handleActiveState = (btn) => {
    setSelected(btn);
  }

  // banner section coin increase func
  const increaseCoinState = () =>{
      setIncreaseCoin(increaseCoin + 6000000)
  }

  // player selected func
  const handleSelectedPlayerState = (player) => {
    const isSelected = selectedPlayer.find((p) => p.playerId === player.playerId);
    if(isSelected){
      console.log("nai")
      alert("Alredy Selected this player");
    }
    else{
      console.log('not enough coin')
      if(increaseCoin - player.biddingPrice < 0){
        alert("Not enough coin")
        return;
      }
      const newselectedplayer = [...selectedPlayer, player]
      setSelectedPlayer(newselectedplayer);
      const newDecreaseValue = increaseCoin - player.biddingPrice;
      setIncreaseCoin(newDecreaseValue)
    }

    
  }


  
  // delete Player in selected section func
  const handleDeletPlayer = (id) => {
    const newRemainingPlayer = selectedPlayer.filter((pla) => pla.playerId != id)
    setSelectedPlayer(newRemainingPlayer)
    const deletPlayer = selectedPlayer.find((pla) => pla.playerId === id)
    setIncreaseCoin(increaseCoin + deletPlayer.biddingPrice)
    
  }

  return (
    <div className="w-[1601px] mx-auto px-6">
      <Navbar
      increaseCoin = {increaseCoin}
      ></Navbar>
      <Banner
      increaseCoinState = {increaseCoinState}
      ></Banner>
      <PlayersContainer
      handleDeletPlayer={handleDeletPlayer} 
      selectedPlayer={selectedPlayer}
      handleSelectedPlayerState={handleSelectedPlayerState}
      selected={selected}
      handleActiveState={handleActiveState}      
      ></PlayersContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
