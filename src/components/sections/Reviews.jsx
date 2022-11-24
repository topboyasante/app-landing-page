import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import React,{useContext} from 'react'
import AppContext from '../../context/AppContext'
import 'swiper/css';
import 'swiper/css/scrollbar';
import {companies} from '../../db/companies'
import CompanyCard from '../reusables/CompanyCard';

function Reviews() {
    const companyList = companies.map((item)=>{
        return(
            <CompanyCard
                img={item.img}
                name={item.name}
                ratings={item.ratings}
                description={item.description}
            />
        )
    })
  const {isDark} = useContext(AppContext)
  return (
    <main className={isDark?'text-white max-w-[1240px] mx-auto p-5 flex flex-col items-center justify-center h-full'
    :'text-[#1f2937] max-w-[1240px] mx-auto p-5 flex flex-col items-center justify-center h-full'}>
        <h1>Companies that Use Lotus:</h1>
        <p className='mt-5'>{`Swipe ->`}</p>
        {/* Slider */}
        <Swiper navigation={true} modules={[Scrollbar]} autoplay={{delay:2000}} className="w-full my-5">
        <SwiperSlide>{companyList[0]}</SwiperSlide>
        <SwiperSlide>{companyList[1]}</SwiperSlide>
        <SwiperSlide>{companyList[2]}</SwiperSlide>
        <SwiperSlide>{companyList[3]}</SwiperSlide>
        <SwiperSlide>{companyList[4]}</SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Reviews