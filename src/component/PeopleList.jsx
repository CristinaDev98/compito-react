import { React, useEffect, useState } from "react";
import people from "../data/People";
// console.log(people);

const PeopleList = () => {
  let genderMale = 0;
  let genderFemale = 0;
  let genderNa = 0;

  const [wasEven, setWasEven] = useState(true);
  const [wasOdd, setWasOdd] = useState(false);
  const [contatoreMale, setContatoreMale] = useState(0);
  const [contatoreFemale, setContatoreFemale] = useState(0);
  const [contatoreNa, setContatoreNa] = useState(0);

  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") {
      genderMale++;
    } else if (people[i].gender === "female") {
      genderFemale++;
    } else {
      genderNa++;
    }
  }

  function handleButton(i) {
    if (people[i].gender === "male") {
      setContatoreMale(contatoreMale + 1);
    } else if (people[i].gender === "female") {
      setContatoreFemale(contatoreFemale + 1);
    } else {
      setContatoreNa(contatoreNa + 1);
    }
  }

  useEffect(() => {
    if (contatoreFemale % 2 === 0 && wasOdd) {
      setContatoreMale(contatoreMale + 1);
      setWasOdd(false);
      setWasEven(true);
    } else if (contatoreFemale % 2 !== 0 && wasEven) {
      setContatoreNa(contatoreNa * 2);
      setWasOdd(true);
      setWasEven(false);
    }
  }, [contatoreFemale, contatoreMale, contatoreNa]);

  return (
    <table>
      <thead>
        <tr>
          <th>Male</th>
          <th>Female</th>
          <th>N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="genderMale">{genderMale}</td>
          <td className="genderFemale">{genderFemale}</td>
          <td className="genderNa">{genderNa}</td>
        </tr>
        <tr>
          <td className="genderMale">{contatoreMale}</td>
          <td className="genderFemale">{contatoreFemale}</td>
          <td className="genderNa">{contatoreNa}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {people.map((x, i) => (
          <tr key={i}>
            <td>{x.name}</td>
            <td>{x.height}</td>
            <td>{x.mass}</td>
            <td>{x.gender}</td>
            <td>
              <button
                id={"button_" + i}
                onClick={() => {
                  handleButton(i);
                }}
              >
                CLICK ME
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleList;
