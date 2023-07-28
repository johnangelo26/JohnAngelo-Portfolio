import React from "react";
import ExperienceItem from "./ExperienceItem"

const data = [
    {
      year: "2021-2022",
      title: 'Deck Cadet',
      duration: '1 Year',
      details: 'During the apprenticeship program, I study and work for 1 year in MV 2GO Maligaya a Cargo/Passenger Vessel here in the Philippines. As a deck cadet I helped with ships maintenance and cargo operations and Enhanced communication and teamwork skills.'
    },
    {
      year: 2023,
      title: 'KodeGo Full-Stack Web Development Bootcamp',
      duration: '6 Months',
      details: 'During the KodeGo web development bootcamp, I gained valuable skills and hands-on experience in various aspects of web development. The bootcamp covered front-end and back-end technologies, web design principles, and best practices for building modern web applications.'
    },
]
const Experience = () => {
  return (
    <div id="experience" className="max-w=[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-800">Experience</h1>
      {data.map((item, exp) => (
        <ExperienceItem 
          key={exp}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
};

export default Experience;
