import React, { useState } from 'react'

export const BoxCard = ({result,children}) => {
    const [show, setShow] = useState(true);

  return (

        <div className={show ? "":"hidden"}>
            <div className = {`box ${result}`}>
                    {children}
                <button className="hide" onClick={() => setShow(!show)}>Hide</button>
            </div>
        </div>
  )
}
