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
  return (
    <div id="appCont">
      <div id="infoCont">
        <GeneralInfo info={info} setInfo={setInfo}></GeneralInfo>
        <Education></Education>
        <Experience></Experience>
      </div>
      <Resume info={info}></Resume>
    </div>
  );
}

export default App;
