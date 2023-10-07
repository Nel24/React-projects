import React, { useState } from "react";
import CreatePane from "./components/CreatePane";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ScriptFormat from "./components/ScriptFormat";
import Header from "./components/Header";
import heroImg from "./assets/images/Mic2.jpg";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [lineUpArr, setLineUp] = useState([]);
  const [forEditScript, setForEditScript] = useState(null);

  function addNewScript(script) {
    setLineUp((prevValue) => {
      return [...prevValue, { ...script, id: uuidv4() }];
    });
  }

  function deleteScript(id) {
    setLineUp((prevValue) => {
      return prevValue.filter((script) => {
        return script.id !== id;
      });
    });
  }
  function fetchEditScript(script) {
    console.log(script);
    setForEditScript(script);
  }
  function updateScript(script) {
    setLineUp((prevValue) => {
      return prevValue.map((item) => (script.id === item.id ? script : item));
    });
    setForEditScript(null);
  }
  return (
    <div className="fluid-container">
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="row">
          <div className="sub-container img-bg col-lg-6 col-sm-12">
            <img src={heroImg} alt="" />
          </div>
          <div className="center-items  col-lg-6 col-sm-12">
            <h2>CREATE HOURLY NEWS</h2>
            <CreatePane
              onAddScript={addNewScript}
              forEditScript={forEditScript}
              onUpdateScript={updateScript}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {lineUpArr.length === 0 ? (
          <ErrorMessage />
        ) : (
          lineUpArr.map((script) => (
            <ScriptFormat
              script={script}
              key={script.id}
              id={script.id}
              title={script.title}
              author={script.author}
              date={script.date}
              content={script.content}
              onDeleteScript={deleteScript}
              onEditScript={fetchEditScript}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
