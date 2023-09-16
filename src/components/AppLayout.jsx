import React from "react";

function AppLayout({ children }) {
  return (
    <div className="w-[22%] h-[700px] bg-white rounded-md overflow-x-hidden overflow-y-scroll relative border-4 border-gray-600">
      {children}
    </div>
  );
}

export default AppLayout;
