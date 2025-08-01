import "../styles/GeneralInfo.css";

export default function GeneralInfo({ info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div id="generalInfo">
      <div id="infoTitle">Personal Information</div>
      <div className="inputCont">
        <div>Full Name:</div>
        <input
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Michael Smith"
        />
      </div>
      <div className="inputCont">
        <div>Phone Number:</div>
        <input
          name="phone"
          value={info.phone}
          onChange={handleChange}
          placeholder="+1 212-456-7890"
        />
      </div>
      <div className="inputCont">
        <div>Email:</div>
        <input
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="michaelsmith2002@gmail.com"
        />
      </div>
      <div className="inputCont">
        <div>Address:</div>
        <input
          name="address"
          value={info.address}
          onChange={handleChange}
          placeholder="Sacramento, CA"
        />
      </div>
    </div>
  );
}
