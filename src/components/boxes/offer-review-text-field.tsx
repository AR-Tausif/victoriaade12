export const OfferReviewTextField = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="">
      <p className="text-md text-gray-400 -tracking-tight">{title}</p>
      <p className="font-medium text-black text-lg">{value}</p>
    </div>
  );
};
