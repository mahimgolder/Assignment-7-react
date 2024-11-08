
const Banner = ({ handleUserCoin }) => {
  return (
    <div className="banner bg-cover p-6 text-center text-white">
      <h1>Select Your Dream Cricket Team</h1>
      <p>Build a team with your favorite players</p>
      <button onClick={handleUserCoin} className="mt-4 px-4 py-2 bg-green-500">
        Get Coins
      </button>
    </div>
  );
};

export default Banner;
