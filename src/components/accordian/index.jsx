import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isMultiSelectionEnabled, setIsMultiSelectionEnabled] = useState(false);

  const handleSelection = (currId) => {
    if (isMultiSelectionEnabled) {
      setSelectedItems((prev) =>
        prev.includes(currId)
          ? prev.filter((id) => id !== currId)
          : [...prev, currId]
      );
    } else {
      setSelectedItems((prev) => (prev[0] === currId ? [] : [currId]));
    }
  };

  const renderedData =
    data.length > 0 ? (
      data.map((dataItem) => (
        <li
          key={dataItem.id}
          className='item'
        >
          <div
            onClick={() => handleSelection(dataItem.id)}
            className='title'
          >
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
          {selectedItems.includes(dataItem.id) && (
            <p className='content'>{dataItem.answer}</p>
          )}
        </li>
      ))
    ) : (
      <p>No data found.</p>
    );

  return (
    <div className='wrapper'>
      <button
        onClick={() => setIsMultiSelectionEnabled((prev) => !prev)}
        className='button'
      >
        Enable Multi Selection
      </button>
      <ul className='accordian'>{renderedData}</ul>
    </div>
  );
}
