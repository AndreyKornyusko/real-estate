import { useContext, useEffect, useState } from "react";
import Card from "../card";
import styles from './cardList.module.scss'
import properties from "../../properties.json";
import { DataContext } from "../../context/dataContextProvider";
import { FiltersEnum } from "../../interfaces/data.interaface";

const CardList = () => {
  const context = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(properties);
  useEffect(() => {
    if (context?.filter === FiltersEnum.ALL) {
      setFilteredData(properties);
    }
    if (context?.filter === FiltersEnum.ACTIVE) {
      const data = properties.filter(
        (item) => item?.status === FiltersEnum.ACTIVE
      );
      setFilteredData(data);
    }
    if (context?.filter === FiltersEnum.SOLD) {
      const data = properties.filter(
        (item) => item?.status === FiltersEnum.SOLD
      );
      setFilteredData(data);
    }
  }, [context?.filter]);

  return (
    <div className={styles.cardList}>
      {filteredData &&
        filteredData.map((item, index) => (
          <div className={styles.cardWrap} key={index}>
            <Card cardItem={item} />
          </div>
        ))}
    </div>
  );
};
export default CardList;
