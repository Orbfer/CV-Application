import { useState } from "react";
import "../styles/Education.css";

export default function Education({ edInfo, setEdInfo }) {
  const handleChange = (e) => {
    setEdInfo({ ...edInfo, [e.target.name]: e.target.value });
  };
  return (
    <div id="education">
      <div id="infoTitle">Education</div>
      <div className="inputCont">
        <div>School:</div>
        <input
          name="school"
          value={edInfo.school}
          onChange={handleChange}
          placeholder="Cornell University"
        />
      </div>
      <div className="inputCont">
        <div>Degree:</div>
        <input
          name="degree"
          value={edInfo.degree}
          onChange={handleChange}
          placeholder="Bachelors in Economics"
        />
      </div>
      <div className="inputCont">
        <div>Start Date:</div>
        <input
          name="startDate"
          value={edInfo.startDate}
          onChange={handleChange}
          placeholder="10/2020"
        />
      </div>
      <div className="inputCont">
        <div>End Date:</div>
        <input
          name="endDate"
          value={edInfo.endDate}
          onChange={handleChange}
          placeholder="07/2024"
        />
      </div>
    </div>
  );
}
