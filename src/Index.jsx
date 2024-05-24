import Draggable from "./components/Draggable";
import DropableArea from "./components/DropableArea";

function Index() {
  return (
    <div>
      <DropableArea>
        <div style={{ background: "green", height: "300px", width: "300px" }}>
          ola mundo
        </div>
      </DropableArea>
      <Draggable>
        <div style={{ background: "yellow", width: "100px", height: "100px" }}>
          bom dia
        </div>
      </Draggable>
    </div>
  );
}

export default Index;
