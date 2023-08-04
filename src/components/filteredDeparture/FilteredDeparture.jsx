import styles from "./FilteredDeparture.module.scss";
import style from "../cardList/CardList.module.scss";
import { trips } from "@/mock/data";
import { useState } from "react";
import CardList from "../cardList";
import Card from "../card";

const FilteredDeparture = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("tutti");

  const arrival = [
    {
      place: "Palermo",
      id: 1,
    },
    {
      place: "Favignana",
      id: 2,
    },
    {
      place: "Lampedusa",
      id: 3,
    },
    {
      place: "Lipari",
      id: 4,
    },
    {
      place: "San Vito lo Capo",
      id: 5,
    },
    {
      place: "Marsala",
      id: 6,
    },
    {
      place: "Pantelleria",
      id: 7,
    },
    {
      place: "Salina",
      id: 8,
    },
    {
      place: "Ustica",
      id: 9,
    },
  ];

  const onHandleChange = (e) => {
    setSelectedPlace(e.target.value);
    setShowAll(e.target.value === "tutti");
  };

  return (
    <div className={styles.Wrapper}>
      <select
        className={styles.Dropdown}
        onChange={onHandleChange}
        value={selectedPlace}
      >
        {arrival.map((data) => (
          <option value={data.place} key={data.id}>
            {data.place}
          </option>
        ))}
        <option value="tutti">mostra tutti</option>
      </select>
      <div className={style.CardList}>
        {showAll
          ? trips.map((trip) => (
              <div key={trip.id}>
                <Card trip={trip} />
              </div>
            ))
          : trips
              .filter((place) => place.departure.Port === selectedPlace)
              .map((trip) => (
                <div key={trip.id}>
                  <Card trip={trip} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default FilteredDeparture;
