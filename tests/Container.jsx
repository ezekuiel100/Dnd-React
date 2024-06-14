import Item from "./Item";
import DropableArea from "../src/components/DropableArea";

function Container() {
  return (
    <>
      <DropableArea>
        <div
          id="dropableArea"
          style={{
            width: "200px",
            height: "300px",
            background: "red",
            padding: "10px",
            margin: "0",
          }}
        >
          <Item />
        </div>
      </DropableArea>
      <DropableArea>
        <div
          id="dropableArea2"
          style={{
            width: "200px",
            height: "300px",
            background: "red",
            padding: "10px",
            margin: "0",
          }}
        ></div>
      </DropableArea>
      <DropableArea>
        <div
          id="dropableArea3"
          style={{
            width: "200px",
            height: "300px",
            background: "red",
            padding: "10px",
            margin: "0",
          }}
        ></div>
      </DropableArea>
    </>
  );
}

export default Container;
