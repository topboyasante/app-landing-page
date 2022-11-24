import { useContext } from 'react'
import AppContext from '../../context/AppContext'

function Footer() {
    const {isDark} = useContext(AppContext)

  return (
    <footer className='max-w-[1240px] mx-auto py-5'>
        {/* Table */}
        <section className={isDark?'mx-auto w-[80%] text-white flex flex-col lg:flex-row justify-center items-center lg:gap-[5em]':'mx-auto w-[80%] flex flex-col lg:flex-row justify-center items-center lg:gap-[5em]'}>
            <div>
                    <h3>Getting Started</h3>
                    <p>Installation</p>
                    <p>Setting Up</p>
                    <p>Components</p>
            </div>
            <div>
                    <h3>Core Concepts</h3>
                    <p>Fundamentals</p>
                    <p>Configuration</p>
                    <p>Discord</p>
            </div>
            <div>
                    <h3>Customization</h3>
                    <p>Hyperlinking</p>
                    <p>Themes</p>
                    <p>Twitter</p>
            </div>
            <div>
                    <h3>Community</h3>
                    <p>Analytics</p>
                    <p>Preferences</p>
                    <p>Customer Service</p>
            </div>
        </section>
        {/* Logo */}
        <section className='flex items-center gap-1 justify-center my-5'>
                    <div className={isDark?'w-[40px] h-[40px] bg-gradient-to-r from-[#0a9396] to-[#0dbabc] rounded-full':'w-[40px] h-[40px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full'}></div>
                    <p className={isDark?'text-5xl text-white font-bold':'text-5xl text-gray-800 font-bold'}>Lotus.</p>
        </section>
    </footer>
  )
}

export default Footer