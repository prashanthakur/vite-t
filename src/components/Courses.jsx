import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getCourses , AddToCourses} from '../store/coursesSlice';
import { useDispatch } from 'react-redux';

const Courses = () => {
    const dispatch = useDispatch();
    const pdata = useSelector((state) => state.courses);
    console.log(pdata.data)

    const clickHandler = (c) =>{
        dispatch(AddToCourses(c))
      }

    useEffect(() => {
        dispatch(getCourses());
    }, [])

    console.log(pdata.data.map((i) => i.title))
    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {
                            pdata ?
                                pdata.data.map(item => {
                                    return (
                                        <div className='w-full md:w-1/4 px-4 mb-8'>
                                            <div className="bg-whitish shadow-lg rounded-lg overflow-hidden">
                                                <img className="w-full h-48 object-cover" src={item.image} alt="Card Image 1" />
                                                <div className="p-4">
                                                    <h3 className="text-lg font-bold text-pulp">{item.title}</h3>
                                                    <p className="text-pulp mt-2">{item.price}</p>
                                                    <button href="#" className="bg-pulp text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-maroon"
                                                    onClick={()=>{clickHandler({item})}}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <h1>Loading...</h1>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses