import React from "react";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center py-12 ">
      <div className="flex flex-col">
        <h2 className="text-white/70 text-base">My Balance</h2>
        <h1 className="text-4xl text-white">$ 8500</h1>
        <div className="flex gap-x-3 py-6">
          <button className="p-2 rounded-2xl border text-green-700 hover:bg-white/10 border-green-700">
            + Expenses
          </button>
          <button className="p-2 rounded-2xl border text-green-700 hover:bg-white/10 border-green-700">
            + Income
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
