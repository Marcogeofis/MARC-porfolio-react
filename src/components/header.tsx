import React from 'react';
import { Link } from 'wouter';

function Header() {
    return (
        <header className="w-72 h-16 flex justify-between items-center border rounded-full border-customGreenDark text-customGreen px-10 py-10 my-6 font-dosis md:w-500">
            <figure>
                <img className="w-14 h-14 ml-1.5" src="https://i.imgur.com/8v30CGH.png" alt="Logo" />
            </figure>
            <nav className='flex'>
                <Link className='flex-1 list-none mx-1.5 text-xs' to="/MARC-porfolio-react/">Home</Link>
                <Link className='flex-1 list-none mx-1.5 text-xs' to="/MARC-porfolio-react/mySkils">About</Link>
                <a href='#Projects' className='flex-1 list-none mx-1.5 text-xs'>Projects</a>
            </nav>
      </header>
    )
}

export { Header };