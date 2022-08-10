import React from "react";
import styles from "./card.module.scss";
import { Card } from "../../interfaces/data.interaface";
interface ICardItem {
  cardItem: Card;
}
const CardItem = ({ cardItem }: ICardItem) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={cardItem?.links?.photos[0]?.thumbnail || ""}
        alt="card img"
      />
      <div className={styles.cardContent}>
        <div className={styles.price}>{cardItem?.listPrice}</div>
      <div
        className={styles.address}
      >{`${cardItem?.address?.display}, ${cardItem?.address?.city}, ${cardItem?.address?.stateOrProvince}`}</div>
      <div className={styles.mainPointWrap}>
        <div className={styles.pointWrap}>
          <div className={styles.point}>
            <div className={styles.dot}></div>
            <div className={styles.pointText}>Beds: {cardItem?.bedrooms}</div>
          </div>
          <div className={styles.point}>
            <div className={styles.dot}></div>
            <div className={styles.pointText}>Baths: {cardItem?.bathrooms}</div>
          </div>
        </div>
        <div className={styles.point}>
          <div className={styles.dot}></div>
          <div className={styles.pointText}>
            Area: {cardItem?.buildingAreaTotal}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default CardItem;
