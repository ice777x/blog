import React from "react";

export default function Loading() {
  return (
    <main>
      <div className="text-sm text-gray-600 font-bold uppercase">Feed</div>
      <div className="divide-y-2  divide-dashed divide-gray-400 animate-pulse">
        {[...Array(5)].map((i) => (
          <div key={i} className="w-full p-4 relative mb-2">
            <div className="hover:text-blue-600 mb-4 block transition-colors duration-300">
              <h1 className="w-1/3 h-2 bg-gray-400 rounded-full"></h1>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 mb-4">
              <div className="w-20 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-48 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-48 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-32 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500 w-24 h-2 bg-gray-500 rounded-full mb-1"></div>
              <div className="flex space-x-1 text-sm text-gray-500 items-center">
                <div className="w-16 h-2 rounded-full bg-gray-600"></div>
                <span aria-hidden="true">&middot;</span>
                <div className="w-24 h-2 rounded-full bg-gray-600"> </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
