export const OfferReviewTableSkeleton = () => {
  return (
    <tbody>
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
      <TableSkeletonRow />
    </tbody>
  );
};

const TableSkeletonRow = () => {
  return (
    <tr>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="h-4 bg-gray-200  w-full rounded-lg animate-pulse"></div>
      </td>
    </tr>
  );
};
