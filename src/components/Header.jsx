import React from "react";

function Header({ children }) {
  return (
    <header className="h-16 sticky top-0 bg-gray-200 z-50 bg-opacity-30 w-full border-b border-gray-400">
      <div className="flex justify-center items-center h-full">{children}</div>
    </header>
  );
}

export default Header;
