import React, { useState } from "react";
import "./App.css";
import Client from "./Components/Client";

function App(props) {
  const data = props.data;
  let freq = Math.ceil(0.07 * data.length);
  console.log(freq);
  const occurrences = data.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  console.log(occurrences);

  const greater = data.filter((ele) => occurrences[ele] >= freq);
  const [isclicked, setIsclicked] = useState(false);

  const show = () => {
    if (isclicked) {
      return (
        <>
          <Client
            data={greater.sort().filter(function (item, pos, ary) {
              return !pos || item != ary[pos - 1];
            })}
          />
        </>
      );
    } else {
      return (
        <>
          <Client
            data={data.sort().filter(function (item, pos, ary) {
              return !pos || item != ary[pos - 1];
            })}
          />
        </>
      );
    }
  };
  return (
    <div className="App">
      <span>Click to show clients having more than 7% dealings: </span>
      <button
        onClick={() => {
          setIsclicked(true);
        }}
      >
        Show Companies
      </button>
      {show()}
    </div>
  );
}

export default App;
