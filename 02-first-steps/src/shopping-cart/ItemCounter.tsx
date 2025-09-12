import React, { useState } from "react";




//import './itemCounter.css'

import styles from './intemCounter.module.css'

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({name,quantity=1}: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section

    className={styles['item-row']}
      /* style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }} */
    >
      <span

      className={styles['item-text']}
        style={{
          //width: 150,
          color:count===1?'red':'black',
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
