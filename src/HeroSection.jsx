const HeroSection = () => {
  return (
    <div className="h-[80%] flex flex-col justify-center items-center">
      <div className="mb-8 text-center">
        <h1 className="text-[25px] font-bold">BECOME AN EXCLUSIVE MEMBER</h1>
        <p className="text-[16px] text-[#424242] leading-[28.16px]">
          SIGN UP AND JOIN THE PARTNERSHIP
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <div className="my-4 w-full">
          <div className="relative">
            <img
              src="./Images/icon-user.svg"
              alt="User Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
            <input
              className="border w-full h-[72px] border-gray-600 pl-12"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="my-4 w-full">
          <div className="relative">
            <img
              src="./Images/icon-mail.svg"
              alt="Email Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
            <input
              className="border w-full h-[72px] border-gray-600 pl-12"
              type="email"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div className="my-4 w-full">
          <div className="relative">
            <img
              src="./Images/lock.svg"
              alt="Password Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
            <input
              className="border w-full h-[72px] border-gray-600 pl-12"
              type="password"
              placeholder="*********"
            />
          </div>
        </div>
        <button className="bg-[#24243E] text-white font-light w-full h-[72px] mt-4">
          Become A Member
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
