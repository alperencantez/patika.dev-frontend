import { React, useState } from "react";

function Header() {
  const [todoText, setTodoText] = useState([]);
  const handleChange = (e) => {
    setTodoText([...todoText, e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText([...todoText]);

    document.querySelector("#counter").value = 0;
    if (
      todoText[todoText.length - 1] !== undefined &&
      todoText[todoText.length - 1] !== ""
    ) {
      document.querySelector(".todo-list").innerHTML += `
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>${todoText.pop()}</label>
                <button class="destroy"></button>
            </div>
        </li>`;

      // To increase the counter
      document.querySelector(".counter").click();
    }

    // Mark as done on click
    if (document.querySelector(".toggle")) {
      document.querySelectorAll(".toggle").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.target.parentNode.parentNode.classList.toggle("completed");
        });
      });
    }

    // Delete task on click
    if (document.querySelector(".destroy")) {
      document.querySelectorAll(".destroy").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.target.parentNode.parentNode.remove();
        });
      });
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

export default Header;
