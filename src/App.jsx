import Draggable from "./components/Draggable";
import DropableArea from "./components/DropableArea";
import { createContext, useState } from "react";

export const DragContext = createContext({});

function App() {
  const [dragged, setDragged] = useState(null);

  return (
    <>
      <DragContext.Provider value={{ dragged, setDragged }}>
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
      </DragContext.Provider>
    </>
  );
}

export default App;
