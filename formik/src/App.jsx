import "./App.css";
import React from "react";
import SignupForm from "./components/validation";

function App() {
  return (
    <div
      className="App bg-secondary w-25 mx-auto mt-5 py-3"
      style={{ borderRadius: "15px" }}
    >
      <SignupForm />
    </div>
  );
}

export default App;
