
import './App.css';
import NavBar from "./components/NavBar";
import FullPage from "./components/FullPage";

function App() {
  return (
      <div>
        <NavBar/>
        <FullPage color="red" label="about"/>
        <FullPage color="blue" label="experience"/>
        <FullPage color="green" label="skills"/>
      </div>
  )
}

export default App;
