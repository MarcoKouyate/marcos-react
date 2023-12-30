import ListGroup from "./components/ListGroup";
import Terminal from "./components/Terminal";

function App() {
  const items = ["Paris", "London", "Tokyo", "Madrid"];
  return (
    <>
      <div>
        <ListGroup items={items}> Cities!</ListGroup>
      </div>
      <Terminal />
    </>
  );
}

export default App;
