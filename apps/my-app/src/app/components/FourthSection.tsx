import React from 'react';

import GameRoom from './GameRoom';

const GameRoomsInfo = [
  {
    background: '#FBC625',
    titleColor: '#17161A',
    title: '1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisfds .',
    contentColor: '#3A3841',
  },
  {
    background: '#3D3B44',
    titleColor: '#D6D6D6',
    title: '2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisfds .',
    contentColor: '#D6D6D6',
  },
  {
    background: '#2A282F',
    titleColor: '#89888B',
    title: '3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisfds .',
    contentColor: '#89888B',
  },
];

const FourthSection = () => {
  return (
    <div className="container pt-[86px] mx-auto grid xl:grid-cols-2 gap-0">
      <div className='bg-[url("assets/play-game.png")] relative h-[456px] bg-cover'>
        <div className="h-[152px] w-full absolute bottom-0 bg-[#000000]/[0.54] flex justify-between">
          <div className="h-[152px] flex justify-center items-center w-[152px] bg-[#FBC625]/[0.13]">
            <img src="assets/play-btn.png" alt="" />
          </div>
          <div>
            <p className="uppercase mr-[20px] mt-[28px] text-[32px] leading-[40px] font-drone font-bold text-white shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">
              let's play with us!
            </p>
            <button className="mr-[27px] float-right mt-[18px] w-[138px] h-[42px] text-white font-semibold text-[16px] font-inter rounded-[4px] shadow-[0px_0px_50px_rgba(187, 75, 255, 0.32)] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD] uppercase">
              play game
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 h-[456px]">
        {GameRoomsInfo.map((info, index) => {
          return (
            <GameRoom
              key={index}
              background={info.background}
              title={info.title}
              titleColor={info.titleColor}
              content={info.content}
              contentColor={info.contentColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FourthSection;
