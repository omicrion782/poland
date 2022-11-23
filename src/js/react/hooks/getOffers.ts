import {useState, useEffect} from 'react';
import { IOffer } from "../models";
import axios, {AxiosError} from "axios";

export function getOffers () {
    
    const [offers, setOffers] = useState<IOffer[]>([])


    // async function fetchOffers () {
    //     let file = './json/offers.json';
    //     let response = await fetch(file, {
    //             method: 'GET',
    //     });
    //     if (response.ok) {
    //         let result = await response.json()
    //         setOffers(result)
    //     }
    // }

    async function fetchOffers () {
        let file = './json/offers.json';
        const response = await axios.get <IOffer[]> (file)
        if (response) {
            setOffers(response.data);
        } else {console.log('fetchOffers Error');}
    }

    useEffect(() => {
        fetchOffers()
    }, [])
    
    return {offers}

}