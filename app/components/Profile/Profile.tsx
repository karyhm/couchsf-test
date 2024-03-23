import ProfileImage from "./ProfileImage";
import ProfileInformation from "./ProfileInformation";
import { User } from "@/app/types/index"
import Loader from "@/app/components/Loader/Loader";

interface ProfileProps {
  user: User;
}

const Profile = (props: ProfileProps) => {
  const { user } = props;

  return (
    <div id="profile" className="section">
      <h1>Profile</h1>

      <div className="container flex-row">
        {!user ? (
          <Loader />
        ) : (
          <>
            <ProfileImage />
            <ProfileInformation {...user} />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
