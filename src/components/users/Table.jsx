function UsersTable({ handleOpenEdit, data }) {
  const users = Array.isArray(data) ? data : data ? [data] : [];

  if (users.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No users found. Click "Add User" to create one.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left text-sm font-semibold">Name</th>
            <th className="p-3 text-left text-sm font-semibold">Email</th>
            <th className="p-3 text-left text-sm font-semibold">Role</th>
            <th className="p-3 text-left text-sm font-semibold">Position</th>
            <th className="p-3 text-left text-sm font-semibold">State</th>
            <th className="p-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id || index} className="border-b hover:bg-gray-50">
              <td className="p-3 text-sm">{user.name}</td>
              <td className="p-3 text-sm">{user.email}</td>
              <td className="p-3 text-sm">{user.role}</td>
              <td className="p-3 text-sm">{user.position}</td>
              <td className="p-3 text-sm">
                <span
                  className={`rounded px-2 py-1 text-xs ${user.state === "Available"
                      ? "bg-green-100 text-green-800"
                      : user.state === "Blocked"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                >
                  {user.state}
                </span>
              </td>
              <td className="p-3 text-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                  <button
                    onClick={() => {
                      handleOpenEdit(user);
                    }}
                    className="w-full sm:w-auto rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button className="w-full sm:w-auto rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
