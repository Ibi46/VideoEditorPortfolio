// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";


function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        layout="responsive" 
        width={1572}
        height={900}
        className="absolute -top-[98px] -z-10"
      />
      

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 p-4">
        <div className="relative px-0 lg:px-0 py-0 lg:py-0 backdrop-blur-md border border-white border-opacity-20 rounded-lg shadow-lg flex items-center justify-center">
          <img
          src="/image/khiz.png"
          alt="Description of the image"
          style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              mixBlendMode: 'screen'
          }}
          />
        </div>
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10" style={{ marginTop: '60px' }}>
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
  
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaYoutube size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;