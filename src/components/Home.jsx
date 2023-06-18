import React from 'react';
import hero from '../assets/3dhero.png'
import Showcase from './Showcase'

const Home = () => {
  return (
    <>
      <section class="bg-primary py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-whitish">Welcome to Learnify</h1>
            <p class="text-xl md:text-2xl mt-4 text-whitish">Unlock your potential with our free top-notch educational programs</p>
            <a href="#" class="bg-white text-blue-500 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full mt-8 inline-block font-bold">Early access</a>
          </div>
        </div>
      </section>
      {/* <div class="bg-gradient-to-r from-purple-500 to-indigo-500">
  <div class="container mx-auto flex items-center py-16">
    <div class="md:w-1/2">
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">Empower Your Education</h1>
      <p class="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod nibh ut efficitur lacinia. Donec eu mollis tellus.</p>
      <a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
    </div>
    <div class="md:w-1/2">
      <img class="mx-auto" src={hero} alt="Hero Image"/>
    </div>
  </div>
    </div> */}
      {/* <div className='text-center'>
        <p className='color-[rgb(196,185,254)-200] text-3xl mt-7'>Why choose us ?</p>
      </div> */}
      <Showcase/>
      <section class="py-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 1" />
                <div class="p-4">
                  <h3 class="text-lg font-bold">Card Title 1</h3>
                  <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 inline-block">Read More</a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 2" />
                <div class="p-4">
                  <h3 class="text-lg font-bold">Card Title 2</h3>
                  <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 inline-block">Read More</a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 3" />
                <div class="p-4">
                  <h3 class="text-lg font-bold">Card Title 3</h3>
                  <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 inline-block">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home