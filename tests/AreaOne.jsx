import Item from "./Item";
import DropableArea from "../src/components/DropableArea";

function AreaOne() {
  return (
    <DropableArea>
      <div
        style={{
          width: "200px",
          height: "300px",
          background: "red",
          padding: "10px",
        }}
      >
        <Item />
      </div>
    </DropableArea>
  );
}

export default AreaOne;
