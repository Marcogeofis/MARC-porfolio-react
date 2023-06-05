import React from 'react';

function Header() {
    return (
        <header className="w-72 h-16 flex justify-between items-center border rounded-full border-customGreenDark text-customGreen px-10 py-10 my-6">
            <figure>
                <img className="w-14 h-14 ml-1.5" src="https://i.imgur.com/8v30CGH.png" alt="Logo" />
            </figure>
            <nav className='flex'>
                <li className='flex-1 list-none mx-1.5 text-xs'>About</li>
                <li className='flex-1 list-none mx-1.5 text-xs'>Projects</li>
                <li className='flex-1 list-none mx-1.5 text-xs'>Ing|Esp</li>
            </nav>
      </header>
    )
}

export { Header };