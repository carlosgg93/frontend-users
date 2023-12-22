const Note = ({
  id, title, content, handleClick,
}) => (
  <a href onClick={handleClick}>{title}</a>
);

export default Note;
