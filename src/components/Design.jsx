import React from 'react'

const Design = () => {
  return (
    <><div className='bg-slate-700 grid place-content-center h-[500px] h-screen'>
            {/* <p className='text-4xl text-yellow-200'>hello</p> */}
            <div className='shadow-2xl rounded-2xl overflow-hidden'>
            <div className='bg-slate-200 h-50 w-50'>
                <img src='https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?cs=srgb&dl=pexels-alex-knight-2599244.jpg&fm=jpg'/>
            </div>
            <div>
                <p>Dummy text here...</p>
            </div>
            </div>
            
        </div>
        
        {/* <!-- card with no image --> */}

<div class="p-20 bg-blue-100">
  <h3 class="text-blue-300 mb-4 text-sm font-bold">
    1. Card with no image
  </h3>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">Card with no image</h2>
    <p class="text-gray-700">This is my cool new card!</p>
  </div>
</div>

<div class="p-20 bg-purple-100 w-full md:w-1/2">
  <h3 class="text-purple-300 font-bold mb-4">2. Card with image</h3>
  <div class="bg-white rounded-lg shadow-lg">
    <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" class="rounded-t-lg"/>
    <div class="p-6">
      <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image
      </h2>
      <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
      <a href="#" class="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
    </div>

  </div>
</div>

{/* <!-- horizontal card --> */}
<div class="p-20 bg-orange-200">
  <h3 class="text-orange-400 font-bold mb-4">3. Horizontal &amp; Responsive Card</h3>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div class="p-6">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">Horizontal Card</h2>
      <p class="text-orange-700">
        Look at me go sideways!
      </p>
    </div>

  </div>
</div>
</>
  )
}

export default Design