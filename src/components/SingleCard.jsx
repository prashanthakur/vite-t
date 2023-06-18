import React from 'react'

const SingleCard = ({title}) => {
    return (
        <div class={title == 'Html' || title == 'CSS' ? '':'w-full md:w-1/3 px-4 mb-8'}>
            <div class="bg-primary shadow-lg rounded-lg overflow-hidden">
                {/* <img class="w-full h-48 object-cover" src={hero} alt="Card Image 1" /> */}
                <div class="p-4">
                    <h3 class="text-lg font-bold text-whitish">{title}</h3>
                    <p class="text-whitish mt-2">Take a test to check your knowledge.</p>
                    <a href="#" class="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-maroon">{title == 'Html' || title == 'CSS' ? 'Take test':'Unavailable'}</a>
                </div>
            </div>
        </div>
    )
}

export default SingleCard