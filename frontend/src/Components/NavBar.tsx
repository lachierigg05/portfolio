import React from 'react';

export const NavBar: React.FC = () => {
    return (
        <div className="h-28 w-[99%] flex m-2 bg-gray-950 border border-gray-800 shadow-2xl rounded shadow-blue-900">
            <div className='flex h-full w-1/2 justify-start items-center'>
                <h1 className='text-white m-20'>Lachie Rigg</h1>
            </div>
            <div className='w-1/2 mr-4 flex justify-end items-center'>
                <li className='text-white m-5'>Home</li>
                <li className='text-white m-5'>About</li>
                <li className='text-white m-5'>Projects</li>
                <li className='text-white m-5'>Contact</li>
            </div>
            
        </div>
        
    )
}

export default NavBar;