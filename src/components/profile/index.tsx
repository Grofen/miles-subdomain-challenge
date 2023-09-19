import { User } from "@auth0/auth0-react";

type Props = {
  user: User;
};

const Profile = ({ user }: Props) => {
  return (
    user && (
      <div className="flex flex-col items-center justify-center">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-20 h-20"
        />
        <h2 className="text-2xl mt-4">{`Welcome back, ${user.name}!`}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    )
  );
};

export default Profile;
