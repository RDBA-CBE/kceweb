import FourDiamondIcon from "@/public/images/Kahe/icons/FourDiamondIcon";
import React from "react";

const ListStyle = ({ data }) => {
  const items = data?.content || [];

  const isTwoCol = items.length > 8;

  const firstCol = isTwoCol ? items.slice(0, Math.ceil(items.length / 2)) : items;
  const secondCol = isTwoCol ? items.slice(Math.ceil(items.length / 2)) : [];

  return (
    <section className={`kahe-list-sec py-4 ${isTwoCol ? "two-col" : ""}`}>
      <div className="kahe-list-col">
        {firstCol.map((item, index) => (
          <div className="kahe-list-item" key={`col1-${index}`}>
            <FourDiamondIcon size={22} color="#1C3C4A" />
            <span><a href={item.url}>{item.title}</a></span>
          </div>
        ))}
      </div>

      {isTwoCol && (
        <div className="kahe-list-col">
          {secondCol.map((item, index) => (
            <div className="kahe-list-item" key={`col2-${index}`}>
              <FourDiamondIcon size={22} color="#1C3C4A" />
              <span><a href={item.url}>{item.title}</a></span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListStyle;
