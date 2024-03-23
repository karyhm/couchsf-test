interface ProfileInformationProps {
  username: string;
  name: string;
  email: string;
}

const ProfileInformation = (props: ProfileInformationProps) => {
  const { username, name, email } = props;
  return (
    <div>
      <p className="username">
        <label>Username: </label>
        {username}
      </p>
      <p className="name">
        <label>Name: </label>
        {name}
      </p>
      <p className="email">
        <label>Email: </label>
        {email}
      </p>
    </div>
  );
};

export default ProfileInformation;
