import PropTypes from "prop-types";
import logo from '../../assets/logo.png'

const Navbar = ({ userCoins }) => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className=" flex space-x-7">
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <div className="px-9 border-2 border-gray-700">Coins: {userCoins}</div>
        </div>
    </nav>
  );
};
Navbar.propTypes = {
    userCoins: PropTypes.number.isRequired
}

export default Navbar;
