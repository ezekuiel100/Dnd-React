import { useContext } from "react";
import { DragContext } from "../App";

function Draggable({ children }) {
  const { setDragged } = useContext(DragContext);

  function handleDragStart(e) {
    setDragged(e.target);
  }

  return (
    <div draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
}

export default Draggable;
