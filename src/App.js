import "./styles.css";

function addPerson(data) {
  return (
    <div class="row">
      <span>{data[0]}</span>
      <span>{data[1]}</span>
      <span>{data[2]}</span>
      <span>{data[3]}</span>
    </div>
  );
}
export default function App() {
  let rosterRows = people.map(addPerson);

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
    name: "Mikkail Allen",
    pronouns: "He/Him",
    school: "Williamsburg Charter HS",
    year: 2022
  },
  {
    name: "Luna Marcelino",
    pronouns: "She/Hers",
    school: "P-Tech",
    year: 2022
  },
  {
    name: "Francelys Lomeli",
    pronouns: "She/Hers",
    school: "Lindblom",
    year: 2022
  }
];

console.log(people[2].name);
