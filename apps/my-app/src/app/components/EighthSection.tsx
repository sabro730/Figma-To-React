import React from 'react';

const EighthSection = () => {
  return (
    <section className="container pt-[120px] mx-auto">
      <p className="text-center font-drone text-[40px] leading-[56px] font-bold text-[#FBC625] uppercase">
        join our community
      </p>
      <div className="flex justify-center">
        <img src="assets/divider.png" className="mt-[24px]" alt="" />
      </div>
      <div className="mt-[45px] flex">
        <div className="w-[1204px] mx-auto grid xl:grid-cols-4 sm:grid-cols-2 gap-[120px]">
          <div className="flex items-center">
            <img src="assets/Facebook.png" alt="" />
          </div>
          <div className="flex items-center">
            <img src="assets/Twitter.png" alt="" />
          </div>
          <div className="flex items-center">
            <img src="assets/telegram.png" alt="" />
          </div>
          <div className="flex items-center">
            <img src="assets/Discord.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
