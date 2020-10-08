import React from "react";

import CharacterItem from "./CharacterItem";
import Spinner from "../UI/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  //if not loading, map through items and place in card
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
