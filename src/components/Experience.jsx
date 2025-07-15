import { useState } from "react";
export default function Education({ expInfo, setExpInfo }) {
  const handleChange = (e) => {
    setExpInfo({ ...expInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <div className="inputCont">
          <div>Company:</div>
          <input
            name="company"
            value={expInfo.company}
            onChange={handleChange}
            placeholder="Chase Bank"
          />
        </div>
        <div className="inputCont">
          <div>Position:</div>
          <input
            name="position"
            value={expInfo.position}
            onChange={handleChange}
            placeholder="Financial Advisor"
          />
        </div>
        <div className="inputCont">
          <div>Start Date:</div>
          <input
            name="startDate"
            value={expInfo.startDate}
            onChange={handleChange}
            placeholder="09/2024"
          />
        </div>
        <div className="inputCont">
          <div>End Date:</div>
          <input
            name="endDate"
            value={expInfo.endDate}
            onChange={handleChange}
            placeholder="present"
          />
        </div>
        <div className="inputCont">
          <div>Description:</div>
          <input
            name="description"
            value={expInfo.description}
            onChange={handleChange}
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}
