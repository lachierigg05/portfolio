import React from 'react';

interface NavButtonProps {
    label: string;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className='group text-white m-5 h-14 w-22 bg-gray-950 hover:cursor-pointer rounded shadow-2xl relative font-roboto'>
            {label}
            <span className="absolute bottom-2 left-[20%] w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-[60%]"></span>
        </button>
    );
};

export default NavButton;