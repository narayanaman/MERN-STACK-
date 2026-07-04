import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";

function hello() {
  console.log("I am clicked");
  alert("Hello");
}

function greeting(name) {
  alert("Good Morning " + name);
}

function App() {
  const [name, setName] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [result, setResult] = useState(false);
  return (
    <>
      <input
        type="password"
        onChange={(e) => {
          setPass1(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setPass2(e.target.value);
        }}
      />

      <br />
      <button
        onDoubleClick={() => {
          greeting("Shubham");
        }}
      >
        Greet
      </button>
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        use Me...
      </button>
      <button onClick={hello}>I am Calling Function</button>
      <button onClick={()=>{setResult(true)}}>Login</button>
      <button onClick={()=>{setResult(false)}}>Logout</button>
      <h1>
        {/* {pass1 === pass2 ? "Password Matched" : "Password does not Matched"} */}
        {result ? <Home/> : <Login/>}
      </h1>
    </>
  );
}

export default App;
