import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import Note from "./Note";
import "../style.css";
import SideBar from "../SideBar/SideBar";

function Notes() {
  const [inputtext, setinputtext] = useState("");
  const [notes, setnotes] = useState([]);
  const [edit, setedit] = useState(null);
  const [selectedButton, setSelectedButton] = useState(5);
 

  const editHandler = (id, text) => {
    setedit(id);
    setinputtext(text);
  };

  const saveHandler = () => {
    if (edit) {
      setnotes(
        notes.map((note) =>
          note.id === edit ? { ...note, text: inputtext } : note
        )
      );
    } else {
      setnotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputtext,
        },
      ]);
    }
    setinputtext("");
    setedit(null);
  };

  const deletehandler = (id)=>{
    const newnotes = notes.filter(n => n.id !==id)
    setnotes(newnotes);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data) {
      setnotes(data);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
    <SideBar
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    <div className="notes">
      {notes.map((note) =>
        edit === note.id ? (
          <CreateNote
            inputtext={inputtext}
            setinputtext={setinputtext}
            saveHandler={saveHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deletehandler={deletehandler}
            >
          </Note>
        )
      )}
      {edit === null ? (
        <CreateNote
          inputtext={inputtext}
          setinputtext={setinputtext}
          saveHandler={saveHandler}
        />
      ) : (
        <></>
      )}
    </div>
    </>
  );
}

export default Notes;
