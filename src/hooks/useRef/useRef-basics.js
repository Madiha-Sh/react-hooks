import React, { useEffect, useRef } from "react";

function UseRefBasics() {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    // console.log(divContainer.current)
  };

  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current.focus();
  })   

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type="submit">submit</button>
        </div>
        <div ref={divContainer}>
          <h4>hello!!</h4>
        </div>
      </form>
    </div>
  );
}

export default UseRefBasics;