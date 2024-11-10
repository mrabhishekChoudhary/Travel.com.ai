import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price(INR), hotel image url, geo coordinates, rating, descriptions and suggest itineraries with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"hotels\": [{\"HotelName\": \"The D Las Vegas\", \"Hotel address\": \"301 Fremont Street, Las Vegas, NV 89101\", \"Price\": \"$50 - $100\", \"hotel image url\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898820/898820_101_b.jpg\", \"geo coordinates\": \"36.1699,-115.1423\", \"rating\": \"3.5\", \"descriptions\": \"A budget-friendly hotel located in the heart of downtown Las Vegas, offering a casino, restaurants, and a pool.\"}, {\"HotelName\": \"Golden Nugget Las Vegas\", \"Hotel address\": \"129 E Fremont St, Las Vegas, NV 89101\", \"Price\": \"$75 - $150\", \"hotel image url\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898820/898820_101_b.jpg\", \"geo coordinates\": \"36.1695,-115.1420\", \"rating\": \"4.0\", \"descriptions\": \"A historic hotel with a casino, several restaurants, a pool, and a shark tank.\"}, {\"HotelName\": \"Circus Circus Hotel & Casino\", \"Hotel address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\", \"Price\": \"$40 - $80\", \"hotel image url\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898820/898820_101_b.jpg\", \"geo coordinates\": \"36.1125,-115.1726\", \"rating\": \"3.0\", \"descriptions\": \"A family-friendly hotel with a circus theme, a casino, a variety of restaurants, and a pool.\"}], \"itinerary\": [{\"Day\": \"Day 1\", \"Plan\": [{\"placeName\": \"Fremont Street Experience\", \"Place Details\": \"A pedestrian-friendly street in downtown Las Vegas featuring a canopy of lights and free live entertainment.\", \"Place Image Url\": \"https://www.vegasexperience.com/sites/default/files/freemont-street-experience-las-vegas.jpg\", \"Geo Coordinates\": \"36.1699,-115.1423\", \"ticket Pricing\": \"Free\", \"rating\": \"4.5\", \"Time travel\": \"10:00 AM - 1:00 PM\"}, {\"placeName\": \"The Mob Museum\", \"Place Details\": \"A museum dedicated to the history of organized crime in the United States, located in downtown Las Vegas.\", \"Place Image Url\": \"https://www.themobmuseum.org/media/images/2018/07/mob-museum-exterior.jpg\", \"Geo Coordinates\": \"36.1692,-115.1428\", \"ticket Pricing\": \"$25 - $35\", \"rating\": \"4.0\", \"Time travel\": \"1:30 PM - 4:30 PM\"}, {\"placeName\": \"The Neon Museum\", \"Place Details\": \"A museum showcasing historic neon signs from Las Vegas.\", \"Place Image Url\": \"https://www.neonmuseum.org/images/Neon-Museum-Las-Vegas-03.jpg\", \"Geo Coordinates\": \"36.1521,-115.1492\", \"ticket Pricing\": \"$20 - $30\", \"rating\": \"4.5\", \"Time travel\": \"5:00 PM - 7:00 PM\"}]}, {\"Day\": \"Day 2\", \"Plan\": [{\"placeName\": \"Bellagio Conservatory & Botanical Garden\", \"Place Details\": \"A botanical garden located inside the Bellagio Hotel, showcasing beautiful floral displays.\", \"Place Image Url\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory/conservatory_hero_image_2023.jpg\", \"Geo Coordinates\": \"36.1141,-115.1729\", \"ticket Pricing\": \"Free\", \"rating\": \"4.5\", \"Time travel\": \"9:00 AM - 12:00 PM\"}, {\"placeName\": \"High Roller Observation Wheel\", \"Place Details\": \"A giant observation wheel located on the Las Vegas Strip, offering panoramic views of the city.\", \"Place Image Url\": \"https://www.caesars.com/content/dam/caesars-entertainment/linq/the-high-roller/the-high-roller-observation-wheel-las-vegas-hero-image-mobile.jpg\", \"Geo Coordinates\": \"36.1080,-115.1732\", \"ticket Pricing\": \"$30 - $45\", \"rating\": \"4.0\", \"Time travel\": \"12:30 PM - 3:30 PM\"}, {\"placeName\": \"The LINQ Promenade\", \"Place Details\": \"A pedestrian-friendly shopping and dining district located on the Las Vegas Strip.\", \"Place Image Url\": \"https://www.caesars.com/content/dam/caesars-entertainment/linq/the-linq-promenade/the-linq-promenade-las-vegas-hero-image-mobile.jpg\", \"Geo Coordinates\": \"36.1075,-115.1735\", \"ticket Pricing\": \"Free\", \"rating\": \"4.0\", \"Time travel\": \"4:00 PM - 7:00 PM\"}]}, {\"Day\": \"Day 3\", \"Plan\": [{\"placeName\": \"Hoover Dam\", \"Place Details\": \"A historic dam located on the Colorado River, offering stunning views and tours.\", \"Place Image Url\": \"https://www.nps.gov/hoov/learn/nature/images/hoover-dam-wide.jpg\", \"Geo Coordinates\": \"36.0068,-114.9778\", \"ticket Pricing\": \"$30 - $40\", \"rating\": \"4.5\", \"Time travel\": \"9:00 AM - 12:00 PM\"}, {\"placeName\": \"Red Rock Canyon National Conservation Area\", \"Place Details\": \"A scenic desert park located west of Las Vegas, offering hiking trails, rock climbing, and scenic drives.\", \"Place Image Url\": \"https://www.nps.gov/redr/planyourvisit/images/RedRock_Desert.jpg\", \"Geo Coordinates\": \"36.2022,-115.2578\", \"ticket Pricing\": \"$15\", \"rating\": \"4.5\", \"Time travel\": \"1:00 PM - 4:00 PM\"}, {\"placeName\": \"Las Vegas Strip\", \"Place Details\": \"The famous Las Vegas Strip, home to world-class casinos, hotels, restaurants, and shows.\", \"Place Image Url\": \"https://www.visitlasvegas.com/media/images/strip-night-01-desktop.jpg\", \"Geo Coordinates\": \"36.1141,-115.1729\", \"ticket Pricing\": \"Free\", \"rating\": \"5.0\", \"Time travel\": \"5:00 PM - 10:00 PM\"}]}]}\n\n```"},
          ],
        },
      ],
    });
  
