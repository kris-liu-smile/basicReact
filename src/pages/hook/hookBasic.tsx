import * as React from 'react';
import { useState } from 'react';

const HookBasic = () => {
  const [num, setNum] = useState(0)
  const changeNum = () => {
    let random = Math.random() * 10
    setNum(random)
  }
  return   (
    <div className="hook-use">
      <p className="hook-use-value">num: {num}</p>
      <div className="hook-use-btn">
        <button onClick={changeNum}>点击改变num的值</button>
      </div>
    </div>
  )
}

export default HookBasic