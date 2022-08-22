interface PlayerType {
  imageName: string;
  playerName: string;
}

const Player = ({ imageName, playerName }: PlayerType): JSX.Element => {
  return (
    <div>
      <img src={`assets/${imageName}`} alt="" />
      <p className="font-drone text-center text-[18px] mt-[16px] font-bold text-[#17161A] uppercase">
        {playerName}
      </p>
    </div>
  );
};

export default Player;
