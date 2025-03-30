export const OfferReviewTextField = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
};
