import React from 'react';

import Game from './Game';

const Games = [
  {
    background: 'firstCity.png',
    playerImage: 'firstMan.png',
    type: 'solo journey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute',
  },
  {
    background: 'secondCity.png',
    playerImage: 'secondMen.png',
    type: 'play with other',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute',
  },
  {
    background: 'thirdCity.png',
    playerImage: 'thirdBox.png',
    type: 'big event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Duis aute',
  },
];

const ThirdSection = () => {
  return (
    <div className="relative">
      <img
        src="assets/bg-middle.png"
        className="absolute bottom-[55px] w-full"
        alt=""
      />
      <img
        src="assets/Frame.png"
        className="absolute bottom-[55px] w-full"
        alt=""
      />
      <section className="container pt-[120px] mx-auto">
        <p className="uppercase text-center text-[#FBC625] ml-auto text-[40px] font-bold font-drone">
          jump to earn nft game
        </p>
        <div className="flex">
          <p className="mt-[32px] mx-auto w-[1000px] text-center font-inter font-bold text-[16px] font-medium, text-[#D6D6D6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="mt-[24px]">
          <img src="assets/divider.png" className="mx-auto" alt="" />
        </div>
        <div className="mt-[156px] grid xl:grid-cols-3 gap-[20px]">
          {Games.map((game, index) => {
            return (
              <Game
                key={index}
                background={game.background}
                playerImage={game.playerImage}
                type={game.type}
                description={game.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
