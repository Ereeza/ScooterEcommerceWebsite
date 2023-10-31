import React from "react";
import "../../styles/textField.scss";

const TextField = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default TextField;
