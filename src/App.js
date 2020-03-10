import React, { useState } from "react";
import Drag from "./Drag";

const LIST = [
  { id: 1, text: "AAA" },
  { id: 2, text: "BBB" },
  { id: 3, text: "CCC" },
  { id: 4, text: "DDD" }
];

export default function App() {
  const [list, setList] = useState(LIST);

  const onChangeList = list => {
    setList(list);
  };

  return <Drag list={list} onChangeList={onChangeList} />;
}
