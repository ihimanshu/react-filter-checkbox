import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const people = [
    {
      name: "Himanshu Sareen",
      dob: "07/04/1987",
    },
    {
      name: "Nishi Sareen",
      dob: "30/11/1959",
    },
    {
      name: "Akanksha Sareen",
      dob: "27/10/1988",
    },
  ];

  const [isCheckedName, setIsCheckedName] = useState(true);
  const [isCheckedDOB, setIsCheckedDOB] = useState(false);
  const [sortedPeople, setSortedPeople] = useState([...people]);

  const inputValueName = "name";
  const inputValueDOB = "dob";

  useEffect(() => {
    sortArray(inputValueName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleChange = (event) => {
    if (event.target.value === inputValueName && event.target.checked) {
      setIsCheckedName(!isCheckedName);
      setIsCheckedDOB(!isCheckedDOB);
      sortArray(event.target.value);
    } else if (event.target.value === inputValueDOB && event.target.checked) {
      setIsCheckedName(!isCheckedName);
      setIsCheckedDOB(!isCheckedDOB);
      sortArray(event.target.value);
    }
  };

  const sortArray = (type) => {
    let sorted = [...people];
    if (type === inputValueName) {
      sorted = [...people].sort((a, b) => (a[type] > b[type] ? 1 : -1));
    } else if (type === inputValueDOB) {
      sorted = [...people].sort(
        (a, b) =>
          new Date(...a[type].split("/").reverse()) -
          new Date(...b[type].split("/").reverse())
      );
    }
    setSortedPeople(sorted);
  };

  return (
    <>
      <h4>Filter options</h4>
      <div>
        <input
          type="checkbox"
          name="name"
          value={inputValueName}
          checked={isCheckedName}
          onChange={onHandleChange}
        />
        <label htmlFor="">Name</label>
        <input
          type="checkbox"
          name="name"
          value={inputValueDOB}
          checked={isCheckedDOB}
          onChange={onHandleChange}
        />
        <label htmlFor="">DOB</label>
      </div>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.length
            ? sortedPeople.map(({ name, dob }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{dob}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
}

export default App;
