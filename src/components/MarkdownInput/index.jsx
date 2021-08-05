const MarkdownInput = ({ activeNote, onUpdateNote }) => {
  const onEditField = (fieldKey, value) => {
    onUpdateNote({
      ...activeNote,
      [fieldKey]: value,
      lastModified: Date.now(),
    });
  }
   
  return (
    <div className="app-main-note-edit">
      <input
        type="text"
        id="title"
        placeholder="Note title"
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus
      />
      <textarea
        id="body"
        placeholder="Write your note here..."
        value={activeNote.body}
        onChange={(e) => onEditField("body", e.target.value)}
      />
    </div>
  );
};

export default MarkdownInput;
