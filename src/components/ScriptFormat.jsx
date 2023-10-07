import React, { useState } from "react";

function ScriptFormat(props) {
  function deleteScript() {
    props.onDeleteScript(props.id);
  }

  function editScript() {
    props.onEditScript(props.script);
  }
  return (
    <div>
      <div>
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
        <h6>{props.date}</h6>
        <p>{props.content}</p>
        <button type="button" className="btn btn-primary" onClick={editScript}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={deleteScript}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ScriptFormat;
