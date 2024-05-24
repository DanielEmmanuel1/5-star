const Footer = () => {
  return (
    <>
      <footer className="flex justify-between px-8 h-5 items-center">
        <div>
          <p className="text-[#BDBDBD]">Copyright 2021 - 2022 5Starcompany. All rights Reserved</p>
        </div>

        <div className="flex gap-2">
          <p className="text-[#9E9E9E]">Need help?</p>
          <img className="h-6" src="./public/images/infoIcon.svg" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
