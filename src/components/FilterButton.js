import React from "react";

function FilterButton(props) {
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span>{props.name}</span>
        <span className="visually-hidden">を表示します</span>
      </button>
    );
  }

export default FilterButton;