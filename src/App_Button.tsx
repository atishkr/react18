import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button
        color="danger"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
