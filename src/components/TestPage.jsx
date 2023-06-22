import React from 'react';
import SingleCard from './SingleCard';
import { NavLink } from 'react-router-dom';

const TestPage = () => {
    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <NavLink to='/tests/html' className='w-full md:w-1/3 px-4 mb-8'><SingleCard title="Html"/></NavLink>
                        <NavLink to='/tests/css' className='w-full md:w-1/3 px-4 mb-8'><SingleCard title="CSS"/></NavLink>
                        <NavLink to='/tests/js' className='w-full md:w-1/3 px-4 mb-8'><SingleCard title="Javascript"/></NavLink>
                        <SingleCard title="React"/>
                        <SingleCard title="Java"/>
                        <SingleCard title="Python"/> 
                        <SingleCard title="C"/>
                        <SingleCard title="C++"/> 
                    </div>
                </div>
            </section>

        </>
    )
}

export default TestPage