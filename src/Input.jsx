import React from "react";

function Input(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={props.onChange}
          value={props.value.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.onChange}
          value={props.value.content}
        />
        <button type="button" onClick={props.onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
