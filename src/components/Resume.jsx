import "../styles/Resume.css";
export default function Resume({ info, edInfo, expInfo }) {
  return (
    <div id="resumeCont">
      <div id="header">
        <div id="name">{info.name}</div>
        <div id="addInfoCont">
          <div className="addInfo">{info.phone}</div>
          <div className="addInfo"> {info.email}</div>
          <div className="addInfo"> {info.address}</div>
        </div>
      </div>
      <div id="education">
        <div id="edTitle">Education</div>
        <div id="edDetailsCont">
          <div id="dates">
            {edInfo.startDate} - {edInfo.endDate}
          </div>
          <div id="degreeSchoolCont">
            <div id="schoolName">{edInfo.school}</div>
            <div id="degree">{edInfo.degree}</div>
          </div>
        </div>
      </div>
      <div id="experience">
        <div id="expTitle">Experience</div>
        <div id="expDetailsCont">
          <div id="dates">
            {expInfo.startDate} - {expInfo.endDate}
          </div>
          <div id="compPosCont">
            <div id="companyName">{expInfo.company}</div>
            <div id="position">{expInfo.position}</div>
          </div>
        </div>
        <div id="expDesc">{expInfo.description}</div>
      </div>
    </div>
  );
}
