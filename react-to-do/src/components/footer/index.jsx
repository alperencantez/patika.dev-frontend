import { React, useState } from "react";

function Footer() {
  const [counter, setCounter] = useState(0);
  function clearCompleted() {
    document.querySelectorAll(".completed").forEach((item) => {
      item.remove();
    });
  }

  return (
    <footer className="footer">
      <div
        className="counter"
        onClick={() => {
          setCounter(counter + 1);
        }}
      ></div>
      <span className="todo-count">
        <strong id="counter">{counter + " "}</strong>
        tasks
      </span>

      <ul className="filters">
        <li>
          <a href="index.html" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="index.html">Active</a>
        </li>
        <li>
          <a href="index.html">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
