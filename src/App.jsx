import Index from "./Index";
import Draggable from "./components/Draggable";
import DropableArea from "./components/DropableArea";

function App() {
  return (
    <>
      {Array.from({ length: 5 }, (el, i) => (
        <Draggable key={i}>
          <div style={{ background: "red", width: "100px", height: "100px" }}>
            bom dia
          </div>
        </Draggable>
      ))}

      <Index />
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
