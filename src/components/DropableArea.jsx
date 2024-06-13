function DropableArea({ children }) {
  function handleDrop(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let el = document.querySelector(`#${id}`);

    const isNonDropable = e.target.closest(".non-dropable");

    if (isNonDropable) {
      return;
    }

    if (el) {
      e.target.append(el);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ display: "inline-block", fontSize: "0" }}
    >
      {children}
    </div>
  );
}

export default DropableArea;
