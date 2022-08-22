import React from 'react';

const Info = (): JSX.Element => {
  return (
    <div>
      <p className="font-drone font-bold text-[20px] text-white mb-[8px]">
        $999.000
      </p>
      <p className="font-inter font-medium text-[#FBC625] text-justify text-[14px]">
        Active Shoulders
      </p>
    </div>
  );
};

const handleClick = () => {
  const currentPosition = window.scrollY;

  return window.scrollTo(0, currentPosition + 1000);
};

const FirstSection = () => {
  return (
    <section className="w-full h-[1080px] bg-center bg-cover bg-[url('assets/background.png')]">
      <div className="container mx-auto pt-[258px]">
        <p className="uppercase h-[224px] w-[560px] font-drone text-[40px] text-[#FBC625] font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          elusmod tempor incididunt ut labore et
        </p>
        <p className="mt-[40px] h-[60px] w-[560px] font-inter text-[14px] font-medium text-white text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="mt-[40px] w-[576px] h-[60px] flex justify-between">
          <Info />
          <Info />
          <Info />
          <Info />
        </div>
        <div className="flex mt-[80px]">
          <button className="w-[200px] mr-[22px] h-[60px] font-inter font-semibold text-[16px] text-white uppercase rounded-[4px] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD] shadow-[0px_0px_50px_rgba(187, 75, 255, 0.32)]">
            play game
          </button>
          <button className="w-[200px] h-[60px] font-inter font-semibold text-[16px] text-white border-solid border border-white-200 uppercase rounded-[4px] bg-gradient-98.24 from-[rgba(0, 0, 0, 0.7)] to-[rgba(0, 0, 0, 0)] shadow-[0px_0px_50px_rgba(187, 75, 255, 0.32)]">
            learn more
          </button>
        </div>
        <div className="mt-[142px] flex justify-center">
          <img
            src="assets/scrolldown.png"
            className="cursor-pointer hover:border-2 hover:p-[10px] z-50 fixed bottom-[50px]"
            onClick={handleClick}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
