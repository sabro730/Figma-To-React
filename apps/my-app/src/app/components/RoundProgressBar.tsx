import React from 'react';

interface ProgressBarPropsType {
  percent: number;
  content: string;
}

const RoundProgressBar = ({ percent, content }: ProgressBarPropsType) => {
  const setStyle = (percent: number) => {
    return { '--value': Number(percent) } as React.CSSProperties;
  };

  return (
    <div className="mx-auto">
      <div
        data-theme="mytheme"
        className="percentage font-drone text-3xl w-[200px] h-[200px] radial-progress border-[#DA458F] border-2 border text-navbar bg-primary"
        style={setStyle(percent)}
      >
        <span className="content flex items-center rounded-3xl">
          {percent}%
        </span>
      </div>
      <p className="mt-[24px] text-center font-drone font-bold text-[20px] leading-[32px] text-[#FBC625]">
        {content}
      </p>
      <p className="text-center mt-[8px] text-[12px] leading-[20px] text-white font-medium">
        $25,000,000
      </p>
    </div>
  );
};

export default RoundProgressBar;
