import React, { useState, useCallback } from "react";

export default function Drag({ list, onChangeList }) {
  const [dragTargetIndex, setDragTarget] = useState(-1);
  const [dropTargetIndex, setDropTarget] = useState(-1);
  const [dropOrder, setDropOrder] = useState(0);

  const onDragStart = useCallback((e, index) => {
    setDragTarget(index);
  }, []);
  const onDragOver = useCallback((e, index) => {
    const bounds = e.target.getBoundingClientRect();
    const ratio = (e.clientY - bounds.top) / bounds.height;
    setDropOrder(ratio < 0.5 ? 0 : 1);

    setDropTarget(index);
  }, []);
  const handleDrop = useCallback(
    e => {
      const dropIndex = dropTargetIndex + dropOrder;
      if (dropIndex >= 0 && dropIndex !== dragTargetIndex) {
        const newList = [...list];
        const el = newList.splice(dragTargetIndex, 1);
        newList.splice(
          dropIndex <= dragTargetIndex ? dropIndex : dropIndex - 1,
          0,
          ...el
        );
        onChangeList(newList);
      }
      setDropTarget(-1);
    },
    [dragTargetIndex, dropOrder, dropTargetIndex, list, onChangeList]
  );

  return (
    <div id="columns" style={{ display: "flex", flexDirection: "column" }}>
      {list.map(({ id, text }, index) => (
        <button
          key={id}
          id={id}
          onDragStart={e => onDragStart(e, index)}
          onDragOver={e => onDragOver(e, index)}
          onDragEnd={handleDrop}
          draggable
          style={{ height: 50 }}
          className={
            dropTargetIndex === index
              ? `drag_place drop ${dropOrder ? "after" : "before"}`
              : ""
          }
        >
          {text}
        </button>
      ))}
    </div>
  );
}
