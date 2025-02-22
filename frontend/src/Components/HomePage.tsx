import React from 'react';
import StaticNav from './StaticNav';

export const HomePage: React.FC = () => {
    return (
        <div id='home' className="h-screen w-full flex justify-center border-b border-t border-gray-800">
            <StaticNav/>
        </div>
    )
}

export default HomePage; 