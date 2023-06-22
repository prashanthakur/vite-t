import React from 'react'

const SingleCard = ({title}) => {
    return (
        <div className={title == 'Html' || title == 'CSS' || title == 'Javascript' ? '':'w-full md:w-1/3 px-4 mb-8'}>
            <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
                {/* <img className="w-full h-48 object-cover" src={hero} alt="Card Image 1" /> */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-whitish">{title}</h3>
                    <p className="text-whitish mt-2">Take a test to check your knowledge.</p>
                    <a href="#" className="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-maroon">{title == 'Html' || title == 'CSS' || title == 'Javascript' ? 'Take test':'Unavailable'}</a>
                </div>
            </div>
        </div>
    )
}

export default SingleCard