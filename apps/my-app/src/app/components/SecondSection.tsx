import React from 'react';

import Player from './Player';

const playerInfo = [
  {
    imageName: 'firstArrival.png',
    playerName: 'the obj',
  },
  {
    imageName: 'secondArrival.png',
    playerName: 'assasin',
  },
  {
    imageName: 'thirdArrival.png',
    playerName: 'neon guy',
  },
  {
    imageName: 'fourthArrival.png',
    playerName: 'mafia england',
  },
  {
    imageName: 'fifthArrival.png',
    playerName: 'basketball girl',
  },
];

const secondSection = () => {
  return (
    <section className="bg-[url('assets/secondSection.png')] h-[300px] mt-[-30px]">
      <div className="container pt-[44px] mx-auto flex items-center justify-between">
        <div>
          <img src="assets/newArrival.png" alt="" />
        </div>
        {playerInfo.map((player, index) => {
          return (
            <Player
              key={index}
              playerName={player.playerName}
              imageName={player.imageName}
            />
          );
        })}
      </div>
    </section>
  );
};

export default secondSection;
