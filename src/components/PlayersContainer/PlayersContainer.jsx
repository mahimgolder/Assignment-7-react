import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import AvailableSection from "../AvailableSection/AvailableSection";
import SelectedSection from "../SelectedPlayer/SelectedSection";
const PlayersContainer = ({handleActiveState, selected}) => {
    const [players, setPlayers]= useState([]);
    
    useEffect(() => {
        fetch('./Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <>
        <small className="text-[8px]">PlayersContainer.jsx</small>
        {/* PlayersContainer-Header */}
        <div className="flex justify-between items-center mt-11 mb-8">
            <div>
                <h1 className="">Available Players</h1>
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
                ${selected === 'selected'? 'bg-[#E7FE29] rounded-r-xl font-bold text-base' : ' text-gray-500 font-normal'}`}>Selected()</button>
            </div>
        </div>
        <div>
        </div>
        {
            selected === 'available'? 
            <AvailableSection players={players}></AvailableSection> : <SelectedSection></SelectedSection>
        }
        
        

        </>
    );
};
PlayersContainer.propTypes ={
    handleActiveState: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
}

export default PlayersContainer;