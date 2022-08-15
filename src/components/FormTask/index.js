import { useState } from "react";
import "./FormTask.css";

function FormTask({ onAdd }) {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="FormTask">
      <p>Task</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(value);
          setValue("");
        }}>
        <input
          placeholder="Write here"
          type="search"
          value={value}
          className={errorMessage ? "invalid" : ""}
          onChange={(e) => {
            const { value } = e.target;
            if (value.length >= 54) {
              setErrorMessage("Task content can contain max 54 characters.");
            } else {
              setErrorMessage("");
              setValue(value);
            }
          }}
        />
        <button disabled={errorMessage || !value.trim().length}>Add</button>
      </form>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
}

export default FormTask;
