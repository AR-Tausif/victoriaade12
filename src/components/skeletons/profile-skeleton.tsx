const ProflieSkeleton = () => {
  return (
    <div className="flex justify-center items-centerborder">
      <div role="status" className="w-2/4 animate-pulse">
        <div className="h-3 bg-gray-200 rounded-xs dark:bg-gray-700 w-48 mb-4 mx-auto mt-10"></div>
        <div className="my-20 max-w-sm mx-auto p-4 space-y-6">
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-xs dark:bg-gray-700 max-w-[36px] "></div>
            <div className="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] "></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-xs dark:bg-gray-700 max-w-[36px] "></div>
            <div className="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] "></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-xs dark:bg-gray-700 max-w-[36px] "></div>
            <div className="h-10 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] "></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default ProflieSkeleton;
