import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlaceToVisit from '../components/PlaceToVisit';
import Footer from '../components/Footer';

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip]=useState([]);

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  const getTripData = async () => {
    // Use the tripId variable to reference the document dynamically
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className='p-10 md: px-20 lg:px-44 xl:px-56'>
          {/* Information section */}
          <InfoSection trip={trip}/>
          {/* Recommended Hotels */}
          <Hotels trip={trip}/>
          {/* Itinerary section */}
          <PlaceToVisit trip={trip}/>
          
    </div>
  );
}

export default Viewtrip;
