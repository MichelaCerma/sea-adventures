import { useEffect, useState } from "react";
import Card from "../card/index.jsx";
import styles from "./CardList.module.scss";
import { trips } from "@/mock/data";
const CardList = ({ setCounter, counter }) => {
  return (
    <>
      {trips.map((trip) => (
        <Card trip={trip} key={trip.id} />
      ))}
    </>
  );
};

export default CardList;
