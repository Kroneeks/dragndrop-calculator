import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './components/Card';
import Spot from './components/Spot';

import './App.css';

export default function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(3);
  const [operator, setOperator] = useState('*');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="math-card">
          <Spot
            type="number"
            text={number1}
            spot="number1"
            setNumber1={setNumber1}
            setNumber2={setNumber2}
            setOperator={setOperator}
          />
          <Spot
            type="number"
            text={number2}
            spot="number2"
            setNumber1={setNumber1}
            setNumber2={setNumber2}
            setOperator={setOperator}
          />
          <Spot
            type="operator"
            text={operator}
            spot="operator"
            setNumber1={setNumber1}
            setNumber2={setNumber2}
            setOperator={setOperator}
          />
          <div className="total">
           {
            number2 === 0 ? 
              '∞' : 
              // eslint-disable-next-line
              eval(`${number1}${operator}${number2}`)
           }
          </div>
        </div>

        <div>
          <div className="cards numbers">
            {Array(10)
              .fill(0)
              .map((n, i) => (
                <Card key={i} type="number" text={i} />
              ))}
          </div>

          <div className="cards operators">
            {['*', '-', '+', '/'].map((o, i) => (
              <Card key={i} type="operator" text={o} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}