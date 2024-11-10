import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { BsFillShareFill } from "react-icons/bs";



function InfoSection({ trip }) {

    const[photoUrl, setPhotoUrl]=useState();
    useEffect(()=>{
        trip&&GetPlacePhoto();
    },[trip])

    const GetPlacePhoto=async()=>{
        const data={
            textQuery:trip?.userSelection?.location?.label,
        }
        const result=await GetPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name);

            const PhotoURL=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoURL);
        })
    }
    

    return (
        <div>
            <img src={photoUrl} className='h-[350px] w-full object-cover rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-3'>
                        <h2 className="p-2 px-3 bg-gray-200 rounded-full text-gray-400 text-xs md:text-md text-center">📅 {trip?.userSelection?.noOfdays} Day(s)</h2>
                        <h2 className="p-2 px-3 bg-gray-200 rounded-full text-gray-400 text-xs md:text-md text-center">💰 {trip?.userSelection?.Budget} Budget</h2>
                        <h2 className="p-2 px-3 bg-gray-200 rounded-full text-gray-400 text-xs md:text-md text-center">🥂 No. of Traveler:{trip?.userSelection?.traveler}</h2>
                    </div>
                </div>
                <Button><BsFillShareFill />Share</Button>
            </div>
        </div>
    )
}

export default InfoSection