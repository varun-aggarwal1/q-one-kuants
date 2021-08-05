import React from "react";

export default function Client(props) {
  const data = props.data;
  return (
    <div>
      {data.map((ele) => {
        return <div>{ele}</div>;
      })}
    </div>
  );
}
