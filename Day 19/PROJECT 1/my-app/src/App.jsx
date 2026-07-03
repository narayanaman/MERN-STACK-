import Home from "./Home";
import Jadu from "./Jaddu";
import Welcome from "./Welcome";

function App(){
  console.log("I am the main app of this Project");
  let name ="Aman Kushwaha";
  let course="BCA";
  return (
    <div>
      <h1>Good Morning {name} </h1>
      <h1>His Course is {course} </h1>
      <div>Now You will React</div>
      <Home/>
      <Welcome/>
      <Jadu/>
    </div>
  );
}

export default App;