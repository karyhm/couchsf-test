import Image from "next/image";
import profileImg from "@/app/assets/photo.jpg";

const ProfileImage = () => {
  return (
    <div>
      <Image
        src={profileImg}
        alt="Profile picture"
        height={50}
        width={50}
        priority
      />
    </div>
  );
};

export default ProfileImage;
