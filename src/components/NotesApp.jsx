import { useState, useEffect } from "react";

function NotesApp() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") {
      return;
    }

    const note = {
      id: Date.now(),
      text: newNote,
    };

    setNotes([...notes, note]);
    setNewNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-container">

      <h1>My Notes</h1>
      <p>Write down your thoughts and ideas.</p>

      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a new note..."
      />

      <button onClick={addNote}>
        Add Note
      </button>

      <div className="notes-list">

        {notes.map((note) => (
          <div className="note-card" key={note.id}>

            <p>{note.text}</p>

            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NotesApp;