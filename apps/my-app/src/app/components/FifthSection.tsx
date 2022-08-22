import React from 'react';

import RoundProgressBar from './RoundProgressBar';

const FifthSection = () => {
  const percents = [25, 15, 10, 15, 10, 5];
  const contents = [
    'STAKER',
    'FEATURE INVESTOR',
    'TEAM',
    'LP POOLS',
    'ECO PARTNERS',
    'MKT OPERATION',
  ];

  return (
    <section className="mt-[120px]">
      <img
        src="/assets/vector-1.png"
        alt=""
        className="float-right mt-[28px]"
      />
      <img
        src="/assets/vector-2.png"
        alt=""
        className="float-left mt-[290px]"
      />
      <img
        src="/assets/vector-3.png"
        alt=""
        className="float-right mr-[-90px] mt-[500px]"
      />
      <img
        src="/assets/vector-4.png"
        alt=""
        className="float-left mt-[780px] ml-[19px]"
      />

      <div className="container mx-auto">
        <p className="text-center font-drone text-[40px] leading-[56px] font-bold text-[#FBC625] uppercase">
          token distribution
        </p>
        <img src="assets/divider.png" className="mt-[24px] mx-auto" alt="" />
        <div className="mx-auto mt-[80px] grid sm:grid-cols-2 xl:grid-cols-3 2xl:gap-[200px] xl:gap-[100px] lg:gap-[120px]">
          {percents.map((percent, index) => (
            <RoundProgressBar
              key={index}
              percent={percent}
              content={contents[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
