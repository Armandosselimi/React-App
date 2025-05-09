import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className='menu-list-container'>
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem
              key={listItem.label}
              item={listItem}
            />
          ))
        : null}
    </ul>
  );
}
