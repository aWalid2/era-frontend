import { useState } from "react";
import UsersTable from "../components/users/Table";
import Users_Form from "../components/users/Users_Form";

const usersData = [
  {
    id: 1,
    name: "Maged",
    email: "Maged.mego@gmail.com",
    password: "dkslfjdsdf",
    role: "Admin",
    position: "FrontEnd Developer",
    lastLogin: "2024-02-10",
    dateJoin: "2023-01-15",
    salary: 5000,
    state: "Available",
    gender: "Male",
  },
];

function Users() {
  const [users, setUsers] = useState(usersData);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  console.log("Users component state:", { isOpen, isEdit, editingUser });

  const handleOpenAdd = () => {
    console.log("Opening Add modal");
    setIsEdit(false);
    setEditingUser(null);
    setIsOpen(true);
  };

  const handleOpenEdit = (user) => {
    console.log("handleOpenEdit called with user:", user);
    setIsEdit(true);
    setEditingUser(user);
    setIsOpen(true);
    console.log("After setState - isOpen should be true");
  };

  const handleClose = () => {
    console.log("Closing modal");
    setIsOpen(false);
    setIsEdit(false);
    setEditingUser(null);
  };

  const handleSubmit = (values) => {
    console.log("Submitted Values:", values);

    if (isEdit) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user,
        ),
      );
      console.log("User updated successfully");
    } else {
      const newUser = {
        id: users.length + 1,
        ...values,
      };
      setUsers([...users, newUser]);
      console.log("User added successfully");
    }

    setIsOpen(false);
    setIsEdit(false);
    setEditingUser(null);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="mb-1 text-xl font-bold sm:text-2xl">Users Management</h1>
        <p className="text-xs text-gray-600 sm:text-sm">
          Add, edit, and manage system users and their access rights
        </p>
      </div>

      {/* Table */}
      <div className="rounded-lg bg-white p-3 shadow">
        <div className="mb-3 flex justify-end">
          <button
            onClick={handleOpenAdd}
            className="bg-primary hover:bg-primary/90 cursor-pointer rounded px-3 py-1 text-xs text-white duration-200 sm:text-sm"
          >
            + Add User
          </button>
        </div>

        <UsersTable handleOpenEdit={handleOpenEdit} data={users} />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-5 text-xl font-bold">
              {isEdit ? "Edit User" : "Add User"}
            </h2>

            <Users_Form
              isEdit={isEdit}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              initialValues={editingUser}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
