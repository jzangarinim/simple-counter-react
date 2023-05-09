import React, { useEffect } from "react";

const Counter = (props) => {
  useEffect(() => {
    if (props.pause == 0) {
      let interval = setInterval(() => {
        props.setCount(props.count + props.step);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } else if (props.pause != 0 && props.resume) {
      let interval = setInterval(() => {
        props.setCount(props.pause + props.count + props.step);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.count, props.resume]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <i className="fa-regular fa-clock fa-2xl me-3 mt-3 lh-1"></i>
        <p className="fs-1">{props.count}</p>
      </div>
    </>
  );
};

export default Counter;
