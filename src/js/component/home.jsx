import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = () => {
  const [pause, setPause] = useState(0);
  const [count, setCount] = useState(0);
  const [resume, setResume] = useState(false);
  const [step, setStep] = useState(1);
  function handleCount(step) {
    setCount(0);
    setPause(0);
    setStep(step);
  }
  function handlePause(counter) {
    setPause(counter);
    setResume(false);
  }
  function handleResume() {
    setCount(0);
    setResume(true);
  }
  function handleReset() {
    setCount(0);
    setPause(0);
  }
  useEffect(() => {
    <Counter step={step} />;
  }, [step]);
  document.title = "Counting...";
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Counter</h1>
      <button onClick={() => handleCount(1)}>Step by 1</button>
      <button onClick={() => handleCount(2)}>Step by 2</button>
      <button onClick={() => handleCount(5)}>Step by 5</button>
      <Counter
        step={step}
        setCount={setCount}
        count={count}
        pause={pause}
        resume={resume}
        setResume={setResume}
      />
      <button onClick={() => handleReset()}>Reset</button>
      <button onClick={() => handlePause(count)}>Pause</button>
      <button onClick={() => handleResume()}>Resume</button>
    </div>
  );
};

export default Home;
