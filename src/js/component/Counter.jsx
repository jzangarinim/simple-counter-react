import React, { useEffect } from "react";

const Counter = (props) => {
  let num1 = Math.floor(props.count / 10000);
  let num2 = Math.floor(props.count / 1000);
  let num3 = Math.floor(props.count / 100);
  let num4 = Math.floor(props.count / 10);
  let num5 = Math.floor(props.count / 1);
  useEffect(() => {
    if (props.pause === 0) {
      let interval = setInterval(() => {
        props.setCount(props.count + props.step);
      }, 1000);
      return () => {
        if (props.notify != 0 && props.count + 1 === props.notify) {
          alert(`Number ${props.notify} reached!`);
        }
        clearInterval(interval);
      };
    } else if (props.pause !== 0 && props.resume) {
      let interval = setInterval(() => {
        props.setCount(props.pause + props.step);
        props.setPause(props.pause + props.step);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.count, props.pause, props.resume, props.notify]);

  return (
    <>
      <div className="d-flex justify-content-center text-white">
        <i className="fa-regular fa-clock fa-2xl me-3 mt-3 lh-1"></i>
        <p className="fs-1">
          {num1 % 10} {num2 % 10} {num3 % 10} {num4 % 10} {num5 % 10}
        </p>
      </div>
    </>
  );
};

export default Counter;
