import React from 'react';
import ProjectsItem from './ProjectsItem';
import calcApp from '../assets/Calc-App.png';
import mini1 from '../assets/MiniProject1.png';
import capstone from '../assets/CapstoneProject.png';

const Projects = () => {
  return (
    <div id="project" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-blue-800'>Projects</h1>
        <p className='text-center py-8'>These are the projects I made during my bootcamp journey.</p>
        <div className='grid sm:grid-cols-3 gap-20'>
            <a href="https://johnangelo26.github.io/calculator-app/">
                <ProjectsItem img={calcApp} title='Calculator'/>
            </a>
            <a href="https://johnangelo26.github.io/mini-project-2.github.io/">
                <ProjectsItem img={mini1} title='VA Academy'/>
            </a> 
            <a href="https://mp2-realestate.vercel.app/">
                <ProjectsItem img={capstone} title='Homyz'/>
            </a>
        </div>
    </div>
  )
}

export default Projects