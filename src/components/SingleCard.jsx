import React from 'react'

const SingleCard = ({title}) => {
    return (
        <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-primary shadow-lg rounded-lg overflow-hidden">
                {/* <img class="w-full h-48 object-cover" src={hero} alt="Card Image 1" /> */}
                <div class="p-4">
                    <h3 class="text-lg font-bold">{title}</h3>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" class="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 inline-block">Take test</a>
                </div>
            </div>
        </div>
    )
}

export default SingleCard