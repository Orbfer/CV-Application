import "../styles/Resume.css";
export default function Resume({ info }) {
  return (
    <div>
      <div id="name">{info.name}</div>
      <div id="addInfoCont">
        <div>{info.phone}</div>
        <div> {info.email}</div>
        <div> {info.address}</div>
      </div>
    </div>
  );
}
