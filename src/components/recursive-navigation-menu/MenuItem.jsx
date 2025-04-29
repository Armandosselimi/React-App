import React, { useId, useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (label) => {
    console.log(displayCurrentChildren);
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  };

  return (
    <li key={item.label}>
      <div className='menu-item'>
        <p> {item.label}</p>

        {item?.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus
                color='#fff'
                size={25}
              />
            ) : (
              <FaPlus
                color='#fff'
                size={25}
              />
            )}
          </span>
        ) : null}
      </div>

      {item?.children?.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
