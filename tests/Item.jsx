import Draggable from "../src/components/Draggable";
import "./style.css";

function Item() {
  return (
    <>
      <Draggable>
        <div className="item" id="draggable">
          Item 1
        </div>
      </Draggable>
      <Draggable>
        <div className="item" id="draggable2">
          Item 2
        </div>
      </Draggable>
      <Draggable>
        <div className="item" id="draggable3">
          Item 3
        </div>
      </Draggable>
    </>
  );
}

export default Item;
