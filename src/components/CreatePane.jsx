import React, { useEffect, useState } from "react";

function CreatePane(props) {
  const [script, setScript] = useState(
    props.forEditScript || {
      // Logical OR here to check if props.forEditScript is true then set itself as the initial , if not use the default initial state which is the empty value object
      title: "",
      author: "",
      date: "",
      content: "",
    }
  );

  useEffect(() => {
    if (props.forEditScript) {
      setScript(props.forEditScript); // useEffect here listen for every changes on the props.forEditScript dependency
    } // this useEffect here is the responsible why clicking on the edit button the values reappear on the inuptFields
  }, [props.forEditScript]);

  function fetchInputValue(e) {
    const { name, value } = e.target;
    setScript((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitScript() {
    props.forEditScript
      ? props.onUpdateScript(script)
      : props.onAddScript(script);
    setScript({
      title: "",
      author: "",
      date: "",
      content: "",
    });
  }

  return (
    <div>
      <form action="" className="center-items">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            name="title"
            className="form-control"
            aria-label="title"
            aria-describedby="basic-addon1"
            onChange={fetchInputValue}
            value={script.title}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Author
          </span>
          <input
            type="text"
            name="author"
            className="form-control"
            aria-label="author"
            aria-describedby="basic-addon1"
            onChange={fetchInputValue}
            value={script.author}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Date
          </span>
          <input
            type="date"
            name="date"
            className="form-control"
            aria-label="date"
            aria-describedby="basic-addon1"
            onChange={fetchInputValue}
            value={script.date}
            required
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Content</span>
          <textarea
            name="content"
            className="form-control"
            aria-label="content"
            onChange={fetchInputValue}
            value={script.content}
            style={{ width: "300px", height: "200px" }}
            required
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={submitScript}
        >
          {props.forEditScript ? "Save" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CreatePane;
