import { useEffect, useState } from "react";

export default function Useeffectexample() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(
    function () {
      console.log("render");
    },
    [counter]
    /* le agregamos una dependencia: counter. Se va a ejecutar el useEffect sólo cuando cambie counter */
  );

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("The message is " + message);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
