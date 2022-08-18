import React from "react";
import CardList from "../../../components/cardList";
import Filters from "../../../components/filters";

const CardListPage = () => {
  return (
    <div>
      <h1 className="mainTitle">High Real Estate</h1>
      <Filters />
      <CardList />
    </div>
  );
};

export default CardListPage;
