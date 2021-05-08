import React, { FC, useEffect } from 'react'


interface Props {
  component: any;
}


const B3RouteComponent:FC<Props> = ({
  component: RouteComponent,
  ...restProps
}) => {
  return <RouteComponent {...restProps} />
}

export default B3RouteComponent
