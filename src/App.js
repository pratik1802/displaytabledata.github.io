import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setUser(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 style={{textAlign:"center"}}>Data Table</h2>
    <div className="border">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item,index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
}

export default App;
