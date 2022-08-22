interface GameRoomType {
  background: string;
  titleColor: string;
  title: string;
  content: string;
  contentColor: string;
}

const GameRoom = ({
  background,
  titleColor,
  title,
  content,
  contentColor,
}: GameRoomType): JSX.Element => {
  return (
    <div
      className={`bg-[${background}] px-[40px] flex justify-center items-center`}
    >
      <span
        className={`text-[${titleColor}] text-[40px] font-bold font-drone mr-[40px]`}
      >
        {title}
      </span>
      <p
        className={`font-inter text-[16px] text-[${contentColor}] font-medium leading-[24px] text-justify`}
      >
        {content}
      </p>
    </div>
  );
};

export default GameRoom;
