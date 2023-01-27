import React from "react";
import people from "../data/People";
console.log(people);
const PeopleList = () => {
  return (
    <table className="table-people">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{people[0].name}</td>

          <td>{people[0].height}</td>
          <td>{people[0].mass}</td>
          <td>{people[0].gender}</td>
        </tr>
        <tr>
          <td>{people[1].name}</td>
          <td>{people[1].height}</td>
          <td>{people[1].mass}</td>
          <td>{people[1].gender}</td>
        </tr>
        <tr>
          <td>{people[2].name}</td>
          <td>{people[2].height}</td>
          <td>{people[2].mass}</td>
          <td>{people[2].gender}</td>
        </tr>
        <tr>
          <td>{people[3].name}</td>
          <td>{people[3].height}</td>
          <td>{people[3].mass}</td>
          <td>{people[3].gender}</td>
        </tr>
        <tr>
          <td>{people[4].name}</td>
          <td>{people[4].height}</td>
          <td>{people[4].mass}</td>
          <td>{people[4].gender}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PeopleList;
