import React from 'react';
import { useDrag } from 'react-dnd';

const Card = ({ type, text }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className="card" ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}

export default Card;