import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const SelectedSection = ({selectedPlayer, handleDeletPlayer}) => {
    console.log(selectedPlayer)
    return (
        <div>
            {
                selectedPlayer.map((pla) => 
                    <div
                    className="flex justify-between mb-6 last:mb-0 items-center border-2  px-4 py-3"
                    key={pla.PlayerId}>
                        <div className="flex gap-3">
                            <img className="rounded-full w-20 h-20" src={pla.image} alt="" />
                            <div>
                                <span className="text-2xl font-semibold">{pla.name}</span>
                                <p className="text-base font-normal text-gray-500">{pla.role}</p>
                            </div>
                        </div>
                        <div>
                            <MdDeleteForever 
                            onClick={() => handleDeletPlayer(pla.playerId)}
                            className="ml-auto text-base w-4 h-5 text-red-700 cursor-pointer"></MdDeleteForever>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
};
SelectedSection.propTypes ={
    selectedPlayer: PropTypes.object.isRequired,
    handleDeletPlayer: PropTypes.func.isRequired

}

export default SelectedSection;