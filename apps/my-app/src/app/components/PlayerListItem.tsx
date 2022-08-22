interface PlayerType {
  url: string;
  borderColor: string;
  number: number;
  opacity: string;
}

const PlayerListItem = ({
  url,
  borderColor,
  number,
  opacity,
}: PlayerType): JSX.Element => {
  return (
    <div
      className={`flex items-center px-[50px] opacity-${opacity} justify-between h-[80px] rounded-[6px] border-2 border-[${borderColor}]`}
    >
      <span>{number}</span>
      <img src={`assets/${url}`} alt="" />
    </div>
  );
};

export default PlayerListItem;
