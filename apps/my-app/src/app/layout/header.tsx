/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NavItems = [
  'HOME',
  'ABOUT&nbsp;US',
  'OUR&nbsp;TEAMS',
  'MARKETPLACE',
  'GOSQUID&nbsp;TOKEN',
  'WHITE&nbsp;PAPER',
];

export default function Header() {
  return (
    <div className="header-container fixed w-full left-0 top-0 bg-[#17161A]/[0.7] z-10">
      <nav className="container mx-auto h-[84px] flex items-center">
        <img src="assets/logo.png" alt="" />
        <div className="flex xl:ml-[60px] sm:ml-[40px] xl:gap-[60px] sm:gap-[40px]">
          {NavItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="focus:underline focus:text-[#DA458F] font-drone text-white text-[14px] leading-[20px] font-bold"
              dangerouslySetInnerHTML={{ __html: item }}
            ></a>
          ))}
        </div>
        <button className="md:hidden xl:block ml-auto w-[160px] font-inter font-semibold text-white h-[40px] rounded-[4px] bg-gradient-91.47 from-[#DA458F] to-[#DA34DD]">
          Connect Wallet
        </button>
        <img src="assets/dropdown.png" className="ml-[40px]" alt="" />
      </nav>
    </div>
  );
}
