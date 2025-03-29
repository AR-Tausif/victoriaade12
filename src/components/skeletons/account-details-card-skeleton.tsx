export const AccountDetailsCardSkeleton = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-20 animate-pulse h-full">
      <div className="flex flex-col items-center relative">
        <p className="absolute top-2 right-2 text-gray-500 cursor-pointer">×</p>
        <div className="w-24 h-24 rounded-full bg-gray-200" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
      <div className="h-10"></div>
      <div className="mt-4 pt-4">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <ul className="mt-2 space-y-2 text-gray-700 flex flex-col gap-4">
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
          <li className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/4" />{" "}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </li>
        </ul>
      </div>
    </div>
  );
};
