import React from 'react'

function CompanyCard({name,ratings,img,description}) {
  return (
    <main className='mx-auto text-center lg:w-[60%] rounded-md '>
        <img src={img} alt="" className='rounded-t-md' />
        <div className='p-5'>
        <h2>{name}</h2>
        <p>{ratings}</p>
        <p>{description}</p>
        </div>
    </main>
  )
}

export default CompanyCard