import React, { useState } from 'react';
import ChildArea from './ChildArea';

export const App = () => {
  // const div = {
  //   margin: '100px auto',
  //   display: 'flex',
  //   justifyContent: 'center'
  // }

  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(count + 1);
  }

  const [text, setText] = useState('');
  const onChangeText = (e) => setText(e.target.value);


  const [open, setOpen] = useState(false);
  const onClickDisplay = () => setOpen(!open);

  return (
    <>
      <p>カウントアップ</p>
      <button onClick={onClickCount}>+</button>
      <p>{count}</p>
      <input type="text" onChange={onChangeText} />
      <br />
      <button onClick={onClickDisplay}>表示</button>
      <ChildArea open={open} />
    </>
  )
}

export default App;