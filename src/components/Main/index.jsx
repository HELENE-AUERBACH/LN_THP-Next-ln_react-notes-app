import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

const Main = ({ activeNote, onUpdateNote }) => {
  if (!activeNote) return <div className="no-active-note">No note selected</div>;
   
  return (
    <div className="app-main">
      <NoteDisplay activeNote={activeNote} />
      <MarkdownInput activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default Main;
