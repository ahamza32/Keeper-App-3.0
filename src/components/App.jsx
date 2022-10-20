import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNotes, setNewNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNewNotes={setNewNotes} />

      {newNotes.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            setNewNotes={setNewNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
