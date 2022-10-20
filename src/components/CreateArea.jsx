import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNotes((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function addItems(event) {
    props.setNewNotes((preValue) => {
      // console.log(preValue);
      return [...preValue, note];
    });

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addItems}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
