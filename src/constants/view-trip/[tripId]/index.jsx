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
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  const getTripData = async () => {
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
    <div className="p-5 sm:p-10 md:px-16 lg:px-32 xl:px-44">
      {/* Information Section */}
      <div className="mb-10">
        <InfoSection trip={trip} />
      </div>

      {/* Recommended Hotels */}
      <div className="mb-10">
        <Hotels trip={trip} />
      </div>

      {/* Itinerary Section */}
      <div className="mb-10">
        <PlaceToVisit trip={trip} />
      </div>
    </div>
  );
}

export default Viewtrip;
