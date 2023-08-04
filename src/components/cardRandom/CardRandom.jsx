import Card from "../card/Card";
import styles from "./CardRandom.module.scss";
import { useEffect, useState } from "react";
import style from "@/components/cardList/CardList.module.scss";
import { trips } from "@/mock/data";
const CardRandom = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const newArr = [];
  for (let i = 0; i <= 7; i++) {
    const randomNum = Math.floor(Math.random() * 8); // Genera un numero casuale da 0 a 9

    newArr.push(trips[randomNum]);
  }

  return (
    <>
      {isClient ? (
        <div className={styles.CardRandom}>
          <h2>Avventure da scoprire</h2>
          <div className={style.CardList}>
            {newArr?.map((trip) => (
              <Card trip={trip} key={trip.id} />
            ))}
          </div>
        </div>
      ) : (
        "Prerendered"
      )}
    </>
  );
};
export default CardRandom;
