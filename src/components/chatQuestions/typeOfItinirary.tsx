"use client";
import { useState } from "react";

const TypeOfItinerary = () => {
  const [typeOfItinerary, setTypeOfItinerary] = useState<string>("");

  return (
    <div>
      <h1>Type of Itinerary</h1>
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          id="gym"
          name="typeOfItinerary"
          value="gym"
          onClick={() => setTypeOfItinerary("vacation")}
        />
        <label htmlFor="radio">Gym Routine</label>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="radio"
          id="vacation"
          name="typeOfItinerary"
          value="vacation"
          onClick={() => setTypeOfItinerary("vacation")}
        />
        <label htmlFor="radio">Vacation Planning</label>
      </div>
    </div>
  );
};

export default TypeOfItinerary;
