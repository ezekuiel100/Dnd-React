import Draggable from "../src/components/Draggable";
import "./style.css";

function Item() {
  return (
    <Draggable>
      <div className="item">bom dia</div>
    </Draggable>
  );
}

export default Item;
