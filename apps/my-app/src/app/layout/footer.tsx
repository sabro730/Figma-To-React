import React from 'react';

const navigationStyle =
  'font-inter text-[16px] leading-[24px] font-medium text-white w-[110px]';

const footerInfoStyle =
  'font-inter text-[16px] leading-[24px] font-medium text-white ml-[60px]';

const Footer = () => {
  return (
    <section className="bg-[#17161A] mt-[120px] pt-[60px]">
      <div className="container mx-auto grid grid-cols-5">
        <img src="assets/big_logo.png" className="col-span-2" alt="" />
        <div className="col-span-2">
          <p className="uppercase font-drone font-bold text-[20px] leading-[32px] text-white">
            navigation
          </p>
          <div className="flex mt-[40px]">
            <p className={navigationStyle}>Home</p>
            <p className={navigationStyle}>Whitepaper</p>
            <p className={navigationStyle}>FAGs</p>
          </div>
          <div className="flex mt-[12px]">
            <p className={navigationStyle}>About us</p>
            <p className={navigationStyle}>Marketplace</p>
            <p className={navigationStyle}>News</p>
          </div>
          <div className="flex mt-[12px]">
            <p className={navigationStyle}>Our teams</p>
            <p className={navigationStyle}>Roadmap</p>
            <p className={navigationStyle}>Community</p>
          </div>
          <p className="mt-[72px] uppercase font-drone font-bold text-[20px] leading-[32px] text-white">
            subcribe to receive our latest update
          </p>
          <div className="flex mt-[32px]">
            <input
              className="mr-[20px] font-medium text-[12px] text-[#89888B] px-[20px] py-[12px] border border-1 border-solid rounded-[4px] border-[#FFFFFF] w-[426px] bg-[#17161A]"
              placeholder="Your email address"
            />
            <button className="bg-gradient-91.47 from-[#DA458F] to-[#DA34DD] rounded-[4px] w-[168px] text-[16px] font-inter font-semibold leading-[24px] text-white">
              Subcribe
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <p className="uppercase font-drone font-bold text-[20px] leading-[32px] text-white">
            contact us
          </p>
          <div className="flex mt-[40px] items-center">
            <img src="assets/phone.png" className="mr-[13px]" alt="" />
            <p className={navigationStyle}>0378 785 855</p>
          </div>
          <div className="flex mt-[12px] items-center">
            <img src="assets/message.png" className="mr-[13px]" alt="" />
            <p className={navigationStyle}>support@gosquid.io</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[40px]">
        <img src="assets/line.png" className="container mx-auto" alt="" />
      </div>
      <div className="flex py-[40px]">
        <div className="mx-auto flex justify-between container">
          <p className={`${footerInfoStyle} ml-0`}>
            ©2022 GoSquid. All Rights reserved.
          </p>
          <div className="flex">
            <p className={footerInfoStyle}>Security</p>
            <p className={footerInfoStyle}>Legal</p>
            <p className={footerInfoStyle}>Privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
