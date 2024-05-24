import Index from "./Index";
import Draggable from "./components/Draggable";
import DropableArea from "./components/DropableArea";

function App() {
  return (
    <>
      <DropableArea>
        <div style={{ background: "blue", width: "400px", height: "400px" }}>
          <Index />
          <Index />
        </div>
        <div
          style={{ background: "green", width: "400px", height: "400px" }}
        ></div>
      </DropableArea>
    </>
  );
}

export default App;
