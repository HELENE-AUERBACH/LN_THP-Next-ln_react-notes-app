import React from 'react';
import uuid from "react-uuid";
import './App.css';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';

function App() {
  const [notes, setNotes] = React.useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
   
  const [activeNote, setActiveNote] = React.useState(false);
   
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
   
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "", 
      lastModified: Date.now(),
    };
     
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  }
   
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
     
    setNotes(updatedNotesArray);
  }
   
  const onDeleteNote = (noteIdToDelete) => {
    setNotes(notes.filter(({ id }) => id !== noteIdToDelete));
  }
   
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  }
   
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
