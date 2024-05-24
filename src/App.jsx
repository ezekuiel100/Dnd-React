import Draggable from "./components/Draggable";
import DropableArea from "./components/DropableArea";

function App() {
  return (
    <>
      <Draggable>
        <div style={{ background: "red", width: "100px", height: "100px" }}>
          bom dia
        </div>
      </Draggable>

      <DropableArea>
        <div
          style={{ background: "blue", width: "400px", height: "400px" }}
        ></div>
        <div
          style={{ background: "green", width: "400px", height: "400px" }}
        ></div>
      </DropableArea>
    </>
  );
}

export default App;
