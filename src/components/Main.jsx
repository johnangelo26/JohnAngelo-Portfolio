import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { SiMysql } from "react-icons/si";

const Main = () => {

  return (
    <div id="main">
      <img className="w-full h-screen" src="/portBg.jpg" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-black">I'm John Angelo</h1>
          <h2 className="flex sm:text-3xl font-medium text-2xl pt-4 text-black">
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Eager to learn and explore more about IT industry",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px"}}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center space-x-3 pt-6 max-w-[200px] w-full">
            <a href="https://github.com/johnangelo26">
                <BsGithub className="cursor-pointer" size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/john-angelo-casiano-29401827b/">
                <BsLinkedin className="cursor-pointer text-blue-800" size={30}/>
            </a>
          </div>
          <div className="flex justify-center space-x-5 pt-6 max-w-[400px] w-full">
              <AiOutlineHtml5 className="text-red-600" size={100}/>
              <BiLogoCss3 className="text-sky-500" size={100}/>
              <BiLogoJavascript className="text-yellow-500" size={100}/>
              <GrReactjs className="text-sky-600" size={100}/>
              <BiLogoNodejs className="text-green-600" size={100}/>
              <SiMysql className="text-yellow-700" size={100}/>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
