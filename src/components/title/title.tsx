"use client";
import React, { useState, useEffect } from "react";

interface TitleProps {
  titleText: string;
  subtitleText?: string;
}

const listofTitles = [
  "Gym Routine",
  "Vacation Itinerary",
  "Meeting Schedule",
  "Medication Routine",
];

const Title = ({ titleText }: TitleProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(
        (prevIndex) => (prevIndex + 1) % listofTitles.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{titleText}</h1>
      <p className="text-xl font-semi-bold">
        Plan your next {listofTitles[currentTitleIndex]}
      </p>
    </div>
  );
};

export default Title;
