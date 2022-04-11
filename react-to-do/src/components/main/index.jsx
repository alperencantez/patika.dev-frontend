import { React } from "react";

function Main() {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark as complete</label>

      <ul className="todo-list"></ul>
    </section>
  );
}

export default Main;
