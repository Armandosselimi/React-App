import React from "react";
import MenuList from "./MenuList";
import "./styles.css";

export default function TreeViewMenu({ menus = [] }) {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  );
}
