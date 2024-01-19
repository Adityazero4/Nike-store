import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";
import { useScroll } from "../context/ScrollContext";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)
  const { targetComponentRef } = useScroll();
  return (
    <>
      <div className="nike-container" ref={targetComponentRef}>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
