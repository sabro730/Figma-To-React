interface GameType {
  background: string;
  playerImage: string;
  type: string;
  description: string;
}

const Game = ({
  background,
  playerImage,
  type,
  description,
}: GameType): JSX.Element => {
  return (
    <div className="flex justify-center h-[597px]">
      <img
        src={`assets/${background}`}
        className="w-[500px] h-[300px]"
        alt=""
      />
      <div className="absolute mt-[-72px]">
        <img src={`assets/${playerImage}`} className="mx-auto" alt="" />
        <p
          className={`text-center uppercase font-drone text-[20px] font-bold text-white ${
            type !== 'big event' ? 'mt-[40px]' : 'mt-[95px]'
          }`}
        >
          {type}
        </p>
        <p className="mt-[28px] w-[505px] text-center font-inter font-medium text-[16px] text-[#89888B]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Game;
