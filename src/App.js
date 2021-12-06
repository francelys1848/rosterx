import "./styles.css";

function addPerson(data) {
  return (
    <div class="row">
      <span>{data[0]}</span>
      <span>{data[1]}</span>
      <span>{data[2]}</span>
      console.log(people[1].fullName +people );
    </div>
  );
}
export default function App() {
  let rosterRows = rosterData.map(addPerson);

  return (
    <div className="table">
      <div className="header">
        <span>name</span>
        <span>pronouns</span>
        <span>school</span>
        <span>year</span>
      </div>
      {rosterRows}
    </div>
  );
}

let rosterData = [
  ["Mikkail Allen", "He/Him", "Williamsburg Charter HS", "2022"],
  ["Luna Marcelino", "She/Hers", "P-Tech", "2022"],
  ["Francelys Lomeli", "She/Her", "Lindblom", "2022"]
];
let people = [
  {
    fullName: "Mikakail Allen",
    pronounName: "He/Him",
    schoolName: "Williamsburg Charter",
    schoolYear: "2022"
  },
  {
    fullName: "Luna Marcelino",
    pronounName: "She/Hers",
    schoolName: "P-Tech",
    schoolYear: "2022"
  },
  {
    fullName: "Francelys Lomeli",
    pronounName: "She/Hers",
    schoolName: "Lindblom",
    schoolYear: "2022"
  }
];
