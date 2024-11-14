import PropTypes from "prop-types";
import { IoFlagSharp } from "react-icons/io5";
const SinglePlayer = ({player, handleSelectedPlayerState}) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice} = player;
    return (
        <>
        <div className="inline-block">
            <div className="border-2 p-6 rounded-xl">
                <div >
                    <img className="mx-auto rounded-2xl h-[250px]" src={image} alt="" />
                </div>
                <div className="flex gap-3 items-center mt-6">
                    <img className="rounded-full w-10 h-10" src={image} alt="" />
                    <h3 className="font-semibold text-xl">{name}</h3>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="flex items-center gap-3 text-gray-500 text-base"><IoFlagSharp></IoFlagSharp>{country}</span>
                    <span className="text-sm font-normal">{role}</span>
                </div>
                <div className="flex justify-between text-base mt-4">
                    <p className=" font-semibold">{battingType}</p>
                    <p className="font-normal text-gray-400">{bowlingType}</p>
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-base font-semibold">Price: {biddingPrice}</p>
                    <button 
                    onClick={() => handleSelectedPlayerState (player)} 
                    className="rounded-lg border-[1px] border-[rgba(19, 19, 19, 0.1)] text-sm font-normal px-2 py-4">Choose Player</button>
                </div>
            </div>
        </div>
        </>
    );
};
SinglePlayer.propTypes ={
    player: PropTypes.object.isRequired,
    handleSelectedPlayerState: PropTypes.func.isRequired
}

export default SinglePlayer;