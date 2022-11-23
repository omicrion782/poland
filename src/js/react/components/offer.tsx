import React, {useState} from 'react'
import { IOffer } from "../models";


interface offerProps {
    offer: IOffer
    onOffer: (item: IOffer, closed:Boolean) => void
}
// x350 y170
export function Offer (props: offerProps) {
    
    return (
        <div
        data-oid={props.offer.id}
        className="bg-sky-900 p-2.5 shadow-2xl flex flex-col justify-center items-center text-center text-blue-400"
        >
            <div>
              <a href="">
                <img className='object-cover w-full' src={props.offer.image} alt="" />
              </a>
            </div>

            <div
              className='my-7'
            >
              <h3 className='text-3xl' >{props.offer.city}</h3>
              <h4 className='text-sm' >{props.offer.region}</h4>
            </div>

            <button
              className='
              text-base px-9 py-4 shadow-xl mb-5 bg-sky-700 text-sky-500 font-bold rounded-full whitespace-nowrap 
              transition-all duration-200
              hover:bg-yellow-400 hover:text-amber-600
              '
              onClick={() => props.onOffer(props.offer, true)}
            >View offers</button>
        </div>
    )
}