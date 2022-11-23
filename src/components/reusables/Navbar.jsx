import React, { useContext, useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {BsSun,BsMoonStars} from 'react-icons/bs'
import AppContext from '../../context/AppContext'

function Navbar() {
    const {isDark,setIsDark} = useContext(AppContext)
    const [nav,setNav] = useState(false)
    function toggleNav(){
        setNav(!nav)
    }
    function toggleDarkMode(){
        setIsDark(!isDark)
    }
  return (
    <main>
        {/* Large Screens */}
        <nav className='fixed top-0 left-0 right-0 ml-auto mr-auto w-[50vw] items-center 
        my-5 p-3 rounded-[10em] justify-between bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg
        hidden lg:flex z-10'>
            {/* Left Section */}
            <section className='flex items-center gap-5'>
                {/* Logo */}
                <section className='flex items-center gap-1'>
                    <div className={isDark?'w-[30px] h-[30px] bg-gradient-to-r from-[#0a9396] to-[#0dbabc] rounded-full':'w-[30px] h-[30px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full'}></div>
                    <p className={isDark?'text-xl text-white font-bold':'text-xl text-gray-800 font-bold'}>Lotus.</p>
                </section>
                {/* Links */}
                <ul className='flex gap-5'>
                    <li className={isDark?'text-gray-300 ease duration-300 hover:text-white':'ease duration-300'}>Features</li>
                    <li className={isDark?'text-gray-300 ease duration-300 hover:text-white':'ease duration-300'}>Community</li>
                    <li className={isDark?'text-gray-300 ease duration-300 hover:text-white':'ease duration-300'}>Docs</li>
                </ul>
            </section>

            {/* Right Section */}
            <section className='flex gap-5 items-center'>
                {isDark?<BsSun size={20} onClick={toggleDarkMode} color='white'/>:<BsMoonStars size={20} onClick={toggleDarkMode}/>}
                <button className={isDark?'bg-[#001219] text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300':'bg-blue-500 text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300'}>Download</button>
                <button className={isDark?'bg-[#001219] text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300':'bg-blue-500 text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300'}>Open App</button>
            </section>
        </nav>

        {/* Small Screens */}
        <nav className='fixed top-0 left-0 right-0 ml-auto mr-auto w-[90vw] md:w-[70vw] items-center 
        my-5 p-3 rounded-[3em] justify-between bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg
        flex lg:hidden z-10'>
                
                <section className='flex items-center gap-3'>
                    <div className={isDark?'w-[30px] h-[30px] bg-gradient-to-r from-[#0a9396] to-[#0dbabc] rounded-full':'w-[30px] h-[30px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full'}></div>
                    <p className={isDark?'text-xl text-white font-bold':'text-xl text-gray-800 font-bold'}>Lotus.</p>
                </section>
            <div className={isDark?'rounded-full bg-[#0a9396] p-[0.5em] cursor-pointer hover:scale-105 ease duration-300':'rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[0.5em] cursor-pointer hover:scale-105 ease duration-300'} onClick={toggleNav}>
                {nav?<AiOutlineClose size={20} color='white'/>:<AiOutlineMenu size={20} color='white'/>}
            </div>
            {/* Links */}
            <ul className={nav?'absolute right-0 top-[4.5rem] p-3 rounded-lg bg-black text-white bg-opacity-90 backdrop-filter backdrop-blur-lg':'absolute right-0 top-[4rem] p-3 rounded-lg bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg hidden'}>
                {isDark?<BsSun size={20} onClick={toggleDarkMode} className='mx-auto my-2'/>:<BsMoonStars size={20} onClick={toggleDarkMode} className='mx-auto my-2'/>}
                <li className='hover:text-gray-500 ease duration-300 text-center text-xl'>Features</li>
                <br />
                <li className='hover:text-gray-500 ease duration-300 text-center text-xl'>Community</li>
                <br />
                <li className='hover:text-gray-500 ease duration-300 text-center text-xl'>Docs</li>
                <br />
                <div className='flex flex-col gap-2'>
                <button className={isDark?'bg-[#001219] text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300':'bg-blue-500 text-white rounded-3xl p-[0.3em] w-[100px] hover:scale-105 ease duration-300'}>Get App</button>
                </div>
            </ul>
        </nav>
    </main>    
  )
}

export default Navbar