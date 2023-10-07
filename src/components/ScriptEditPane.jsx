import React from 'react'

function ScriptEditPane() {
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
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={submitScript}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ScriptEditPane