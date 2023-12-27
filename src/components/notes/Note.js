const Note = ({ title, handleClick }) => (
  <a href onClick={handleClick}>{title}</a>
);

export default Note;
