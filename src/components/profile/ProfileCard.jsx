import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import ProfileImage from "./ProfileImage";

function ProfileCard() {
  const [preview, setPreview] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center text-center w-full h-fit bg-white shadow rounded-xl p-6">
      
      {/* Profile Image Component */}
      <ProfileImage preview={preview} setPreview={setPreview} setOpen={setOpen} />

      <h2 className="text-xl font-bold mt-5">Front-End Developer</h2>

      <p className="text-base text-gray-600 mt-2">
        Role: <span className="font-semibold text-primary">Admin</span>
      </p>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: preview || "" }]}
        plugins={[Zoom]}
      />
    </div>
  );
}

export default ProfileCard;
