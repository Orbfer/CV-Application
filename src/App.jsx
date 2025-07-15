import { useState } from "react";
import "./styles//App.css";
import GeneralInfo from "./components/GeneralInfo";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [info, setInfo] = useState({
    name: "Michael Smith",
    email: "michaelsmith2002@gmail.com",
    phone: "+1 212-456-7890",
    address: "Sacramento, CA",
  });
  const [edInfo, setEdInfo] = useState({
    school: "Cornell University",
    degree: "Bachelors in Economics",
    startDate: "10/2020",
    endDate: "07/2024",
  });
  const [expInfo, setExpInfo] = useState({
    company: "Chase Bank",
    position: "Financial advisor",
    startDate: "09/2024",
    endDate: "present",
    description:
      "asdadaasdadsadsdasdasadsadsdasdadadasdasdsadasdasdasdasdsadasdasdasadsasdasdasdsadsadsadsadsadasdadadada",
  });
  return (
    <div id="appCont">
      <div id="infoCont">
        <GeneralInfo info={info} setInfo={setInfo}></GeneralInfo>
        <Education edInfo={edInfo} setEdInfo={setEdInfo}></Education>
        <Experience expInfo={expInfo} setExpInfo={setExpInfo}></Experience>
      </div>
      <Resume info={info} edInfo={edInfo} expInfo={expInfo}></Resume>
    </div>
  );
}

export default App;
