import { FiUser, FiTrash2 } from "react-icons/fi";

function ProfileImage({ preview, setPreview, setOpen }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setPreview("");
  };

  return (
    <div className="flex flex-col items-center">
      {/* Image Wrapper */}
      <div className="relative w-32 h-32 group">
        
        {/* Delete Icon */}
        {preview && (
          <button
            onClick={handleDeleteImage}
            className="
              absolute -top-2 -right-2 
              bg-primary/50 text-white p-2 rounded-full shadow 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              scale-100 sm:scale-90 sm:group-hover:scale-100
              transition-all duration-200 z-10 cursor-pointer
            "
          >
            <FiTrash2 size={16} />
          </button>
        )}

        {/* Image */}
        <div
          onClick={() => preview && setOpen(true)}
          className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden flex items-center justify-center cursor-pointer"
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <FiUser className="w-20 h-20 text-gray-400" />
          )}
        </div>
      </div>

      {/* Upload Button */}
      <label className="mt-4 bg-primary text-white px-4 py-2 rounded text-sm cursor-pointer hover:bg-primary/90 duration-200">
        Upload Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default ProfileImage;
