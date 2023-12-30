import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  items: string[];
}

function ListGroup({ children, items }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1 className="text-xl text-white p-2">{children}</h1>
      <ul className="border border-gray-500 rounded text-white m-2">
        {items.map((item, index) => (
          <li
            className={
              index === selectedItem
                ? "p-2 bg-gray-900 hover:bg-gray-500"
                : "p-2 bg-gray-600 hover:bg-gray-500"
            }
            key={item}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
