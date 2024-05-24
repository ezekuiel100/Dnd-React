function Draggable({ children }) {
  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  return (
    <div draggable onDragStart={handleDragStart} id="draggable">
      {children}
    </div>
  );
}

export default Draggable;
