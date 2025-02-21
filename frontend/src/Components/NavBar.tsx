import React from 'react';
import NavButton from './NavButton';

export const NavBar: React.FC = () => {
    return (
        <div className="h-28 w-[99%] flex m-2 bg-gray-950 border border-gray-800 shadow-2xl rounded shadow-blue-900">
            <div className='flex h-full w-1/2 justify-start items-center'>
                <h1 className='text-white ml-14 mt-4 font-popsies text-3xl'>Lachie Rigg</h1>
            </div>
            <div className='w-1/2 mr-4 flex justify-end items-center'>
                <NavButton label='Home' onClick={() => console.log('Home')} />
                <NavButton label='About' onClick={() => console.log('About')} />
                <NavButton label='Projects' onClick={() => console.log('Projects')} />
                <NavButton label='Contact' onClick={() => console.log('Contact')} />
            </div>
            
        </div>
        
    )
}

export default NavBar;