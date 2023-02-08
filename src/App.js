import "./App.css";
import Header from "./components/Header";
import Home from "./components/Sections/sectionHome";
import Cards from "../src/components/Cards/CardWork/index";
import BasicExample from "./components/Cards/CardServices";
import Middle from "./components/Setences/MiddleSentence";
import Line from "./components/Line";
import SetenceService from "./components/Setences/SetenceService";
import CardWork from "../src/components/Cards/CardWork/index";
import AboutUs from "./components/Setences/AboutUsSetence";
import SectionAboutUs from './components/Sections/sectionAbout';
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Line />
      <Middle />
      <BasicExample />
      <Line />
      <SetenceService />
      <CardWork /> 
      <Line />
      <AboutUs />
      <SectionAboutUs />
      <Footer />
    </div>
  );
}

export default App;
