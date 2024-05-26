import { useState } from "react";
import "./App.css";

function App() {
  console.log("comp render");

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Atwan");
  const [agree, setAgree] = useState(false);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("set count");
          }}
        >
          COUNT: {count}
        </button>

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log("text input change");
          }}
        />

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              console.log("set checkbox");
            }}
          />
          Agree
        </label>
      </div>
    </>
  );
}

export default App;
