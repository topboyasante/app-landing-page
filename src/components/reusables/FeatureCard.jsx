import React from 'react'
import {GiLotusFlower} from 'react-icons/gi'

function FeatureCard({heading,description}) {
  return (
    <div className='text-center border rounded-md p-10 shadow-md'>
        <GiLotusFlower className='mx-auto' size={30}/>
        <br />
        <h3>{heading}</h3>
        <br />
        <p>{description}</p>
    </div>
  )
}

export default FeatureCard