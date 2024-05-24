function DropableArea({ children }) {
  function handleDrop(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let el = document.querySelector(`#${id}`);
    e.target.append(el);
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
