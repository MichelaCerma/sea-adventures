import styles from "./CardReduced.module.scss";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import style from "@/components/cardList/CardList.module.scss";
import { trips } from "@/mock/data";
const CardReduced = ({ data }) => {
  const [counter, setCounter] = useState(8);
  const onHanldeClick = () => {
    setCounter((counter) => counter + 8);
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={style.CardList}>
          {trips.slice(0, counter).map((trip) => (
            <Card trip={trip} key={trip.id} />
          ))}
        </div>
        <div>
          <button className={styles.Button} onClick={onHanldeClick}>
            MOSTRA ALTRI
          </button>
        </div>
      </div>
    </>
  );
};
export default CardReduced;
