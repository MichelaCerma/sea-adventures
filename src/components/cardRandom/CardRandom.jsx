import Card from "../card/Card";
import styles from "./CardRandom.module.scss";
import { useEffect, useState } from "react";
import style from "@/components/cardList/CardList.module.scss";
import { trips } from "@/mock/data";
const CardRandom = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const randomArr = trips;
  let currentIndex = randomArr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [randomArr[currentIndex], randomArr[randomIndex]] = [
      randomArr[randomIndex],
      randomArr[currentIndex],
    ];
  }

  return (
    <>
      {isClient ? (
        <div className={styles.CardRandom}>
          <h2>Avventure da scoprire</h2>
          <div className={style.CardList}>
            {randomArr?.slice(0, 8).map((trip) => (
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
