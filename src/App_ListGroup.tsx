import ListGroup from "./components/ListGroup";

function App_ListGroup() {
  let items = ["New York", "San Franssico", "Paris", "London", "Tokio"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App_ListGroup;
