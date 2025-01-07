import PageNavigateHeader from "../components/NavigateHeader";
import Oxigen from "./oxigen";
import Red from "./red";
import Power from "./power";
import { useState } from "react";

function App() {
  const componentsMap = {
    component1: <Oxigen />,
    component2: <Red />,
    component3: <Power />,
  };

  const [activeComponent, setActiveComponent] = useState("component1");

  const buttons = [
    { className: "bg-blue-500", id: "component1", label: "اکسیژن" },
    { className: "bg-red-500", id: "component2", label: "رد" },
    { className: "bg-green-500", id: "component3", label: "پاور" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1500px] m-auto">
        <PageNavigateHeader
          buttons={buttons}
          componentsMap={componentsMap}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>
    </div>
  );
}

export default App;
