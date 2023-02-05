import "./App.css";
import Header from "./components/Header";
import Home from "./components/Sections/sectionHome";
import Cards from "../src/components/Cards/CardWork/index";
import BasicExample from "./components/Cards/CardServices";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <BasicExample />
    </div>
  );
}

export default App;
