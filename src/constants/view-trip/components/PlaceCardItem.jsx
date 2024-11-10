import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (place) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: place.placeName,
      };
      const resp = await GetPlaceDetails(data);
      const photoName = resp.data.places[0]?.photos[1]?.name;
      if (photoName) {
        const photoURL = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(photoURL);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName}
      target="_blank"
      className="text-gray-950"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          className="w-[130px] h-[130px] min-w-[130px] rounded-xl object-cover"
          alt={place.placeName || "Place Image"}
        />
        <div className="">
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400 text-wrap">{place.placeDetails}</p>
          <h2 className="text-md text-gray-400">🎫 {place.ticketPricing}</h2>
          <Button size="sm" className="flex items-center gap-1">
            <FaMapLocationDot />
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
