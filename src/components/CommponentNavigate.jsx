import React, { useState, useEffect } from "react";

function ComponentNavigateSidebar({ buttons }) {
  const savedComponent =
    localStorage.getItem(`sidebarActiveComponent-${buttons.length}`) ||
    buttons[0]?.id;
  const [activeComponent, setActiveComponent] = useState(savedComponent);

  useEffect(() => {
    localStorage.setItem(
      `sidebarActiveComponent-${buttons.length}`,
      activeComponent
    );
  }, [activeComponent, buttons.length]);

  return (
    <div className="flex h-screen gap-5">
      <aside className="w-1/4 bg-gray-100 shadow-md p-6 max-sm:p-[3px] h-fit sticky top-[70px] max-sm:w-fit rounded-md">
        <nav className="flex flex-col space-y-4 max-sm:w-fit">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`${
                button.className
              } text-left px-4 py-2 font-bold rounded-lg ${
                button.color
              } hover:text-slate-600 hover:scale-105 transition-all duration-300 max-sm:text-xs max-sm:text-center ${
                activeComponent === button.id
                  ? ` hover:text-white ${button.classNames} `
                  : "text-gray-700"
              }`}
              onClick={() => setActiveComponent(button.id)}
            >
              {button.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        {buttons.find((button) => button.id === activeComponent)?.component}
      </main>
    </div>
  );
}

export default ComponentNavigateSidebar;
