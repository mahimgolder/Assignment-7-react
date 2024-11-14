import PropTypes from 'prop-types';
import logo from '../../assets/logo.png'
import { SiBitcoinsv } from "react-icons/si";

const Navbar = ({increaseCoin}) => {
    return (
        <>
        <h1><small>Navbar.jsx</small></h1>
        <div className='flex justify-between items-center mb-6'>
            <div className='border-2'>
                <img src={logo} alt="" />
            </div>
            <div className=' flex gap-12 items-center'>
                <ul className=' list-none flex gap-12 font-normal text-4 text-gray-500'>
                    <li className='text-[rgb(89, 89, 89)]'>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='flex items-center border box-border border-[rgba(223,57,57,0.1)] rounded-xl bg-white text-base gap-3 px-5 py-4'>
                    <span className='text-[19, 19, 19]  font-semibold'>{increaseCoin} Coin</span>
                    <SiBitcoinsv className='text-[hsl(66,99%,30%)]'></SiBitcoinsv>
                </div>
            </div>
        </div>
        </>
    );
};
Navbar.propTypes ={
    increaseCoin: PropTypes.number.isRequired
}

export default Navbar;