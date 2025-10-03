import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Card.jsx";
import { Create } from "./components/Create.jsx";
import { Update } from "./components/Update.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/cards")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Business Cards</h1>
              <Create refresh={fetchData}/>
              {data.map((entry, index) => {
                return (
                  <Card
                    key={index}
                    id={entry._id}
                    name={entry.name}
                    description={entry.description}
                    interests={entry.interests}
                    buttons={entry.buttons}
                  />
                );
              })}
            </>
          }
        />
        <Route path="/update/:id" element={<Update refresh={fetchData}/>} />
      </Routes>
    </Router>
  );
};

export default App;
