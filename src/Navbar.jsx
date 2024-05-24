const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between mx-6 my-8">
        <div className="flex gap-2">
          <img src="./Images/leftarrow.svg" alt="" />
          <p className="text-[#424242]">Return Home</p>
        </div>

        <div className="flex gap-2">
          <p className="text-[#424242]">Already a member?</p>
          <p className="font-bold underline">LOG IN NOW</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
