import React from 'react'
import Image from 'next/image'

const MenuBar = ({ label, icon }) => {
    const iconComputed = () => {
        return `/svg/${icon}.svg`
      }
    return (
        <>
        <pre>{ iconComputed() }</pre>
        <span className='flex flex-row items-center justify-between py-2 px-5 border-2 border-rabbit-gray-light rounded-xl h-[100px] w-full '>
            <Image src="/svg/ticketIcon.svg"  alt="selectIcon"  width={30} height={30}></Image>
            <span>
            <div className='left-0 text-black'>{label}</div>
            </span>
            <Image src="/svg/SelectIcon.svg" alt="selectIcon" width={30} height={30}></Image>
        </span>
        </>
    )
}

export default MenuBar
