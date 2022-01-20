import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";

function App() {
  //   console.log(hogs);
  const [showGreased, setShowGreased] = useState(true);

  return (
    <div className="App">
      <Nav setShowGreased={setShowGreased} />
      <HogTiles
        showGreased={showGreased}
        hogs={hogs.filter((hog) => showGreased || !hog.greased)}
      />
    </div>
  );
}

export default App;
