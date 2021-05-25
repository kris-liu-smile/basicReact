import * as React from 'react';
import './index.scss'

interface Props  {
  children: React.ReactNode
}


const K6Text = (props: Props) => {
  return (
    <div className="summary-contain">
      {props.children}
    </div>
  )
}

export default K6Text