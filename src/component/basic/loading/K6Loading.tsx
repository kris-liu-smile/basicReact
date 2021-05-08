import * as React from "react";

interface Props{
    isloading?: boolean,
    children: React.ReactNode
}

const K6Loading = (props:Props) => {

    const {children} = props

    return (
        <>
            {/* <div className="loading"></div> */}
            {children}
        </>
    )
};

export default K6Loading