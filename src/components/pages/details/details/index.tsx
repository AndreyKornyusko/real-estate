import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import properties from "../../../../properties.json";
import styles from "./pageData.module.scss";
import { Card } from "../../../../interfaces/data.interaface";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState<Card | null>(null);

  useEffect(() => {
    const pageData = properties.find((item) => item.id === id);
    if (pageData) {
      setData(pageData);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {data && (
        <div className={styles.pageData}>
          <h1 className={styles.pageDataTitle}>{data?.address?.display}</h1>
          {data?.status === "Sold" && <div className={styles.sold}>Sold</div>}
          <img
            className={styles.cardImg}
            src={data?.links?.photos[0]?.original || ""}
            alt="card img"
          />
          <div className={styles.cardContent}>
            <div className={styles.price}>{data?.listPrice}</div>
            <div
              className={styles.address}
            >{`${data?.address?.display}, ${data?.address?.city}, ${data?.address?.stateOrProvince}`}</div>
            <div className={styles.mainPointWrap}>
              <div className={styles.pointWrap}>
                <div className={styles.point}>
                  <div className={styles.dot}></div>
                  <div className={styles.pointText}>Beds: {data?.bedrooms}</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.dot}></div>
                  <div className={styles.pointText}>
                    Baths: {data?.bathrooms}
                  </div>
                </div>
                <div className={styles.point}>
                  <div className={styles.dot}></div>
                  <div className={styles.pointText}>
                    Area: {data?.buildingAreaTotal}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.listedBy}>
              Listed by: {data?.listAgentFullName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
