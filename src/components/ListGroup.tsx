import React, { MouseEvent, useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (city: string) => void;
}

const ListGroup = ({ cities, heading, onSelectCity }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // cities = [];

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const citiesList = cities.map((city, idx) => (
    <li
      key={idx}
      className={
        selectedIndex === idx ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(idx);
        onSelectCity(city);
      }}
      // onClick={() => console.log(city, idx)}
    >
      {city}
    </li>
  ));

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 ? (
        <p>No city found.</p>
      ) : (
        <ul className="list-group">{citiesList}</ul>
      )}
    </>
  );
};

export default ListGroup;
