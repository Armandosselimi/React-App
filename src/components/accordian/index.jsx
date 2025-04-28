import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiselection] = useState(false);
  const [multipleItems, setMultipleItems] = useState([]);

  const handleSingleSelection = (currId) => {
    setSelected(currId === selected ? null : currId);
  };

  const handleMultiSelection = (currId) => {
    console.log(currId);

    let cpyMultipleItems = [...multipleItems];
    const findIndexOfCurrentId = cpyMultipleItems.indexOf(currId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultipleItems.push(currId);
    } else {
      cpyMultipleItems.splice(findIndexOfCurrentId, 1);
    }
    setMultipleItems(() => cpyMultipleItems);
  };
  return (
    <div className='wrapper'>
      <button
        onClick={() => setEnableMultiselection(!enableMultiSelection)}
        className='button'
      >
        Enable Multi Selection
      </button>
      <ul className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <li
              key={dataItem.id}
              className='item'
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multipleItems.indexOf(dataItem.id) !== -1 ? (
                <p className='content'>{dataItem.answer}</p>
              ) : null}
            </li>
          ))
        ) : (
          <p>No data found.</p>
        )}
      </ul>
    </div>
  );
}
