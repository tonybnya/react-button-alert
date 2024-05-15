import React from "react";
import Message from "./Message";
import ListGroup from "./ListGroup";

const cities = [
  "Yaounde",
  "Abuja",
  "Brazzaville",
  "Kinshasa",
  "Cairo",
  "Banjul",
];

const handleSelectCity = (city: string) => {
  console.log(city);
};

const MyApp = () => {
  return (
    <div>
      <Message />
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectCity={handleSelectCity}
      />
      <ListGroup
        cities={cities}
        heading="List of Cities"
        onSelectCity={handleSelectCity}
      />
    </div>
  );
};

export default MyApp;
