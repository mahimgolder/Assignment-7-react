import PropTypes from "prop-types";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailableSection = ({players}) => {
    return (
        <div>
            <h1>AvailableSection.jsx</h1>
            {
                players.map((pla) => 
                <SinglePlayer 
                key={pla.playerId}
                player ={pla}></SinglePlayer>)
            }
        </div>
    );
};
AvailableSection.propTypes ={
    players: PropTypes.array.isRequired
}

export default AvailableSection;