import Image from "next/image";
import styles from "./Card.module.scss";
import Arrow from "@/assets/icons/right-arrow-alt.svg";
const Card = ({ trip }) => {
  return (
    <div className={styles.Card}>
      {/* ------------- */}
      <span className={styles.Info}>
        <h4 className={styles.Price}>
          {trip.budget.value}
          {trip.budget.currencyCode}
        </h4>
        <p className={styles.Type}>{trip.budget.costType}</p>
      </span>
      {/* ------------- */}
      <h1 className={styles.Title}>{trip.title}</h1>
      {/* ------------- */}

      <div className={styles.ArrivalBoatWrapper}>
        <div className={styles.ArrivalWrapper}>
          <p className={styles.Arrival}>partenza da</p>
          <h3 className={styles.ArrivalPlace}>{trip.arrival.Port}</h3>
        </div>
        <div className={styles.BoatWrapper}>
          <p>{trip.boatType}</p>
          <p>{trip.numberOfDays} giorni</p>
        </div>
      </div>

      {/* ------------- */}
      <div className={styles.ArrivalDepartureWrapper}>
        <div className={styles.DepartureWrapper}>
          <p className={styles.Date}>{trip.departureDate.slice(0, 10)}</p>
          <p className={styles.Time}>{trip.departureDate.slice(10, -3)}</p>
        </div>
        <Image className={styles.Arrow} src={Arrow} alt="arrow icon" />
        <div className={styles.DepartureWrapper}>
          <p className={styles.Date}>{trip.arrivalDate.slice(0, 10)}</p>
          <p className={styles.Time}>{trip.arrivalDate.slice(10, -3)}</p>
        </div>
      </div>
      {/* ------------- */}
      <div className={styles.ReservationWrapper}>
        <div className={styles.Reservations}>
          <p>{trip.reservations}</p>
          <p>{trip.reservationsType}</p>
        </div>
        {/* ------------- */}
        <span className={styles.Available}>
          <p>Disponibilità</p>
          <p>{trip.reservationsAvailable}</p>
        </span>
      </div>
      {/* ------------- */}

      {/* ------------- */}
      <button className={styles.Button}>PRENOTA</button>
      {/* ------------- */}
    </div>
  );
};
export default Card;
