import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const SelectedSection = ({selectedPlayer, handleDeletPlayer}) => {
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
            { selectedPlayer.length > 0 && 
                <button className="bg-yellow-400 py-[14px] px-[20px] ring-2 ring-offset-8 rounded-2xl hover:bg-yellow-600">Add More Player</button>
            }
            
        </div>
    );
};
SelectedSection.propTypes ={
    selectedPlayer: PropTypes.array.isRequired,
    handleDeletPlayer: PropTypes.func.isRequired

}

export default SelectedSection;