/** @format */

// src/components/SkeletonLoader.js
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4  p-4">
      <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/6 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/6 mx-auto"></div>
    </div>
  );
};

export default SkeletonLoader;
