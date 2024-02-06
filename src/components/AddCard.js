import React from "react";

export const AddCard = ({addCard}) => {
  return (
    <div className="weather-add" onClick={addCard}>
      <p>+</p>
    </div>
  );
};
