import React from 'react'
import "../style.css";

const Note = ({id,text,editHandler,deletehandler}) => {
  return (
    <div className='note'>
      <div className='note-body'>{text}</div>
      <div className='note_footer' style={{justifyContent : 'flex-end', gap :'3px' }}>
      <button className="note_save" onClick={()=> deletehandler(id)}>Delete</button>
      <button className="note_save" onClick={()=> editHandler(id,text)}>Edit</button>
      </div>
    </div>
  )
}

export default Note
