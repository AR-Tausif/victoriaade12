import { ChevronDown, Eye, Search } from "lucide-react";

const users = Array(12).fill({
  id: "#01",
  name: "Robert Fox",
  email: "email@gmail.com",
  date: "11 oct 2024",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
});

export const OfferReview = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header with Search and Filter */}
        <div className="p-4 flex justify-between items-center gap-4">
          {/* Dropdown */}
          <div className="relative">
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-gray-600 bg-white hover:bg-gray-50">
              This Month
              <ChevronDown size={16} />
            </button>
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
                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-600">{user.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{user.email}</td>
                  <td className="py-4 px-6 text-gray-600">{user.date}</td>
                  <td className="py-4 px-6">
                    <button className="text-gray-600 hover:text-purple-600">
                      <Eye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
