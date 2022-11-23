import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import heroImg from '../../images/heroImg.jpg'

function Hero() {
  const {isDark} = useContext(AppContext)
  return (
    <main className='h-full flex flex-col gap-3  items-center justify-center'>
        {/* Text Section */}
        <section className='lg:w-[70vw] text-center mt-[8em] lg:mt-[6em] p-5'>
          <p className={isDark?'uppercase tracking-wide text-white my-2':'uppercase tracking-wide text-blue-700 my-2'}>From the creators of Opperheim</p>
          <h1 className={isDark?'text-[#ffffff]':'text-[#1f2937]'}>Leverage the Power of Social Media and boost traffic to your store(s).</h1>
          <p className='my-2 lg:text-xl text-[#626c7a]'>Lotus is a set of hand-forged tools, designed with the user in mind, to give their businesses
          the boost it needs.</p>
          <button className={isDark?'bg-[#0a9396] text-white rounded-3xl p-[0.5em] w-[200px] hover:scale-105 ease duration-300 text-xl':'bg-blue-500 text-white rounded-3xl p-[0.5em] w-[200px] hover:scale-105 ease duration-300 text-xl'}>Get Started</button>
        </section>
        {/* Image Section */}
        <div className='px-5 pb-[3em]'>
        <img src={heroImg} alt="dashboard" className='w-[700px]'/>
        <p className='text-right my-1 text-gray-500'>@panencreative</p>
        </div>
    </main>
  )
}

export default Hero