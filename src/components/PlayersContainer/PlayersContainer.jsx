import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import AvailableSection from "../AvailableSection/AvailableSection";
import SelectedSection from "../SelectedPlayer/SelectedSection";
const PlayersContainer = ({handleActiveState, selected, handleSelectedPlayerState, selectedPlayer, handleDeletPlayer}) => {
    const [players, setPlayers]= useState([]);
    
    useEffect(() => {
        fetch('./Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <>
        {/* PlayersContainer-Header */}
        <div className="flex justify-between items-center mt-11 mb-8">
            <div>
                {selected === "available"? <h1 className="text-2xl font-bold">Available Players </h1> :
                <h1 className="text-2xl font-bold">Selected </h1>} 
            </div>
            <div className="border-2 rounded-xl">
                {/* btn1 */}
                <button 
                onClick={() => handleActiveState ("available")}
                className={`px-[30px] py-[14px] 
                ${selected === 'available'? 'bg-[#E7FE29] rounded-l-xl font-bold text-base': 'text-gray-500 font-normal'}`}>Available</button>

                {/* btn2 */}
                <button 
                onClick={() => handleActiveState ("selected")} 
                className={`px-[30px] py-[14px]  
                ${selected === 'selected'? 'bg-[#E7FE29] rounded-r-xl font-bold text-base' : ' text-gray-500 font-normal'}`}>Selected({selectedPlayer.length})</button>
            </div>
        </div>
        <div>
        </div>

        {
            selected === 'available'? 
            <AvailableSection 
            handleSelectedPlayerState={handleSelectedPlayerState}
            players={players}></AvailableSection> : 
            <SelectedSection 
            handleDeletPlayer={handleDeletPlayer}
            selectedPlayer={selectedPlayer}
            ></SelectedSection>
        }
        </>
    );
};
PlayersContainer.propTypes ={
    handleActiveState: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    handleSelectedPlayerState: PropTypes.func.isRequired,
    selectedPlayer: PropTypes.object.isRequired
}

export default PlayersContainer;