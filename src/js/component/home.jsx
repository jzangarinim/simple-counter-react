import React from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = () => {
  document.title = "Counting...";
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Counter</h1>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <Counter />
    </div>
  );
};

export default Home;
