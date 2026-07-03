import ContactUS from "./ContactUS";
import Welcome from "./Welcome";
import greeting from "./Greeting";
import Home from "./Home";
import Greeting from "./Greeting";


function App(){
  return (
    <div>
      <h1>This is main App.</h1>
      <Home/>
      <Welcome/>
      <Greeting name="Hariom" course="BCA" mobile={7985613081}/>
      <Greeting name="Raghav" course="MCA" mobile={7898554651}/>
      <ContactUS/>
    </div>
  );
}

export default App;