import React from 'react';

const SeventhSection = () => {
  return (
    <section className="container pt-[120px] mx-auto">
      <p className="text-center font-drone text-[40px] leading-[56px] font-bold text-[#FBC625] uppercase">
        search the news
      </p>
      <div className="flex justify-center">
        <img src="assets/divider.png" className="mt-[24px]" alt="" />
      </div>
      <div className="mt-[80px] grid grid-cols-4 xl:gap-[40px] sm:gap-[20px]">
        <img src="assets/seventh_first.png" alt="" />
        <div className="col-span-3">
          <div className="grid grid-cols-3 sm:gap-[10px] xl:gap-[40px]">
            <img src="assets/seventh_second.png" alt="" />
            <img src="assets/seventh_third.png" alt="" />
            <img src="assets/seventh_fourth.png" alt="" />
            <img src="assets/seventh_sixth.png" className="col-span-2" alt="" />
            <img src="assets/seventh_fifth.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
