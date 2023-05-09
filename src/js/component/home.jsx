import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = () => {
  const [pause, setPause] = useState(0);
  const [count, setCount] = useState(0);
  const [resume, setResume] = useState(false);
  const [step, setStep] = useState(1);
  const [notify, setNotify] = useState(0);

  function handleCount(step) {
    if (event.target.value == 0) {
      handleReset();
      setStep(1);
      event.target.value = null;
    } else {
      handleReset();
      setStep(step);
    }
  }
  function handlePause(counter) {
    setPause(counter);
    setResume(false);
  }
  function handleResume() {
    setResume(true);
  }
  function handleReset() {
    setCount(0);
    setPause(0);
  }
  useEffect(() => {
    <Counter step={step} />;
  }, [step]);

  document.title = `Counting... ${count}`;

  return (
    <div className="text-center bg-dark">
      <div className="notify text-white">
        Notify me when the counter reaches:
        <input
          type="number"
          className="col-1 ms-1 mt-5 mb-3 justify-content-start"
          onBlur={() => {
            setNotify(Number(event.target.value));
          }}
        />
      </div>
      <h1 className="text-center text-white">Counter</h1>
      {/* Change step */}
      <div className="step-changer">
        <button className="me-1" onClick={() => handleCount(1)}>
          Step by 1
        </button>
        <button className="me-1" onClick={() => handleCount(2)}>
          Step by 2
        </button>
        <button className="me-1" onClick={() => handleCount(5)}>
          Step by 5
        </button>
        <button className="me-1" onClick={() => handleCount(10)}>
          Step by 10
        </button>
        <input
          type="number"
          className="col-1"
          placeholder="Custom step:"
          onBlur={() => handleCount(Number(event.target.value))}
        />
      </div>

      <Counter
        step={step}
        setCount={setCount}
        count={count}
        pause={pause}
        setPause={setPause}
        resume={resume}
        notify={notify}
      />
      {/* Buttons */}
      <div className="buttons pb-5">
        <button className="me-1" onClick={() => handleReset()}>
          Reset
        </button>
        <button className="me-1" onClick={() => handlePause(count)}>
          Pause
        </button>
        <button className="me-1" onClick={() => handleResume()}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
