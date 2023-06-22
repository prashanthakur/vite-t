import React from 'react'
import pdf from '../assets/js-cheatsheet.pdf'

const Resources = () => {
  return (
    <>
    <div className='md:hidden text-pulp text-4xl p-4'>Use desktop to see pdfs <sup>coming soon...</sup></div>
    <iframe src={pdf} height={600} width={600} className='h-200 w-full'></iframe>
    </>
  )
}

export default Resources