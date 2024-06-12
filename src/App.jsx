import Index from "./Index";
import DropableArea from "./components/DropableArea";

function App() {
  return (
    <>
      <Index />
      <DropableArea>
        <div style={{ background: "blue", width: "400px", height: "400px" }}>
          {/* <Index /> */}
        </div>
        <div
          style={{ background: "green", width: "400px", height: "400px" }}
          data="dropableArea"
        ></div>
      </DropableArea>
    </>
  );
}

export default App;
