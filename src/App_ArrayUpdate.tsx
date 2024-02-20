import React, { useState } from "react";
function App() {
  const [tags, setTags] = useState(["Happy", "Sad"]);
  const handleClick = () => {
    //Add
    setTags([...tags, "Exciting"]);

    //remove
    setTags(tags.filter((tag) => tag !== "Sad"));

    //Update
    setTags(tags.map((tag) => (tag === "Happy" ? "Happiness" : tag)));
    console.log(tags);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
