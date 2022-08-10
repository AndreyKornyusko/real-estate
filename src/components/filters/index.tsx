import React, { useState, useContext } from "react";
import Radiobutton from "./radiobutton";
import { FiltersEnum } from "../../interfaces/data.interaface";
import { DataContext } from "../../context/dataContextProvider";

import styles from "./filters.module.scss";
const Filters = () => {
  const context = useContext(DataContext);
  const [checkedItem, setCheckedItem] = useState({
    all: true,
    active: false,
    sold: false,
  });
  const handleClick = (e: React.MouseEvent<HTMLElement>, id: FiltersEnum) => {
    if (id === FiltersEnum.ALL) {
      setCheckedItem({ all: true, active: false, sold: false });
      context?.setStatusFilter(id);
    }
    if (id === FiltersEnum.ACTIVE) {
      setCheckedItem({ all: false, active: true, sold: false });
      context?.setStatusFilter(id);
    }
    if (id === FiltersEnum.SOLD) {
      setCheckedItem({ all: false, active: false, sold: true });
      context?.setStatusFilter(id);
    }
  };
  return (
    <div className={styles.filters}>
      <div className={styles.subTitle}>Filters:</div>
      <div className={styles.radioBtnWrap}>
      <Radiobutton
        onClick={handleClick}
        checked={checkedItem.all}
        id={FiltersEnum.ALL}
        label="All"
      />
      <Radiobutton
        onClick={handleClick}
        checked={checkedItem.active}
        id={FiltersEnum.ACTIVE}
        label="Active"
      />
      <Radiobutton
        onClick={handleClick}
        checked={checkedItem.sold}
        id={FiltersEnum.SOLD}
        label="Sold"
      />
      </div>
     
    </div>
  );
};
export default Filters;
