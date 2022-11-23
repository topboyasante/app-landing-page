import React,{useContext} from 'react'
import Chart from '../../images/chart.jpg'
import AppContext from '../../context/AppContext'

function Features() {
  const {isDark} = useContext(AppContext)
  return (
    <main className={isDark?'text-white max-w-[1240px] mx-auto p-5':'text-[#1f2937] max-w-[1240px] mx-auto p-5'}>
           <div>
            <h1 className='mt-5'>"Business has boomed like never before."</h1>
            <p className="text-right text-xl mr-3 my-2">Brett Hand, Cognito Inc.</p>
           </div>
           <br />
          <section>
            <div className="text-center">
                <h2>Running A Business has never been Easier.</h2>
                <p className='text-lg mt-3'>Our Complex Algorithms and Artificially Intelligent SEO Methods shows your business to the people that need it.</p>
                <p className='text-lg'>
                  Lotus runs through a mass spectrum of user info, picks out users that engage in content within your niche, 
                  and then suggests your business to them. This system has proven to be 100% effective and faster than traditional SEO methods,
                  and drives 2000% more traffic to businesses.
                </p>
                <section className='grid lg:grid-cols-3 place-items-center my-2'>
                    {/* Card */}
                    <div className='lg:w-[300px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with Lotus SEO</p>
                    </div>

                    <div className='lg:w-[300px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with Traditional SEO</p>
                    </div>

                    <div className='lg:w-[300px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with no SEO</p>
                    </div>
                </section>
            </div>
          </section>
    </main>
  )
}

export default Features