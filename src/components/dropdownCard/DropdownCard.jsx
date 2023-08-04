import { useState } from "react";
import styles from "./DropdownCard.module.scss";
import CardList from "../cardList";
import Card from "../card";
import { trips } from "@/mock/data.js";
import style from "@/components/cardList/CardList.module.scss";
const DropdownCard = () => {
  console.log(trips);
  const [showAll, setShowALl] = useState(false);
  const [showArrival, setShowArrival] = useState(false);
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
      id: 8,
    },
  ];

  const onHandleChange = (e) => {
    setShowALl(!showAll);
    console.log(e.target[0].label);
  };
  return (
    <div className={styles.Wrapper}>
      <select className={styles.Dropdown} onChange={onHandleChange}>
        <option value="porto di partenza">mostra per porto di partenza</option>
        <option value="tutti">mostra tutti</option>
      </select>
      {showAll ? (
        arrival.map((item) => (
          <div>
            <div className={styles.TitleWrapper} key={item.id}>
              <h3 className={styles.TitlePlace}>{item.place}</h3>
            </div>
            <div className={style.CardList}>
              {trips
                .filter((place) => place.departure.Port === item.place)
                .map((trip) => (
                  <div key={trip.id}>
                    <Card trip={trip} />
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <CardList />
      )}
    </div>
  );
};

export default DropdownCard;
