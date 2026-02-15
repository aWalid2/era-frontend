function UsersTableHead() {
  const thStyle = "border border-gray-200 px-2 py-2 font-semibold";
    const tStyle = "text-center whitespace-nowrap";


  return (
    <thead className="bg-gray-100">
      <tr>
        <th className={thStyle}>Name</th>
        <th className={thStyle}>Email</th>
        <th className={thStyle}>Role</th>

              <th className={`${thStyle} ${tStyle}`}>
          Last Login
        </th>

        <th className={`${thStyle} ${tStyle}`}>
          Date Join
        </th>

        <th className={`${thStyle} text-center`}>State</th>

        <th className={`${thStyle} ${tStyle}`}>
          Action
        </th>
      </tr>
    </thead>
  );
}

export default UsersTableHead;
