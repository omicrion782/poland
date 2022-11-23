import React from 'react'
import { IOffer } from "../models";

interface viewOfferProps {
    item: IOffer
    onOffer: (item: IOffer, closed:Boolean) => void
}

export function ViewOffer (props: viewOfferProps) {
    return (
        <>
            <div
                onClick={() => props.onOffer(props.item, false)}
                className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'
            ></div>

            

            <div
                className=' text-black w-8/12 py-12 px-12 rounded bg-white fixed top-5 left-1/2 -translate-x-1/2 z-30
                max-[1536px]:w-11/12
                max-[990px]:py-8
                max-[768px]:py-3
                '
            >

            <button
                className="absolute cursor-pointer top-10 right-12
                before:content-[''] before:absolute before:w-7 before:h-1 before:bg-black before:rotate-45
                after:content-[''] after:absolute after:w-7 after:h-1 after:bg-black after:-rotate-45
                "
                onClick={() => props.onOffer(props.item, false)}
            ></button>

                <h2
                    className='text-4xl text-center mb-16
                    max-[1536px]:mb-10
                    max-[1200px]:mb-4
                    max-[990px]:mb-2 max-[990px]:text-3xl
                    '
                >Explore the city
                </h2>

                <div className='flex md:justify-around md:items-center mb-5
                max-[768px]:items-end relative
                '>


                    <div className='flex-initial md:w-2/4 text-sm leading-8
                        max-[1200px]:leading-6
                        max-[990px]:leading-5
                        max-[768px]:absolute max-[768px]:text-white max-[768px]:z-30
                        max-[768px]:mb-3 max-[768px]:w-full max-[768px]:px-4
                    '>
                        <article 
                            className='pr-5'
                        >
                            <h3
                            className='text-4xl mb-12
                            max-[1536px]:mb-5
                            max-[1200px]:mb-3
                            max-[990px]:mb-2 max-[990px]:text-2xl
                            '
                            >{props.item.city}</h3>
                            <p>
                                {props.item.descriptionpt1}
                            </p>
                            <br />
                            <p>
                                {props.item.descriptionpt2}
                            </p>
                        </article>
                    </div>


                    <div className='flex-initial 2xl:w-2/4 relative h-fit justify-self-center
                        max-[1200px]:w-2/4 
                        max-[990px]:w-3/5 
                        max-[768px]:w-full
                    
                        before:block before:absolute before:border-8
                        before:w-full before:h-full
                        before:top-8 before:left-8
                        before:border-yellow-500 before:-z-50
                    '>

                        <img 
                        className='object-cover w-full'
                        src={props.item.descriptionimage} alt=""/>
                    </div>
                </div>

                <button
                            className='
                text-base px-9 py-4 shadow-xl bg-sky-700     text-sky-500 font-bold rounded-full whitespace-nowrap 
                transition-all duration-200
                hover:bg-yellow-400 hover:text-amber-600
                '
                            type='button'
                        >Check offer</button>
            </div>
        </>
    )
}