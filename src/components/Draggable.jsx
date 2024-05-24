import { v4 as uuidv4 } from "uuid";

function Draggable({ children }) {
  const id = `dragable-${uuidv4()}`;

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="non-dropable"
      id={`${id}`}
    >
      {children}
    </div>
  );
}

export default Draggable;
