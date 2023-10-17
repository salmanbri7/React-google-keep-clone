import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "./notes";
import Input from "./Input";

// function ali(evv) {
//   console.log(event.target);
// }

function App() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([
    { title: "ben", content: "asfd" },
    { title: "243", content: "dajflkamfd" },
  ]);

  return (
    <div>
      <Header />
      <Input
        onChange={(event) => {
          if (event.target.name == "title")
            setInput({ title: event.target.value, content: input.content });
          else if (event.target.name == "content")
            setInput({ title: input.title, content: event.target.value });
        }}
        value={input}
        onClick={() => {
          setNotes([...notes, { title: input.title, content: input.content }]);
          setInput({ title: "", content: "" });
        }}
      />

      {notes.map((note, index) => (
        <Note
          key={index}
          name={index}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}
export default App;
