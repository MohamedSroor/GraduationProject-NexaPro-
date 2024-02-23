import React from "react";
import "../style.css";

function CreateNote({ inputtext, setinputtext, saveHandler }) {
  const char = 100;
  const charlimt = char - inputtext.length;
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        placeholder="Type..."
        value={inputtext}
        onChange={(e) => setinputtext(e.target.value)}
        maxLength={100}></textarea>
      <div className="note_footer">
        <span className="label">{charlimt} left </span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
