import React from "react";

export const PostSkeleton = () => {
  return (
    <div className="mx-auto mt-6 w-full animate-pulse rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-gray-200" />
        <div className="w-full">
          <div className="h-4 w-1/2 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
      <div className="mt-4 text-gray-700">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="mt-2 h-4 w-full rounded bg-gray-200" />
        <div className="mt-2 h-4 w-2/3 rounded bg-gray-200" />
      </div>
      <div className="mt-4">
        <div className="h-64 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
};
