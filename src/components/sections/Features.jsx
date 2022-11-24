import React,{useContext} from 'react'
import Chart from '../../images/chart.jpg'
import AppContext from '../../context/AppContext'
import FeatureCard from '../reusables/FeatureCard'

function Features() {
  const {isDark} = useContext(AppContext)
  return (
    <main className={isDark?'text-white max-w-[1240px] mx-auto p-5 h-full flex flex-col items-center justify-center':'text-[#1f2937] max-w-[1240px] mx-auto p-5 h-full flex flex-col items-center justify-center'}>
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
                <section className='grid lg:grid-cols-3 place-items-center my-5 gap-[3em]'>
                    {/* Card */}
                    <div className='lg:w-[400px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with Lotus SEO</p>
                    </div>

                    <div className='lg:w-[400px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with Traditional SEO</p>
                    </div>

                    <div className='lg:w-[400px] shadow-md'>
                        <img src={Chart} alt="chart" />
                        <p className="text-center py-3 text-lg">Business Growth with no SEO</p>
                    </div>
                </section>
            </div>
          </section>
          <br />
          {/* Features */}
          <section>
            <h1 className="text-center">Why Lotus?</h1>
            <p className='text-center my-2 text-xl'>Lotus is constantly growing, just like the possibilities at your hands.</p>
            <br />
                <section className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <FeatureCard
                    heading={`High SEO Speeds.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                    <FeatureCard
                    heading={`5000% Business Boosts.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                    <FeatureCard
                    heading={`Trusted Algorithms.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                    <FeatureCard
                    heading={`24/7 Customer Support.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                    <FeatureCard
                    heading={`24/7 Customer Support.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                    <FeatureCard
                    heading={`24/7 Customer Support.`}
                    description={`lorem ipsum dolor sit amet.`}
                    />
                </section>
          </section>
          <br />
          <button className={isDark?'bg-[#0a9396] text-white rounded-3xl p-[0.5em] w-[200px] hover:scale-105 ease duration-300 text-xl':'bg-blue-500 text-white rounded-3xl p-[0.5em] w-[200px] hover:scale-105 ease duration-300 text-xl'}>
            Learn More
          </button>
    </main>
  )
}

export default Features