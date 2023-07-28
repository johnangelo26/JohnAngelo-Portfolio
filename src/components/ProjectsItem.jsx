import React from 'react';

const ProjectsItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-blue-800'>
        <img src={img} alt='/'className='rounded-xl group-hover:opacity-10 h-52'/>
        <div className='hidden group-hover:block absolute top-3 translate-x-1 translate-y-3'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
                <p className='text-center p-3 mt-10 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
        </div>
    </div>
  )
}

export default ProjectsItem