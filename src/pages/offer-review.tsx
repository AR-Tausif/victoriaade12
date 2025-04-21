import { Button, Modal, Popconfirm } from "antd";
import { Eye, Search } from "lucide-react";
import { useState } from "react";
import { OfferReviewTextField } from "../components/boxes/offer-review-text-field";
import { OfferReviewType } from "../types/offer-review";
import {
  useApproveOfferMutation,
  useGetAllOffersQuery,
  useRejectOfferMutation,
} from "../redux/api/offer-review.api";
import { toast } from "sonner";
import { OfferReviewTableSkeleton } from "../components";
import { toTitleCase } from "../utils";

export const OfferReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<OfferReviewType>();
  // const [searchTerm, setSearchTerm] = useState("");
  // const [dateFilter, setDateFilter] = useState("");

  // Update the query to include filters
  const { data, isLoading: offerReviewLoading } = useGetAllOffersQuery();

  const [rejectOffer, { isLoading: rejectOfferIsLoading }] =
    useRejectOfferMutation();
  const [approveOffer, { isLoading: approveOfferIsLoading }] =
    useApproveOfferMutation();
  const showModal = (record: OfferReviewType) => {
    setIsModalOpen(true);
    setSelectedUser(record);
  };

  // Handle date filter change
  // const handleDateFilter = (filter: string) => {
  //   setDateFilter(filter);
  // };

  // Handle search input
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const confirm = async (offerId: string) => {
    try {
      const response = await rejectOffer(offerId).unwrap();
      toast.success(
        response.message ? response.message : "Offer deleted successfully"
      );
    } catch (error: any) {
      toast.error(
        error.data.message ? error.data.message : "Something went wrong"
      );
    }
  };
  const handleApproveOffer = async (offerId: string) => {
    try {
      const response = await approveOffer(offerId).unwrap();
      toast.success(
        response.message ? response.message : "Offer approved successfully"
      );
    } catch (error: any) {
      toast.error(
        error.data.message ? error.data.message : "Something went wrong"
      );
    }
  };
  // new Promise((resolve) => {
  //   // const response = rejectOffer(offerId).unwrap();
  //   // resolve(response); // Resolve the Promise with the response
  //   toast.success("Offer deleted successfully");
  // });
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header with Search and Filter */}
        <div className="p-4 flex justify-between items-center gap-4">
          {/* Dropdown */}
          <div className="relative">
            {/* <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-gray-600 bg-white hover:bg-gray-50">
              This Month
              <ChevronDown size={16} />
            </button> */}
            {/* <OfferReviewDropdown /> */}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search User"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-4 px-6 text-left">Serial</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Status</th>

                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>
            {offerReviewLoading ? (
              <OfferReviewTableSkeleton />
            ) : (
              <tbody>
                {data?.data?.data?.map((offerReview, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 text-gray-600">{index}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            offerReview.creator.profileImage
                              ? offerReview.creator.profileImage
                              : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          }
                          alt={offerReview.creator.firstName}
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{offerReview.creator.firstName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {offerReview.creator.email}
                    </td>

                    <td className="py-4 px-6 text-gray-600">
                      {new Date(offerReview.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <p
                        className={`w-fit text-center px-3 p-1 rounded-sm ${
                          offerReview.status === "reject"
                            ? "bg-red-300/50"
                            : offerReview.status === "approve"
                            ? "bg-yellow-300/50"
                            : "bg-green-300/50"
                        }`}
                      >
                        {toTitleCase(offerReview.status)}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className="text-gray-600 hover:text-purple-600"
                        onClick={() => showModal(offerReview)}
                      >
                        <Eye size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        <Modal
          open={isModalOpen}
          footer={null}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="p-4">
            <div className="h-[270px] overflow-hidden rounded-md my-4">
              <img
                src={
                  selectedUser?.photos && selectedUser.photos.length > 0
                    ? selectedUser.photos[0]
                    : "https://s3-alpha-sig.figma.com/img/898b/9854/d4e0910dc5b6900b5a266309c7c70b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m36~rEyVBzDmxxM6QGbn2ST0NKFbN9Y1lGatvQ9HSjPusp2LhwqAmiPDQ-gSybsFmNdMvQK2Dk~6R5cZJ1vdS6PFPxkRJEFUoc7ckM2jzyMEh5m3Usj8Lj~cc~kTjL0L4CQTxkPlDA8MqTIfxByEw7pLWG-TxZXOZnlDEaf3VHWsWEJkD7bAUIrNor8miM34xUkya8zj0vFFPcaG8IE7cWHQbcxWh95INkHQFRTn~6ArVoiAARgmj6OLkbelO4q3n20SmFGS-v7uMtmRGz3bsKWvUGw0puUK6zzafZWo92cjRm4aqy0SOHN3FSJhfegHCEWQP20HeS96mjO7IZhDoQ__"
                }
                alt="modal image"
                className="object-cover bg-center rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              <div className="">
                <OfferReviewTextField
                  title="Category Name"
                  value={
                    selectedUser?.categoryId?.name
                      ? (selectedUser?.categoryId?.name as string)
                      : "N/A"
                  }
                />
              </div>
              <div className="">
                {/* <OfferReviewTextField title="Discount Price" value="50%" /> */}
                <OfferReviewTextField
                  title="Discount"
                  value={
                    selectedUser?.discount ? `${selectedUser.discount}%` : ""
                  }
                />
              </div>
              <OfferReviewTextField
                title="Duration Time"
                value="Limited time offer"
              />
              <OfferReviewTextField
                title="Description"
                value={selectedUser?.description as string}
              />
            </div>

            <div className=""></div>
          </div>
          <div className="flex justify-center gap-2">
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
                color: "#FDFDFD",
              }}
              disabled={approveOfferIsLoading}
              loading={approveOfferIsLoading}
              onClick={() => handleApproveOffer(selectedUser?._id as string)}
            >
              Approve
            </Button>

            <Popconfirm
              title="Title"
              description="Open Popconfirm with Promise"
              onConfirm={() =>
                selectedUser ? confirm(selectedUser._id) : undefined
              }
              onOpenChange={() => console.log("open change")}
            >
              <Button
                disabled={rejectOfferIsLoading}
                loading={rejectOfferIsLoading}
                className="border-border border-red-600 w-full text-red-600"
              >
                Reject
              </Button>
            </Popconfirm>
          </div>
        </Modal>
      </div>
    </div>
  );
};
