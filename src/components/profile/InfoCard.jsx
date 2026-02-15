function InfoCard() {
  return (
    <div className="bg-white shadow rounded-xl p-8 w-full min-h-full">
      <h2 className="text-xl font-bold mb-6">User Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Name */}
        <div>
          <p className="text-gray-500 text-lg">Your Name:</p>
          <p className="font-semibold text-lg text-gray-800">Ahmed Mohamed</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-500 text-lg">Your Email:</p>
          <p className="font-semibold text-lg text-gray-800">ahmed@gmail.com</p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-gray-500 text-lg">Your Phone:</p>
          <p className="font-semibold text-lg text-gray-800">01067118139</p>
        </div>

        {/* Salary */}
        <div>
          <p className="text-gray-500 text-lg">Salary:</p>
          <p className="font-semibold text-lg text-gray-800">5000 EGP</p>
        </div>

        {/* Join Date */}
        <div>
          <p className="text-gray-500 text-lg">Join Date:</p>
          <p className="font-semibold text-lg text-gray-800">2024-01-15</p>
        </div>

        {/* Gender */}
        <div>
          <p className="text-gray-500 text-lg">Gender:</p>
          <p className="font-semibold text-lg text-gray-800">Male</p>
        </div>

        {/* State */}
        <div>
          <p className="text-gray-500 text-lg">State:</p>
          <p className="font-semibold text-lg text-gray-800">Available</p>
        </div>

        {/* Last Login */}
        <div>
          <p className="text-gray-500 text-lg">Last Login:</p>
          <p className="font-semibold text-lg text-gray-800">2025-02-10</p>
        </div>

      </div>
    </div>
  );
}

export default InfoCard;
