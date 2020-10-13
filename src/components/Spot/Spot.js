import React from 'react';
import { useDrop } from 'react-dnd';

const Spot = ({ type, text, spot, setNumber1, setNumber2, setOperator }) => {
  const handleDrop = (spot, item) => {
    spot === 'number1' && setNumber1(item.text);
    spot === 'number2' && setNumber2(item.text);
    spot === 'operator' && setOperator(item.text);
  }

  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      handleDrop(spot, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let backgroundColor = '#f2f2f2';

  if (canDrop) backgroundColor = '#3db897';
  if (isOver) backgroundColor = '#4bdcb5';

  return (
    <div className="spot" ref={dropRef} style={{ backgroundColor }}>
      {text}
    </div>
  );
}

export default Spot;