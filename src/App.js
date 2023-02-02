import "./App.css";
import Header from "./components/Header";
import Home from "./components/Sections/sectionHome";
import Cards from "../src/components/Cards/CardWork/index";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Cards />
    </div>
  );
}

export default App;
