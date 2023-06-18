import React from 'react';
import SingleCard from './SingleCard';
import { NavLink } from 'react-router-dom';

const TestPage = () => {
    return (
        <>
            <section class="py-10">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap -mx-4">
                        <NavLink to='/tests/html' className='w-full md:w-1/3 px-4 mb-8'><SingleCard title="Html"/></NavLink>
                        {/* <SingleCard title="Html"/> */}
                        <NavLink to='/tests/css' className='w-full md:w-1/3 px-4 mb-8'><SingleCard title="CSS"/></NavLink>
                        <SingleCard title="Javascript"/>
                        <SingleCard title="React"/>
                        <SingleCard title="Java"/>
                        <SingleCard title="Python"/> 
                    </div>
                </div>
            </section>

        </>
    )
}

export default TestPage