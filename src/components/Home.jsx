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
      <Showcase />
      <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-maroon tracking-widest font-medium title-font mb-1">Expect the Best</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-pulp">Become expert in your domain</h1>
    </div>
      <section class="py-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 1" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-pulp">Frontend development</h3>
                  <p class="text-gray-700 mt-2 line-clamp-4">Front-end development refers to the practice of building the user-facing components of a website or application. It involves the use of programming languages such as HTML, CSS, and JavaScript to create engaging and interactive user interfaces that enhance the user experience and bring designs to life. Front-end developers are responsible for translating design mockups into functional web pages, ensuring responsiveness across devices, and optimizing performance for seamless user interaction.</p>
                  <a href="#" class="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block">Coming soon</a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 2" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-pulp">Backend development</h3>
                  <p class="text-gray-700 mt-2 line-clamp-4">Backend refers to the server-side of a web application or software system. It consists of the components, infrastructure, and technologies that handle the processing, storage, and retrieval of data, as well as the logic and functionality of an application. The backend is responsible for tasks such as handling user requests, managing databases, performing calculations, and processing business logic. It works behind the scenes to support and enable the frontend, which is responsible for the user interface and presentation of the application.</p>
                  <a href="#" class="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block">Coming soon</a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src={hero} alt="Card Image 3" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-pulp">Full stack development</h3>
                  <p class="text-gray-700 mt-2 line-clamp-4">Full stack web development refers to the practice of working on both the frontend and backend aspects of a web application. A full stack web developer is proficient in both frontend technologies (HTML, CSS, JavaScript, etc.) and backend technologies (server-side languages, databases, server management, etc.).

                    A full stack developer is capable of handling all aspects of web development, including designing user interfaces, implementing frontend functionality, creating backend logic, interacting with databases, and deploying and maintaining the application. They have a comprehensive understanding of the entire web development process and can work on both client-side and server-side components, allowing them to develop end-to-end solutions for web applications.</p>
                  <a href="#" class="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block">Coming soon</a>
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