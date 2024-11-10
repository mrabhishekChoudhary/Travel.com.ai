import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlaceToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places to Visit</h2>

        <div>
            {trip.tripData?.itinerary.map((item, index)=>(
                <div className='mt-5'>
                    <h2 className='font-medium text-lg'>{item.Day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                    {item.Plan.map((place, index)=>(
                        <div>
                            <h2 className='font-medium text-sm text-orange-500'>{place['Time to travel']}</h2>
                            <PlaceCardItem place={place}/>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlaceToVisit