import { useContext } from "react";
import { DragContext } from "../App";

function DropableArea({ children }) {
  const { dragged } = useContext(DragContext);

  function handleDrop(e) {
    e.preventDefault();
    e.target.append(dragged);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}

export default DropableArea;
