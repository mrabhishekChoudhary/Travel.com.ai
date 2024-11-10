import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {
    const[photoUrl, setPhotoUrl]=useState();
    useEffect(()=>{
        hotel&&GetPlacePhoto();
    },[hotel])

    const GetPlacePhoto=async()=>{
        const data={
            textQuery:hotel.hotelName,
        }
        const result=await GetPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name);

            const PhotoURL=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoURL);
        })
    }
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=centurylink+field' +
            hotel?.hotelName +
            "," +
            hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photoUrl} className='rounded-xl my-2 h-[180px] w-full object-cover' />
                <div className='my-2'>
                    <h2 className='font-medium mt-2'>{hotel.hotelName}</h2>
                    <h2 className='text-sm text-gray-600 mt-1'>"{hotel.descriptions}"</h2>
                    <h2 className='text-xs text-gray-400 mt-1'>📍{hotel.hotelAddress}</h2>
                    <h2 className="font-medium text-sm mt-1">💸 {hotel?.price}</h2>
                    <h2 className="font-medium text-sm mt-1">⭐ {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem