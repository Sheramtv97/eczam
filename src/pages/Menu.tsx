import React from 'react';
import {useSelector} from "react-redux";
import {RootReducer} from "../store";
import {NavLink} from "react-router-dom";

const Menu = () => {

    const {foods} = useSelector((s: RootReducer) => s.menu)
    console.log(foods)
    return (
        <>
            <div className='bg-blue-300'>
                <h1 className='text-2xl py-10 justify-center flex items-center'>MENU</h1>
                <div className=' py-10 flex flex-wrap'>
                    {
                        foods.map(el => (
                            <div className='mx-2'>
                                <div className='border w-[300px] h-[320px] bg-amber-100 rounded'>
                                    <img src={el.photo} width={300} height={300} alt=""/>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col'>
                                            <h2 className='text-start text-xl text-black'>{el.name}</h2>
                                            <h3 className='text-start text-xl text-black text-bold'>{el.price}</h3>
                                        </div>
                                        <div className='flex'>
                                            <NavLink to={'/orders'}>
                                                <button type="button"
                                                        className="text-white mt-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2  text-center mr-2 mb-2">to order
                                                </button>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </div>

            </div>
        </>

    );
};

export default Menu;