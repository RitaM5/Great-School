import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className='bg-white py-7 fixed z-10 w-full'>
            <div className='container mx-auto'>
                <div className='relative flex items-center justify-between'>
                    <NavLink
                        to='/'
                        aria-label='Great'
                        title='Great'
                        className='inline-flex items-center'
                    >
                        <span className='font-cinzel ml-2 text-center font-extrabold tracking-wide text-gray-800 '>
                            <span className="text-3xl"> Great</span><span className="text-blue-600 font-bold text-2xl"> !</span><br />
                            <span className="text-blue-600 font-bold">SCHOOLS.org</span>
                        </span>
                    </NavLink>

                    <ul className='items-center hidden space-x-8 lg:flex font-poppins'>
                        <li className=" ">

                            <NavLink
                                to='/'
                                aria-label='Home'
                                title='Home'

                            >

                            </NavLink>
                        </li>
                        <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                            <NavLink
                                to='/Parenting'
                                aria-label='Parenting'
                                title='Parenting'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Parenting
                            </NavLink>
                        </li>
                        <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                            <NavLink
                                to='/Write a Review'
                                aria-label='Write a Review'
                                title='Write a Review'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Write a Review
                            </NavLink>
                        </li>
                        <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                            <NavLink to='/En Español'
                                aria-label='En Español'
                                title='En Español'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                En Español
                            </NavLink>
                        </li>
                        <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                            <NavLink
                                to='/login'
                                aria-label='login'
                                title='login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                login
                            </NavLink>
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute z-10 top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label='Great'
                                                title='Great'
                                                className='inline-flex items-center'
                                            >
                                                <span className='font-cinzel ml-2 text-center font-extrabold tracking-wide text-gray-800 '>
                                                    <span className="text-3xl"> Great</span><span className="text-blue-600 font-bold text-2xl"> !</span><br />
                                                    <span className="text-blue-600 font-bold">SCHOOLS.org</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className=''>
                                        <ul className='space-y-4 text-left font-poppins'>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label='Home'
                                                    title='Home'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >

                                                </Link>
                                            </li>
                                            <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                                                <Link
                                                    to='/Parenting'
                                                    aria-label='Parenting'
                                                    title='Parenting'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Parenting
                                                </Link>
                                            </li>
                                            <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                                                <Link
                                                    to='/Write a Review'
                                                    aria-label='Write a Review'
                                                    title='Write a Review'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Write a Review
                                                </Link>
                                            </li>
                                            <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                                                <Link
                                                    to='/En Español'
                                                    aria-label='En Español'
                                                    title='En Español'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    En Español
                                                </Link>
                                            </li>
                                            <li className="hover:bg-blue-200 px-2 p-1 text-lg font-semibold">
                                                <Link
                                                    to='/login'
                                                    aria-label='Login'
                                                    title='Login'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Login
                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
export default NavBar;
