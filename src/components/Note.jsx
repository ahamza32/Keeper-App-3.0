import React from "react";

function Note(props) {
  function deleteItems(id) {
    props.setNewNotes((previous) => {
      return previous.filter((items, index) => {
        return index !== props.id;
      });
    });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          deleteItems(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
