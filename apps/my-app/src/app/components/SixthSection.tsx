import React from 'react';

import PlayerListItem from './PlayerListItem';

const textStyle =
  'uppercase font-drone text-[#FBC625] text-[80px] font-bold leading-[110px]';

const PlayerList = [
  {
    borderColor: '#DA458F',
    url: 'first-player.png',
    opacity: '100',
  },
  {
    borderColor: '#D6D6D6',
    url: 'second-player.png',
    opacity: '80',
  },
  {
    borderColor: '#89888B',
    url: 'third-player.png',
    opacity: '60',
  },
  {
    borderColor: '#3A3841',
    url: 'fourth-player.png',
    opacity: '40',
  },
];

const SixthSection = () => {
  return (
    <section>
      <div className="container mt-[300px] mx-auto">
        <img
          src="assets/sixth_rectangle.png"
          className="sm:hidden xl:block"
          alt=""
        />
        <img
          src="assets/border.png"
          className="2xl:mt-[-572px] xl:mt-[-480px] sm:hidden xl:block"
          alt=""
        />
        <div className="grid xl:grid-cols-2 xl:mt-[-552px] lg:mt-[120px]">
          <div className="flex md:justify-center">
            <div className="ml-[80px] mt-[80px]">
              <p className={textStyle}>play</p>
              <p className={textStyle}>right</p>
              <p className={textStyle}>now</p>
              <button className="mt-[32px] font-inter font-semibold text-[16px] text-white uppercase w-[200px] h-[44px] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD] rounded-[4px]">
                play game
              </button>
            </div>
            <img
              src="assets/player.png"
              className="mt-[-150px] xl:w-[75%]"
              alt=""
            />
          </div>
          <div className="ml-[160px] mt-[54px] xl:mr-[109px] mr-[160px]">
            <p className="flex justify-between mx-[57px] font-drone font-bold text-white uppercase text-[18px] leading-[28px]">
              <span>
                <span className="mr-[50px]">#</span>player
              </span>
              <span>winnings</span>
            </p>
            <div className="mt-[30px] grid grid-rows-4 gap-[20px]">
              {PlayerList.map((player, index) => {
                return (
                  <PlayerListItem
                    key={index}
                    url={player.url}
                    borderColor={player.borderColor}
                    opacity={player.opacity}
                    number={index + 1}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/middle_bar.png"
        className="mt-[123px] w-full mx-auto"
        alt=""
      />
    </section>
  );
};

export default SixthSection;
