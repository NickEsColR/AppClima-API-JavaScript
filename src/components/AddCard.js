import React from "react";

/**
 * Component that renders the card to add a new cards
 * @param {function} addCard - Function to add a new card 
 * @returns {JSX.Element}
 */
export const AddCard = ({addCard}) => {
  return (
    <div className="weather-add" onClick={addCard}>
      <p>+</p>
    </div>
  );
};
