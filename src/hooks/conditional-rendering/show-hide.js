import React, { useEffect, useState } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    return setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => (
      window.removeEventListener('resize', checkSize)
    )
  }, [])

  return (
    <React.Fragment>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {
        show
        ? ( <div>
              <h1>window</h1>
              <h2>size: {size}</h2>
            </div>
          )
        : null
      }
    </React.Fragment>
  )
}
 
export default ShowHide;