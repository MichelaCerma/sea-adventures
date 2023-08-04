import styles from "./CardReduced.module.scss";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import style from "@/components/cardList/CardList.module.scss";
const CardReduced = ({ data }) => {
  const [counter, setCounter] = useState(8);
  const onHanldeClick = () => {
    setCounter((counter) => counter + 8);
  };
  return (
    <>
      <div className={style.CardList}>
        {data.slice(0, counter).map((trip) => (
          <Card trip={trip} key={trip.id} />
        ))}
      </div>
        <button onClick={onHanldeClick}>yolo</button>
    </>
  );
};
export default CardReduced;
