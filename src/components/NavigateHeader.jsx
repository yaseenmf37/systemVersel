import React, { useState, useEffect } from "react";

function Home({ buttons, componentsMap }) {
  const savedComponent =
    localStorage.getItem("homeActiveComponent") || "component1";
  const [activeComponent, setActiveComponent] = useState(savedComponent);

  useEffect(() => {
    localStorage.setItem("homeActiveComponent", activeComponent);
  }, [activeComponent]);

  return (
    <div>
      <header className="bg-gradient-to-r from-slate-800 via-gray-600 to-zinc-400 text-white p-6 shadow-lg mt-1 rounded">
        <nav className="flex justify-evenly items-center">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`min-w-[8rem] px-6 py-3 text-gray-600 font-semibold rounded-lg shadow-md transition-all duration-300
          
          ${
            activeComponent === button.id
              ? `${button.className} hover:scale-105 hover:shadow-lg text-slate-200`
              : "bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg"
          }`}
              onClick={() => setActiveComponent(button.id)}
            >
              {button.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="p-4">{componentsMap[activeComponent]}</main>
    </div>
  );
}

export default Home;
