import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="City"
      />
      <button>Search the weather</button>
    </form>
  );
};

export default Form;
