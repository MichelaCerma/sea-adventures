import { useState } from "react";
import Card from "../card/index.jsx";
import styles from "./CardList.module.scss";
import { trips } from "@/mock/data";
const CardList = () => {
  const [counter, setCounter] = useState(8);
  const onHanldeClick = () => {
    setCounter((counter) => counter + 8);
  };

  return (
    <>
      <div className={styles.CardList}>
        {trips.slice(0, counter).map((trip, arr) => (
          <Card trip={trip} key={trip.id} />
        ))}
      </div>
      <button onClick={onHanldeClick}>yolo</button>
    </>
  );
};

export default CardList;
