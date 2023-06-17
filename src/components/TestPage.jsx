import React from 'react';
import SingleCard from './SingleCard';
import { NavLink } from 'react-router-dom';

const TestPage = () => {
    return (
        <>
            <section class="py-10">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap -mx-4">
                        <NavLink to='/tests/html' className='w-screen'><SingleCard title="Html"/></NavLink>
                        {/* <SingleCard title="Html"/> */}
                        <SingleCard title="CSS"/>
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