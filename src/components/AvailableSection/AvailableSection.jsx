import PropTypes from "prop-types";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailableSection = ({players, handleSelectedPlayerState}) => {
    return (
        <div>
            <div className=" grid grid-cols-3 gap-6">
            {
                players.map((pla) => 
                <SinglePlayer
                handleSelectedPlayerState={handleSelectedPlayerState} 
                key={pla.playerId}
                player ={pla}></SinglePlayer>)
            }
            </div>
        </div>
    );
};
AvailableSection.propTypes ={
    players: PropTypes.array.isRequired,
    handleSelectedPlayerState: PropTypes.func.isRequired
}

export default AvailableSection;