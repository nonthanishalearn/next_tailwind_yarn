import React from "react";
import Image from 'next/image';

const Navbar = (props) => {
  const title = props.title
  return (
    <nav className="pt-24 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-row h-[50px] mx-3 item-end">
        <Image className="mx-2" src="/svg/rabbitBTSIcon.svg" alt="Example SVG" width={24} height={24} ></Image>
        <h1 className="pt-1 text-4xl text-white item-end">
        {title}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
