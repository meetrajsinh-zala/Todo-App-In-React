import React from "react";
import Background from "./Components/Background";
import Forground from "./Components/Forground";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <Background />
      <Forground />
    </div>
  );
};

export default App;
