
import PropTypes from "prop-types";
const Banner = ({increaseCoinState}) => {
    return (
        <>
        <div  className="py-16 px-2 bg-cover bg-[url(/assets/bg-shadow.png)] bg-black my-5 py- rounded-xl">
        <div className="flex flex-col items-center text-center space-y-4 ">
            <img className="" src="/assets/banner-main.png" alt="" />
            <h1 className="text-white text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-white text-lg bg-[rgba(255, 255, 255, 0.7)]">Beyond Boundaries Beyond Limits</p>
            <div className="border-2 p-2 rounded-2xl">
                <button 
                onClick={increaseCoinState}
                className="border-2 ring-[rgb(231, 254, 41)] rounded-xl px-5 py-[14px] items-center text-black bg-[hsl(66,99%,58%)] hover:bg-[hsl(66,99%,30%)]">
                    Claim Free Credit
                </button>
            </div>
        </div>
        </div>
        </>
    );
};
Banner.propTypes ={
    increaseCoinState: PropTypes.func.isRequired
}

export default Banner;